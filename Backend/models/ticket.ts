import mongoose from 'mongoose';

const ticketShema = new mongoose.Schema({
  row: {
    type: Number,
    required: true
  },
  seat: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  guest: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  }
}, { versionKey: false});

export = mongoose.model('event', ticketShema);
