$(document).ready(function(){
  
  var user_arr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "cmtran7393"];
  var channelURL = 'https://wind-bow.gomix.me/twitch-api/channels/';
  var streamURL ='https://wind-bow.gomix.me/twitch-api/streams/';
 var status;
  var display_name;
  var logoURL;
  
  for (var i = 0; i < user_arr.length; i++) {
    (function(i) {
      $.getJSON(streamURL + user_arr[i] + '?callback=?', function (data) {
        
        if(data.stream === null){
          $.getJSON(channelURL + user_arr[i] + '?callback=?',function(data){
            display_name = data.display_name;
            logoURL = data.logo;
            status = "Offline";
            display_info();
          })
        }
        else{
          display_name = data.stream.channel.display_name;
        logoURL = data.stream.channel.logo;
          var game = data.stream.channel.game;
          var episode = data.stream.channel.status;
          status = "Online - " + game + ":" + episode;
          
          display_info();
    }
    
     });
    })(i);
}
  
  function display_info(){
    $(".user_info").prepend('<div class= "row jumbotron" style="background-color: black; border:10px; border-color: black">' + '<div class="col-md-4">' + '<img src= "' + logoURL + '">' + '</div>'
 + '<div class= "col-md-4">'+'<a href= "https://www.twitch.tv/'+ display_name + '"' + 
  'target="_blank">'+ "<b style='font-size: 30px'>" + display_name+ "</b>" + '</a> </div>' + '<div style= "color:lightblue" class = "col-md-4">' + "<b style='font-size:30px'>" +status + "</b>"+'</div></div>'); 
  }        
    
   
})
 
    
  
