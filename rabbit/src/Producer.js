// Adapted from:
// https://github.com/rabbitmq/rabbitmq-tutorials/blob/master/javascript-nodejs/send.js
var fbs = require('./Request_generated.js').fbs;
var flatbuffers = require('../lib/flatbuffers/js/flatbuffers').flatbuffers;
var amqp = require('amqp');
var connection = amqp.createConnection ( {host: 'localhost'} );
var queueToSendTo = "recvMQ";
var queueToReceiveFrom = "sendMQ";
var stdin = process.stdin;

function buildChatCreate(title, users, chatType){
	var fbb = new flatbuffers.Builder(0);

	fbs.Request.messaging.ChatCreate.startRequest(fbb);
	fbs.Request.addId(fbb, idOffset);
	fbs.Request.addToken(fbb, tokenOffset);
	fbs.Request.addActionType(fbb, actionType);
	fbs.Request.addAction(fbb, actionOffset);
	var mon = fbs.Request.endRequest(fbb);

	return fbb;
}

function buildFB(idString, tokenString, actionType, actionString){
	var fbb = new flatbuffers.Builder(1);
	var idOffset = fbb.createString(idString);
	var tokenOffset = fbb.createString(tokenString);
	var actionOffset = fbb.createString(actionString);

	fbs.Request.startRequest(fbb);
	fbs.Request.addId(fbb, idOffset);
	fbs.Request.addToken(fbb, tokenOffset);
	fbs.Request.addActionType(fbb, actionType);
	fbs.Request.addAction(fbb, actionOffset);
	var mon = fbs.Request.endRequest(fbb);

	fbs.Request.finishRequestBuffer(fbb, mon);

	return fbb.dataBuffer(); //.asUint8Array(); // uint8Array
}

function deserFB(arr){
	console.log("BB RECV: ", arr);
	// console.log("BB Uint: ", new Uint8Array(arr) );
	var bb = new flatbuffers.ByteBuffer(arr);
	// console.log("Deser Out: ", fbs.Request.getRootAsRequest(bb));
	var ret = fbs.Request.getRootAsRequest(bb);
	return ret;
}

function sendMsg(con,q,msg){
	con.publish(q, msg);
	console.log( "Sent message: " + msg);
}

connection.on
(
	'ready',
	function()
	{
		var messageToSend = "Connection open!";
		// sendMsg(connection,queueToSendTo,messageToSend);

		connection.queue
		(
			queueToReceiveFrom,
			{autoDelete: false},
			function(queue)
			{
				console.log('Waiting messages...');
				queue.subscribe(
					function(messageReceived)
					{
						var r = deserFB(messageReceived.data);
						console.log(r.id()); // JSON.stringify(r));
						console.log(r.token());
						console.log(r.actionType());
						console.log(r.action());
					});
			}
		);
	}
);

stdin.setRawMode( true );
stdin.resume();
stdin.setEncoding( 'utf8' );

stdin.on( 'data', function( key ){
  // ctrl-c ( end of text )
  if ( key === '\u0003' ) {
    process.exit();
  }
  // write the key to stdout all normal like
  process.stdout.write( key );
	if(key){
		var idString = ["one","two","three"][Math.floor(Math.random()*3)];
		var tokenString = ["oneToken","twoToken","threeToken"][Math.floor(Math.random()*3)];
		var actionNumber = [0,1,2,3,4,5,6,7,8,9][Math.floor(Math.random()*10)];
		var actionString = ["actionOne","actionTwo","actionThree"][Math.floor(Math.random()*3)];

		var buf = buildFB(idString, tokenString, actionNumber, actionString);
		sendMsg(connection,queueToSendTo,buf);
	}
});
