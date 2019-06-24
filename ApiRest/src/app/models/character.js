const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const charSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number, 
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    clan: {
        type: String,
        required: true
    },
    maxHealth: {
        type: Number,
        required: true
    },
    currentHealth: {
        type: Number,
        required: true
    },
    maxMana: {
        type: Number,
        required: true
    },
    currentMana: {
        type: Number,
        required: true
    },
    maxHungry: {
        type: Number,
        required: true
    },
    currentHungry: {
        type: Number,
        required: true
    },
    maxThirst: {
        type: Number,
        required: true
    },
    currentThirst: {
        type: Number,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

charSchema.plugin(mongoosePaginate);

mongoose.model('Character', charSchema);