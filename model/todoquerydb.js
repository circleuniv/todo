var MongoClient=require('mongodb').MongoClient;

module.exports.QueryGet=function(data,callback){
	MongoClient.connect("mongodb://localhost:27017/tododb",function(err,db){

		if(err) throw err;
        //Write databse Insert/Update/Query code here..		
		db.collection('Todolist',function(err,collection){
		    if(data.message)
			  collection.find({'message' : {$regex : '.*'+ data.message+ '.*'}}).toArray(function(err,items){
			    if(err) throw err;
			  	  callback(items);			 	
		      });
		    else
		      collection.find({}).toArray(function(err,items){
			    if(err) throw err;
			  	  callback(items);			 	
		      });


		});

	});
}

