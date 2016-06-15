/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
} from 'graphql-relay';

import {
  // Import methods that your schema can use to interact with your database
  User,
  Friend,
  getUser,
  getViewer,
  getFriend,
  getFriends,
  getNewfriendId,
  addFriend,
} from './database';

/**
 * We get the node interface and field from the Relay library.
 *
 * The first method defines the way we resolve an ID to its object.
 * The second defines the way we resolve an object to its GraphQL type.
 */
var {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    var {type, id} = fromGlobalId(globalId);
    if (type === 'User') {
      return getUser(id);
    } else if (type === 'Friend') {
      return getFriend(id);
    } else {
      return null;
    }
  },
  (obj) => {
    if (obj instanceof User) {
      return userType;
    } else if (obj instanceof Friend)  {
      return friendType;
    } else {
      return null;
    }
  }
);

/**
 * Define your own types here
 */

var userType = new GraphQLObjectType({
  name: 'User',
  description: 'A person who uses our app',
  fields: () => ({
    id: globalIdField('User'),
    friend: {
      type: friendConnection,
      description: 'A person\'s collection of friends',
      args: connectionArgs,
      resolve: (_, args) => connectionFromArray(getFriends(), args),
    },
  }),
  interfaces: [nodeInterface],
});

var friendType = new GraphQLObjectType({
  name: 'Friend',
  description: 'A friend',
  fields: () => ({
    id: globalIdField('Friend'),
    name: {
      type: GraphQLString,
      description: 'The name of the friend',
    },
    tribe: {
      type: GraphQLString,
      description: 'The type of the friend',
    },
    issues: {
      type: GraphQLInt,
      description: 'number of issues for friend',
    },
  }),
  interfaces: [nodeInterface],
});

/**
 * Define your own connection types here
 */
var {connectionType: friendConnection} =
  connectionDefinitions({name: 'Friend', nodeType: friendType});

/**
 * This is the type that will be the root of our query,
 * and the entry point into our schema.
 */
var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    // Add your own root fields here
    viewer: {
      type: userType,
      resolve: () => getViewer(),
    },
  }),
});

/**
 * This is the type that will be the root of our mutations,
 * and the entry point into performing writes in our schema.
 */
var mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    // Add your own mutations here
    addFriend: friendMutation
  })
});

var friendMutation = mutationWithClientMutationId({
  name: 'AddFriend',
  description: 'Adding a new friend',
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    tribe: {
      type: new GraphQLNonNull(GraphQLString)
    },
    issues: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  },
  outputFields: {
    name: {
      type: GraphQLString,
      resolve: (payload) => [payload.name]
    },
    tribe: {
      type: GraphQLString,
      resolve: (payload) => [payload.tribe]
    },
    issues: {
      type: GraphQLInt,
      resolve: (payload) => [payload.issues]
    }
  },
  mutateAndGetPayload: ({name, tribe, issues}) => {
    var newFriend = {
      id: getNewfriendId(),
      name: name,
      tribe: tribe,
      issues: issues
    };
    addFriend(newFriend);
    return newFriend;
  }
});

/**
 * Finally, we construct our schema (whose starting query type is the query
 * type we defined above) and export it.
 */
export var Schema = new GraphQLSchema({
  query: queryType,
  // Uncomment the following after adding some mutation fields:
  mutation: mutationType
});
