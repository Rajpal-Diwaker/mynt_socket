var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlschema = new Schema({

    media: { type: String },
    messageType: { type: String },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userSchema',
        default: null
    },

})

var Url = mongoose.model('Url', urlschema);

module.exports = Url;