// We will need our mongoose library
const mongoose = require(`mongoose`);

// Your schema

const Schema1 = mongoose.Schema;

const task1Schema = new Schema1({
  alias: String,
  fullName: String,
  affiliation: Number,
  character: enum
})

// Exporting our resource model

module.exports = mongoose.model('resource', SomeModelSchema );
