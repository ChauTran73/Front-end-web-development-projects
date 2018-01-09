$(document).ready(function(){
  $("#search").click(function(){
    var searchWord = $("#searchTerm").val(); //get values from the input box
  $("#result-page").empty();  
    $.ajax({ 
       
	type: "GET",
        
	url: "https://en.wikipedia.org/w/api.php?callback=?",
       
	data: { action:'query', format: 'json', list: 'search', srsearch: searchWord, prop: 'extracts'}, 
        
	dataType: 'json', 

	success: function( data ){
  data.query.search.forEach(function (item) {
  
    $("#result-page").append('<div class= "jumbotron" ><a style="font-size:130%" href="https://en.wikipedia.org/wiki/'+ item.title+ '"target="_blank">' + item.title + "</a><p>" + item.snippet + "</p></div>");
    
      })
    
  }
                           
    });
  });
  })

               
