import mongoose from 'mongoose';

const cityShema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}, { versionKey: false});

export = mongoose.model('city', cityShema);
