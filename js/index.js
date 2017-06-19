var varQ = '';
var varA = '';
var shifty;

function getQuote(){
  console.log('yehboi');
  $.ajax({
    type: 'GET',
    datatype: 'json',
    url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    cache: false,
    success: function(data){
      shifty = data.shift();
      varQ = shifty.content;
      varA = shifty.title;
      $('#tweetPoster').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + varQ + '" ' + varA));
      $('#replaceQuote').html(varQ);
      $('#replaceAuthor').html(varA);
    }
  })
  ;
  
  
}

$('#rngButton').click(getQuote);

$(document).ready(getQuote);