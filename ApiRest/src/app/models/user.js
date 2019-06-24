const mongoose = require('../../database/index');
const mongoosePaginate = require('mongoose-paginate');
const bcrypt = require("bcryptjs");

const schema = new mongoose.Schema({
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

schema.pre("save", async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

schema.plugin(mongoosePaginate);

mongoose.model('User', schema);