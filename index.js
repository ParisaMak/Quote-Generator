const quoteText = document.querySelector(".quote p")
const authorEl = document.querySelector(".author")
const btnTwitter = document.querySelector(".twitter")
const btnNextQuote = document.querySelector(".next_quote")


const getData = async() => {
  const apiUrl = "https://dummyjson.com/quotes"
  try{
     const response = await fetch(apiUrl);
     let data = await response.json();
     let apiQuotes = data.quotes;
     return apiQuotes
  }catch (error){
      console.log(error)
  }
};
const displayQuote = async () => {
  const displayData = await getData(); 
  const newQuote = displayData[Math.floor(Math.random()*displayData.length)]
  const {quote , author } = newQuote
    quoteText.textContent = `${ quote }`
    authorEl.textContent = `${ author}`
}

btnNextQuote.addEventListener("click" ,displayQuote)

