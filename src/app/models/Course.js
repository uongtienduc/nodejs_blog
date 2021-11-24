const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Course = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600},
    image: { type: String, maxLength: 255},
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now},
});

var CoursesModel = mongoose.model('Courses', Course);
module.exports = CoursesModel;