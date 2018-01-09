$(document).ready(function(){
  var totaldiv = $(total);
  totaldiv.html("0");
  var input = "";
  var output  ;
  
  
  function calc(expr){
    try {
    res = eval(expr);
    return parseFloat(res.toFixed(6)).toString(10);
} catch (e) {
    if (e instanceof SyntaxError) {
        totaldiv.html("Error");
    }
}
  }
 $("#expr a").not("#equals,#clear,#clearall").click(function(){ 
  
   input += $(this).text();
   
   totaldiv.html(input);
 })
  
  $("#clear,#clearall").click(function(){
    if ($(this).attr("id")==="clearall"){input = "";
    totaldiv.html("0");}
    
    if($(this).attr("id")==="clear"){
      input= input.slice(0,-1);
      totaldiv.html(input);}
    
  })
  
  $("#equals").click(function(){
    output = calc(input);
    input = "";
    totaldiv.html(output);
    input = output;
    
  })
  
})
