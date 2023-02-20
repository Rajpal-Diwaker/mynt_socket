let mongoose = require("mongoose");
// const util = require('../../helpers/constants');
let Schema = mongoose.Schema;
/* global.autoIncrement = require('mongoose-auto-increment');
let connection = mongoose.createConnection(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
autoIncrement.initialize(connection); */

let userSchema = new Schema({
	uniqueId: {
		type: Number,
		unique: true  /* auto increment */
	},
	OTP: {
		type: Number
	},
	phone: {
		type: String,
		default: ""
	},
	DOB: {
		type: Date
	},
	gender: {
		type: String,
		enum: ["MALE", "FEMALE", "OTHER"]
	},
	countryCode: {
		type: String,
		default: "+91"
	},
	completeProfile: {
		type: Boolean,
		default: false
	},
	verifyEmail: {
		type: Boolean,
		default: false
	},
	verifyPhone: {
		type: Boolean,
		default: false
	},
	fullName: {
		type: String,
		default: ""
	},
	email: {
		type: String,
		default: ""
	},
	userName: {
		type: String,
		default: ""
	},
	OTP: {
		type: String,
		default: ""
	},
	password: {
		type: String,
		default: ''
	},
	location: [{
		flatNo: {
			type: String,
			default: "Point"
		},
		address: {
			type: String,
			default: ""
		},
		state: {
			type: String,
			default: ""
		},
		city: {
			type: String,
			default: ""
		},
		zipcode: {
			type: String,
			default: ""
		},
		coordinates: {
			type: [Number],
			default: [0, 0]
		}
	}],
	myReferralCode: {
		type: String,
		default: ''
	},
	usedReferralCode: {
		type: String,
		default: ''
	},
	registrationDate: {
		type: Date,
		default: Date
	},
	signupType: {
		type: String,
		enum: ['MANUAL', 'SOCIAL'],
		default: "MANUAL",
		uppercase: true
	},
	userType: {
		type: String,
		enum: ['USER', 'PRO'],
		default: "USER",
		uppercase: true
	},
	inactiveTime: {
		type: Date,
		default: null
	},
	status: {
		type: String,
		enum: ["ACTIVE", "INACTIVE", "DELETED", "BLOCK"],
		default: "ACTIVE"
	},
	token: {
		type: String,
		default: ""
	},
	deviceIds: {
		ios: [String],
		android: [String],
		web: [String]
	},
	image: {
		type: String,
		default: ""
	},
	thumbnail: {
		type: String,
		default: ""
	},
	favProfessional: [{/* fav user id inserted into favpr */
		type: mongoose.Schema.Types.ObjectId,
		ref: 'userSchema'
	}],
	/* professional information start here */
	firstName: {
		type: String,
		default: ""
	},
	lastName: {
		type: String,
		default: ""
	},
	portfolio: {
		type: String,
		default: ""
	},
	message: {
		type: String,
		default: ""
	},
	position: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'myntSubCategory'
	}],
	yearOfExperience: {
		type: String,
		default: 0
	},
	workedWithCeleb: {
		type: String,
		default: ''
	},
	workedWithTV: {
		type: String,
		default: ''
	},
	professionalLevel: {
		type: String,
		default: ''
	},
	reviewAndRating: [{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'userSchema',
			default: null
		},
		bookingId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'myntBooking',
			default: null
		},
		rating: {
			type: String,
			default: '0',
		},
		review: {
			type: String,
			default: ''
		},
		status: {
			type: String,
			enum: ["ACTIVE", "INACTIVE"],
			default: "ACTIVE"
		}
	}],
	timeSlot: [{
		date: {
			type: Date,
			default: Date
		},
		time: [],
		status: {
			type: String,
			enum: ["ACTIVE", "INACTIVE"],
			default: "ACTIVE"
		}
	}]
}, { timestamps: true });

var userModel = mongoose.model("userSchema", userSchema, "userSchema");
module.exports = userModel;

