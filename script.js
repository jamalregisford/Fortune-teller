
$("button").click(function() { 
    var message1=$(".name").val();
    var message2=$(".age").val();
    var message3=$(".dreamjob").val();
var message4="your name is "+message1+".";
$(".message").text(message4);
});
