const mongoose = require('../../database/index');
const Character = mongoose.model('Character');

module.exports = {    
    async index(req, res){
        const { page = 1 } = req.query;
        const chars = await Character.paginate({}, { page, limit: 10});
        return chars
    },

    async store( user ){
        Character.create({
            name: "Indefinido",
            age: 20,
            gender: "Masculino",
            class: "Indefinido",
            clan: "Nenhum",
            maxHealth: 12000,
            currentHealth: maxHealth,
            maxMana: 1000,
            currentMana: maxMana,
            maxHungry: 1000,
            currentHungry: maxHungry,
            maxThirst: 1000,
            currentThirst: maxThirst,
            user
        });
    },

    async show(req, res){
        const char = await Character.findById(req.params.id);
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