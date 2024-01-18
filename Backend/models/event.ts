import mongoose from 'mongoose';

const eventShema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false,
    default: 'https://p0.pxfuel.com/preview/569/587/724/bottle-wine-red-drink.jpg'
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
}, { versionKey: false});

export = mongoose.model('event', eventShema);
