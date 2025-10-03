const mongoose = require('mongoose');

const houseSchema = mongoose.Schema({
    userId:{
        type: String, 
        required: true
    }, 
    area:{
        type: Number, 
        required: true
    },
    
    location:{
        type: Number,
        required: true
    },
    city:{
        type: Number,
        required: true
    },
    wantedPrice:{
        type: Number,
        required: true
    }, 
    predictedPrice:{
        type: Number,
        required: true 
    }
});

const houseModel = mongoose.model('Houses', houseSchema);

module.exports = houseModel;
