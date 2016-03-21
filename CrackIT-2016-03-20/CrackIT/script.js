    $(function(){

        $('#crack').click(function(){
           /* alert("The button was clicked.");*/
 var phrase = $('#phrase').val();
            console.log("giventext:"+phrase);
            var send = "http://cors.io/?u=http://api.md5crack.com/crack/finuj7ErxYHh0QEx/"+phrase;
             console.log("send:"+send);
           /* $.get(send, function(data ) {
      alert( "success" +data );
                 //$('.result').append(data);
    })
      .done(function() {
        alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      });*/
            $.ajax({
                type: "GET",

                url:send,

                dataType: 'JSON',

        success : function(data){
          //  alert(data["phrase"]);
            $('.result').text(data["phrase"]);
        },
        error : function(httpReq,status,exception){
            alert(status+" "+exception);
             $('.result').text(status+" "+exception);
        }

    });


        });

        $('#hash').click(function(){
             var phrase = $('#phrase').val();
            console.log("giventext:"+phrase);
            var send = "http://cors.io/?u=http://api.md5crack.com/hash/finuj7ErxYHh0QEx/"+phrase;
             console.log("send:"+send);
            $.ajax({
                type: "GET",
                url:send,

                dataType: 'JSON',

        success : function(data){
           // alert(data["phrase"]);
            $('.result').text(data["phrase"]);
        },
        error : function(httpReq,status,exception){
            alert(status+" "+exception);
            $('.result').text(status+" "+exception);
        }

    });
        });
    });