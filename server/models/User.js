const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    profilePhoto: {
        type: String,
        maxlength: [2400]
    },
    biography: String,
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6,],
        trim: true
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'role'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const user = mongoose.model('user', UserSchema);

module.exports = user;