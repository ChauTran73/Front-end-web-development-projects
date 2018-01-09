$(document).ready(function(){
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPosition);
    } 
  else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
  function getPosition(position){
    var long = position.coords.longitude;
    var lat = position.coords.latitude;
  $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long,function(data){
    var city = data["results"][0]["address_components"][2]["long_name"];
    var state = data["results"][0]["address_components"][4]["short_name"];
    var country = data["results"][0]["address_components"][5]["long_name"];
    $("#location").html("Your location:" +"<br> " + city + " , " + state + " , "+ country);
  });
    var api = "https://api.darksky.net/forecast/835bf47b005187b101cb02bccea176a5/"+lat+","+long +"?units=si";
   $.ajax({ //getJSON does not work??
     url: api,
     dataType: "jsonp",
     success: function(data){
     var condition = data.currently.summary;
       var icon = data.currently.icon;
       var skycons = new Skycons({"color": "black"});
       skycons.add(document.getElementById("icon"), icon);
       skycons.play();
       var temp = data.currently.temperature;
       var tempCel = Math.round(temp);
       var tempFah = Math.round(temp*9/5+32);
       $("#condition").html(condition);
       
       var celsius = true;
       $("#temperature").html(tempCel + ' °C');
$("#temperature").click(function(){
    if (celsius) {
    	$(".toggle").html(tempCel + ' °C');
    } 
  else {
      $("#temperature").html(tempFah + ' °F');
    }
    celsius = !celsius; 
   }
     )}
     
   })
}
  
})
  
        
