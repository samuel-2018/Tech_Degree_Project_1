/** ****************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
***************************************** */

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


// App data (array of quote objects)
const quotes = [
  {
    quote: 'When action grows unprofitable, gather information; when information grows unprofitable, sleep.',
    source: 'Ursula K. LeGuin',
    citation: 'The Left Hand of Darkness',
    year: '2000',
    tags: ['life', 'success'],
  },
  {
    quote: 'An investment in knowledge always pays the best interest.',
    source: 'Benjamin Franklin',
    citation: 'The Way to Wealth: Ben Franklin on Money and Success',
    year: '1758',
    tags: ['business', 'money', 'education'],
  },
  {
    quote: 'I owe my success to the fact that I never had a clock in my workroom.',
    source: 'Thomas A. Edison',
    citation: 'Diary entry',
    tags: ['motivation', 'business'],
  },
  {
    quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    source: 'John Woods',
    year: '1991',
    tags: ['business', 'motivation'],
  },
  {
    quote: 'Don’t let yesterday take up too much of today.',
    source: 'Will Rogers',
    tags: ['motivation', 'life'],
  },
];

// Gets a random quote from quotes array
function getRandomQuote() {
  // Selects a random number from 0 to last index of quotes array
  const randNumber = Math.floor(Math.random() * quotes.length);

  // Returns a random quote object
  return quotes[randNumber];
}

function changeBackgroundColor() {
  // Color data
  const colorClassArr = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5'];

  // Selects a random number from 0 to last index of color array
  const randNumber = Math.floor(Math.random() * colorClassArr.length);

  // Uses random number to get color from array
  const color = colorClassArr[randNumber];

  // Overwrites the body element's class attribute
  // The new class name is used by the stylesheet to set the background color
  document.querySelector('body').className = color;

  // Overwrites the #loadQuote element's class attribute
  // The new class name is used by the stylesheet to set the background color
  document.querySelector('#loadQuote').className = color;

  /**
   * Note: Using ".style.backgroundColor" would result in inline styling,
   * which would create a specificity issue with the hover effect
   */
}

// Inserts new random quote into webpage
function printQuote() {
  // Gets a random quote
  const randomQuote = getRandomQuote();

  // Creates a variable to store HTML
  let quoteHTML = '';

  // Adds the citation property only if it exists
  const citation = randomQuote.citation ? `<span class="citation">${randomQuote.citation}</span>` : '';

  // Adds the year property only if it exists
  const year = randomQuote.year ? `<span class="year">${randomQuote.year}</span>` : '';

  // Adds the tags property only if it exists
  const tags = randomQuote.tags ? `<span class="tags">${randomQuote.tags.reduce((accumulator, tag) => `${accumulator}  #${tag}`, '')}</span>` : '';

  // Creates the HTML string
  quoteHTML = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}${citation}${year}${tags}</p>
  `;

  // Updates the innerHTML of quote-box element
  document.getElementById('quote-box').innerHTML = quoteHTML;

  changeBackgroundColor();
}

// Sets a quote on page load
printQuote();

// Creates event listener for 'Show another quote' button
document.getElementById('loadQuote').addEventListener('click', printQuote, false);
