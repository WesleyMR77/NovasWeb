const mongoose = require('../../database/index');
const User = mongoose.model('User');
const character = require('./character');

module.exports = {    
    async index(req, res){
        const { page = 1 } = req.query;
        const users = await User.paginate({}, { page, limit: 10});
        const chars = await character.index;
        return res.json({ users, chars });
    },

    async create( admin ){
        var user
        if(admin){
            user = await User.create({
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                adminAccount: false
            });
        }else{
            user = await User.create({
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                adminAccount: true
            });
            character.create(user.id);
        };
        return user;    
    },

    async show(req, res){
        const user = await User.findById(req.params.id);
        return res.json(user);
    },

    async update(req, res){
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(user);
    },

    async delete(req, res){
        character.delete(req.params.id);
        await User.findByIdAndRemove(req.params.id);
        return res.send(); 
    }
}