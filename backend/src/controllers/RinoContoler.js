const axios = require('axios');
const Rino = require('../models/Dbrino');
const parseStringAsArray =require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        const rinos = await Rino.find();

        return response.json(rinos)
    },
    async store (request, response) {
        const { github_username, techs, latitude, longitude } = request.body;
    
        let rino = await Rino.findOne({ github_username });
        if(!rino){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
            const { name = login, avatar_url, bio } = apiResponse.data;
            
            const techsArray = parseStringAsArray(techs)
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
        
            rino = await Rino.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }
        return response.json(rino);
    }
}