var MongoClient=require('mongodb').MongoClient;

module.exports.RemoveSave=function(data,callback){
	MongoClient.connect("mongodb://localhost:27017/tododb",function(err,db){

		if(err) throw err;
        //Write databse Insert/Update/Query code here..		
		db.collection('Todolist',function(err,collection){
		    collection.remove({id:data.id},{w:1},function(err,result){
    		   if(err) throw err;
    		   callback('Document Removed Successfully!');
    	    });

		});

	});
}