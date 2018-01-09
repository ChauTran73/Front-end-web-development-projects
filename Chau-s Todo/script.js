$(document).ready(function(){
    $("ul").on("click","li",function(){
        $(this).toggleClass("completed");
    })
    $("ul").on("click","span",function(event){
        //parent() method returns the direct parent element of the selected element
        $(this).parent().fadeOut(500,function(){
            $(this).remove();
        });
        event.stopPropagation();
    })
    $("#textinput").keypress(function(event){
        if (event.which===13){
            var todoText = $(this).val();
            $(this).val("");
            $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todoText + "</li>")
        }
    })
  $(".fa-plus").click(function(){
        $("#textinput").fadeToggle();
    })

})
