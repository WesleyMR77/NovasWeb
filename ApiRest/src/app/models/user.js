const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true
    },
    adminAccount: {
        type: Boolean,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre("save", async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

userSchema.plugin(mongoosePaginate);

mongoose.model('User', userSchema);