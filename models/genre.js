/**
 * Created by shieldwolf on 2/14/17.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = Schema({
        name: {type: String, required: true, min: 3, max: 100},
    }
);

GenreSchema
    .virtual('url')
    .get(function () {
        return '/catalog/genre/' + this._id;
    });

module.exports = mongoose.model('Genre', GenreSchema);