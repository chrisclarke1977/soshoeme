/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

// Model types
class User {}
class Friend {}

// Mock data
var viewer = new User();
viewer.id = '1';
viewer.name = 'Anonymous';
var tribes = [
   "grass",  "water",  "fire",  "bug", "psychic",  "flying",  "ghost",  "fighting", "normal",  "poison",  "electric",  "ground", "fairy",  "rock",  "ice",  "dragon"
];
var names = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Nidorina",
  "Nidoqueen",
  "Nidorino",
  "Nidoking",
  "Clefairy",
  "Clefable",
  "Vuplix",
  "Ninetales",
  "Jigglypuff",
  "Wigglytuff",
  "Zubat",
  "Golbat",
  "Oddish",
  "Gloom",
  "Vileplume",
  "Paras",
  "Parasect",
  "Venonat",
  "Venomoth",
  "Diglett",
  "Dugtrio",
  "Meowth",
  "Persian",
  "Psyduck",
  "Golduck",
  "Mankey",
  "Primeape",
  "Growlithe",
  "Arcanine",
  "Poliwag",
  "Poliwhirl",
  "Poliwrath",
  "Abra",
  "Kadabra",
  "Alakazam",
  "Machop",
  "Machoke",
  "Machamp",
  "Bellsprout",
  "Weepinbell",
  "Victreebel",
  "Tentacool",
  "Tentacruel",
  "Geodude",
  "Graveler",
  "Golem",
  "Ponyta",
  "Rapidash",
  "Slowpoke",
  "Slowbro",
  "Magnemite",
  "Magneton",
  "Doduo",
  "Dodrio",
  "Seel",
  "Dewgong",
  "Grimer",
  "Muk",
  "Shellder",
  "Cloyster",
  "Gastly",
  "Haunter",
  "Gengar",
  "Onix",
  "Drozee",
  "Hypno",
  "Krabby",
  "Kingler",
  "Voltorb",
  "Electrode",
  "Exeggcute",
  "Exeggutor",
  "Cubone",
  "Marowak",
  "Hitmonchan",
  "Hitmonlee",
  "Lickitung",
  "Koffing",
  "Weezing",
  "Rhyhorn",
  "Rhydon",
  "Chansey",
  "Tangela",
  "Kangaskhan",
  "Horsea",
  "Seadra",
  "Goldeen",
  "Seaking",
  "Staryu",
  "Starmie",
  "Scyther",
  "Jynx",
  "Electabuzz",
  "Magmar",
  "Pinsir",
  "Tauros",
  "Magikarp",
  "Gyrados",
  "Lapras",
  "Ditto",
  "Eevee",
  "Vaporeon",
  "Jolteon",
  "Flareon",
  "Porygon",
  "Omanyte",
  "Omastar",
  "Kabuto",
  "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno",
  "Zapdos",
  "Moltres",
  "Dratini",
  "Dragonair",
  "Dragonite",
  "Mewtwo",
  "Mew"
];
var saveFriend = (name, i, tribe, issues ) => {
  var friend = new Friend();
  friend.name = name;
  friend.id = `${i}`;
  friend.tribe = tribe;
  friend.issues = issues;
  return friend;
};
var friends = names.map((name, i) => {
  var myTribe = tribes[Math.floor(Math.random()*tribes.length)];
  var myIssues = Math.floor(Math.random()*1000);
  return saveFriend(name, i, myTribe, myIssues);
});
var getNewfriendId = () => {
  return friends.length;
};

module.exports = {
  // Export methods that your schema can use to interact with your database
  getUser: (id) => id === viewer.id ? viewer : null,
  getViewer: () => viewer,
  getFriend: (id) => friends.find(w => w.id === id),
  getFriends: () => friends,
  getNewfriendId: () => getNewfriendId(),
  addFriend: (friend) => { console.log('Friends: ', friends); friends[friend.id] = saveFriend(friend.name, friend.id, friend.tribe, friend.issues ); return friend },
  User,
  Friend,
};
