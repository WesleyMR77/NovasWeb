const mongoose = require('mongoose');
const User = mongoose.model('User');
const character = require('./character');

module.exports = {    
    async index(req, res){
        const { page = 1 } = req.query;
        const users = await User.paginate({}, { page, limit: 10});
        return res.json(users);
    },

    async create( admin, info ){
        var user
        if(admin){
            await User.create({
                email: info.email,
                name: info.name,
                password: info.password,
                adminAccount: true
            });
        }else{
            await User.create({
                email: info.email,
                name: info.name,
                password: info.password,
                adminAccount: false
            });
            user = await User.findOne({ name: info.name });
            await character.create(user.id);
        };
        user = await User.findOne({ name: info.name });
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