const mongoose = require('mongoose');

const destination = mongoose.model('destination', {});
const news = mongoose.model('new', {});
const newYear = mongoose.model('newyear', {});
const northen = mongoose.model('northen', {});
const southern = mongoose.model('southern', {});
const weekend = mongoose.model('weekend', {});
const awardmedia = mongoose.model('award&media', {});
const food = mongoose.model('food', {});
const nature = mongoose.model('nature', {});
const off = mongoose.model('off', {});
const latestread = mongoose.model('latestread', {});
const booking = mongoose.model('booking', {});


module.exports = {
    destination,
    news,
    newYear,
    northen,
    southern,
    awardmedia,
    weekend,
    food,
    nature,
    off,
    latestread,
    booking
}

