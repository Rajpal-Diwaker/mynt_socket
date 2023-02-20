var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userschema = new Schema({
	userName: {
		type: String
	},

	userId : {
		type: String,
		unique:true
	}, 
    deviceType:{
		type:String,
		default:"iOS"
    },
	deviceToken : {
		type : String,
		default : null
	},
	profilePic:{
		type:String

	},
	profilePicFull:{
		type:String
	},
	createdAt:{
		type:Date,
		default:Date.now()
	},
	blockedUsers:[String],
	deletedUsers:[String]
});

var chatUsers = mongoose.model('chatUsers', userschema);

module.exports = chatUsers;
