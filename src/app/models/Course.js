const mongoose = require('mongoose');
const slug =require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

let Course = new Schema({
    name: { type: String, maxLength: 255 , required: true},
    description: { type: String, maxLength: 600},
    image: { type: String, maxLength: 255},
    videoID: { type: String, maxLength: 255},
    slug: { type: String , slug:'name' , unique: true}, // vào const Course nhé
}, {
    timestamps: true,
});

var CoursesModel = mongoose.model('Courses', Course);
module.exports = CoursesModel;