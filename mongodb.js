const { MongoClient,ObjectId } = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';

const dataBaseName = 'Ecommerce';
MongoClient.connect(connectionUrl, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
},
  (error, client) => {
    if (error) {
      return console.log('unable to connect to database');
    }
  const db=client.db(dataBaseName);
  console.log('connected!!!');
  }
); 