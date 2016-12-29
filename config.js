var config={};

config.mongo={};
config.mongo.url= process.env.MONGO_URI || 'localhost';
config.mongo.db='tododb';

module.exports=config;
