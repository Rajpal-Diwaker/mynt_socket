var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roomschema = new Schema({

	chatType: { type: String },
	bookingId: { type: String },
	activeUsers: [String],
	status: { type: String, default: "ACTIVE" },
	participants: [{ userId: { type: String }, status: { type: String, default: "ACTIVE" } }],
	createdAt: {
		type: Date,
		default: new Date()
	},
})

var Room = mongoose.model('Room', roomschema);

module.exports = Room;
