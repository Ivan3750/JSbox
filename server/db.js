const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// File Schema
const FileSchema = new Schema({
  url: {
    type: String,
    required: true
  }
});

// Topic Schema
const TopicSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  files: [FileSchema]
});

// Module Schema
const ModuleSchema = new Schema({
  code: {
    type: String, 
    required: true
  },
  title: {
    type: String,
    required: true
  },
  topics: [TopicSchema]
});

// Main Schema
const MainSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  modules: [ModuleSchema]
});

const MainModel = mongoose.model('Main', MainSchema);




// MongoDB connection URIs
const DB_URI = "mongodb+srv://kohan3750:Data@cluster0.vdi3teq.mongodb.net/JSbox?retryWrites=true&w=majority&appName=Cluster0";

// Connect to the database
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const dbConnection = mongoose.connection;
dbConnection.on('error', console.error.bind(console, 'Error connecting to database:'));
dbConnection.once('open', () => {
  console.log('Connected to database successfully');
});

// Export models
module.exports = {
  MainModel,ModuleSchema
};
