const quoteContainer = document.getElementById('quote-container');
const quoteText= document.getElementById('quote');
const authorText=document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteButton= document.getElementById('new-quote');
const loader= document.getElementById('loader');
let apiQuotes= [];

function loading(){
  loader.hidden=false;
  quoteContainer.hidden = true;
} 
  function complete(){
    quoteContainer.hidden= false;
    loader.hidden= true;
  }
  function newQuote(){
    loading();
    const quote= apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    if(quote.text.length>120){
      quoteText.classList.add('long-quote');
    }else{
      quoteText.classList.remove('long-quote');
    }
   authorText.textContent = quote.author;
   quoteText.textContent = quote.text;
   complete();
  }
  async function getQuotes(){
    loading();
  const apiUrl="https://type.fit/api/quotes";
  try{
    const response = await fetch(apiUrl);
    apiQuotes= await response.json();
    newQuote();
  
  }catch (error){
  
}
 
 
}
function tweetQuote(){
  const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}
newQuoteButton.addEventListener('click', newQuote);
twitterButton.addEventListener('click', tweetQuote);
 getQuotes();
 

