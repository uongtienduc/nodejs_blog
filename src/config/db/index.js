const mongoose = require('mongoose');

async function connect(){

    try {
        await mongoose.connect('mongodb://localhost:27017/f8_nodejs', {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        });
        console.log('Connected');
    } catch (error) {
        console.log('loi~ goy!!');
    }

};

module.exports = { connect };