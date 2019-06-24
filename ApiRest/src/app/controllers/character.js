const mongoose = require('mongoose');
const Character = mongoose.model('Character');

module.exports = {    

    async create( user ){
        await Character.create({
            name: "Indefinido",
            age: 20,
            gender: "Masculino",
            class: "Indefinido",
            clan: "Nenhum",
            maxHealth: 12000,
            currentHealth: 12000,
            maxMana: 1000,
            currentMana: 1000,
            maxHungry: 1000,
            currentHungry: 1000,
            maxThirst: 1000,
            currentThirst: 1000,
            user
        });
    },

    async show(req, res){
        const char = await Character.find({ user:req.params.id });
        return res.json(char);
    },

    async update(req, res){
        const char = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(char);
    },

    async delete(user){
        const char = await Character.findOne({ user });
        await Character.findByIdAndRemove( char.id );
    }
}