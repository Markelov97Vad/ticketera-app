import mongoose from 'mongoose';

const eventShema = new mongoose.Schema({
  type_event: {
    type: String,
    required: true
  },
  place: {
    name: { 
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    point: {
      type: String,
      required: false
    },
    zone: [
      {
        name: {
          type: String,
          required: true
        },
        row: {
          type: String,
          required: true
        },
        seat: {
          type: String,
          required: true
        },
        price: {
          type: String,
          required: true
        }
      }
    ]
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
    default: 'https://p0.pxfuel.com/preview/569/587/724/bottle-wine-red-drink.jpg'
  },
  location: {
    type: String,
    required: true
  },
  time_event: {
    type: String,
    required: true
  },
  date_event: {
    type: String,
    required: true
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    default: [],
    ref: 'user',
  }]
}, { versionKey: false});

export = mongoose.model('event', eventShema);
