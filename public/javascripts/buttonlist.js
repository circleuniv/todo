var reqdata={};

//做列表items button 的處理....
$('#itemset button').bind('click', function(){
	// gets the id of a clicked button
    var obj = $(this).attr('id');
    var itemid='';

    if(/pencil/.test(obj))
    {
        itemid=obj.replace(/pencil/gi,'');
        var spancs='#itemset span.'+obj;  //這筆按鈕的span 尋找方式字串。
        
        var getmsg=$(spancs).text();　//取得所選的這筆資料。
        $('#myModal').find($('#message-text')).val(getmsg);　//把資料送給對話框裡的textbox
 
        reqdata={'moid':itemid,'momsg':getmsg}; //把id記錄下來。
    }

    if(/remove/.test(obj))  //刪除...
    {
    	itemid=obj.replace(/remove/gi,'');
    	reqdata={'moid':itemid};
        //移除單一資料，直接做!!
        //這裡寫delete ... url:'./restful/todo/1'  
    	 $.ajax({
           url: '/restful/todo/'+reqdata.moid,
           type: 'DELETE'
          }).done(function(resp){
             var oneset='div#record'+reqdata.moid;
             $(oneset).remove();
          	 alert(resp);
          });
    }

})

//做修改 儲存 button 的處理...
$('#myModal #saveitem').on('click',function(){
  var postdata=$('#myModal').find($('#message-text')).val();
    reqdata.momsg=postdata;  //原先的資料會更改成這個...
    
    //把資料送給後端做處理。  
    //這裡寫put ... url:'./restful/todo/1'
    $.ajax({
      url: '/restful/todo/'+reqdata.moid,
      type: 'PUT',
      data: reqdata
    }).done(function(result){
      var oneset='#itemset div#record'+reqdata.moid;
        $(oneset).html(result);//console.log(result);
     });

    //將dialog隱藏
    $('#myModal').modal('hide')
})