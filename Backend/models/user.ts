import mongoose from 'mongoose';

const userShema = new mongoose.Schema({
  surname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
}, { versionKey: false});

export = mongoose.model('user', userShema);
