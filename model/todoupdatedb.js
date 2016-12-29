var MongoClient=require('mongodb').MongoClient;

module.exports.UpdateSave=function(data,callback){
	MongoClient.connect("mongodb://localhost:27017/tododb",function(err,db){

		if(err) throw err;
		     db.collection("Todolist").findAndModify(
                    {id:data.id},
                    [],
                    { $set: { message:data.message} },
                    {new : true},
                    function(err,doc) {
                    	if(err) throw err;
                    	callback(doc.value);
                    }
              );
//		   callback(doc);
        //Write databse Insert/Update/Query code here..		
		//db.collection('Todolist',function(err,collection){
			//第一個參數是要更新的條件，第二個參數$set:更新的欄位及內容.
			//第三個參數writeConcern，第四個參數執行update後的callback函式
			///collection.update({id:data.id},{ $set: { message:data.message} },
			//	{w:1}, function(err, result){
			//		if(err) throw err;
			//		callback('Document Updated Successfully');
			//	});
		//});

	});
}




// db.collection.findAndModify({
//     query: <document>,
//     sort: <document>,
//     remove: <boolean>,
//     update: <document>,
//     new: <boolean>,
//     fields: <document>,
//     upsert: <boolean>
// });
