var reqdata={};

//做新增 button 的處理...
$("#plus").on("click",function(){
      reqdata={'momsg':$('#MsgTB').val()};
      //把資料送給後端做處理。  
      //這裡寫post ... url:'./restful/todo'
      $.ajax({
        url: '/restful/todo',
        type: 'post',
        data: reqdata
      }).done(function(result){
      	alert('ok!');
          $('#itemset').html(result);
          });        
});

//做搜尋 button 的處理...
$('#search').on('click',function(){
      reqdata={'momsg':$('#MsgTB').val()};
      //把資料送給後端做處理。  
      //這裡寫get ... url:'./restful/todo/fasdfkmkmkoika'
      $.ajax({
        url: '/restful/todo/'+reqdata.momsg,
        type: 'get'
      }).done(function(result){
          	   $("#itemset").html(result);
      });        
});
