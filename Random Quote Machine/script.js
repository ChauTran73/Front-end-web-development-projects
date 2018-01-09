var quote = new Array();//constructor
quote[0]="<h3>&quot;Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.&quot;<br /><small> -Dr. Seuss</small></h3>"
             quote[1]= "<h3>&quot;Do your own thing on your own terms and get what you came here for.&quot;<br /><small> -Oliver James</small></h3>"
             quote[2]= "<h3>&quot;Flatter yourself critically. &quot;<br /><small> -Willis Goth Regier </small></h3>"
             quote[3]= "<h3>&quot;Do what you feel in your heart to be right, for you’ll be criticized anyway. &quot;<br /><small>-Eleanor Roosevelt </small></h3>"
            quote[4]=  "<h3>&quot;Whenever you find yourself on the side of the majority, it is time to pause and reflect.&quot;<br /><small> -Mark Twain </small></h3>"
            quote[5]=  "<h3>&quot;I will not let anyone walk through my mind with their dirty feet.&quot;<br /><small> -Mahatma Gandhi</small></h3> "
             quote[6]= "<h3>&quot;We must not allow other people’s limited perceptions to define us.&quot;<br /><small> -Virginia Satir</small></h3>"
              quote[7]="<h3>&quot;Don’t look for society to give you permission to be yourself.&quot;<br /><small> -Steve Maraboli</small></h3>"
              quote[8]="<h3>&quot;Wanting to be someone else is a waste of who you are. &quot;<br /><small>-Kurt Cobain</small></h3>"
              quote[9]="<h3>&quot;Tension is who you think you should be. Relaxation is who you are. &quot;<br /><small>-Chinese Proverb </small></h3>"
              quote[10]="<h3>&quot;Do what you can, with what you have, where you are. &quot;<br /><small>-Theodore Roosevelt</small></h3>"
              
function tweet(message) {

window.open('https://twitter.com/intent/tweet?text='  + message);
} 

var msg;
function tweetHandler() {
tweet($(msg).text()); 
}
  
function newQuote()
{
 
  var currentQuote = Math.floor(Math.random() * quote.length);
msg = quote[currentQuote];
  $("#quote").html(msg); 
    
$('#tweetQuote').on('click', tweetHandler); 
  
}
