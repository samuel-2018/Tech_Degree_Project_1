/** ****************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
***************************************** */

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

// Gets a random quote from quotes array.
function getRandomQuote() {
  let randQuoteNumber;

  // Chooses a random number different from last choice
  do {
    // Selects a random number from 0 to last index of quotes array.
    randQuoteNumber = Math.floor(Math.random() * quotes.length);
  } while (getRandomQuote.prevQuote === randQuoteNumber);

  // Utilizes static variable for tracking previous quote
  getRandomQuote.prevQuote = randQuoteNumber;

  // Returns a random quote object.
  return quotes[randQuoteNumber];
}

function changeBackgroundColor() {
  // Color data
  const colorClassArr = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5'];

  let randColorNumber;

  // Chooses a random number different from last choice
  do {
    // Selects a random number from 0 to last index of color array.
    randColorNumber = Math.floor(Math.random() * colorClassArr.length);
  } while (changeBackgroundColor.prevColor === randColorNumber);

  // Utilizes static variable for tracking previous color
  changeBackgroundColor.prevColor = randColorNumber;

  // Uses random number to get color from array.
  const color = colorClassArr[randColorNumber];

  // Overwrites the body element's class attribute.
  // The new class name is used by the stylesheet to set the background color.
  document.querySelector('body').className = color;

  // Overwrites the #loadQuote element's class attribute.
  // The new class name is used by the stylesheet to set the background color.
  document.querySelector('#loadQuote').className = color;

  /**
   * Note: Using ".style.backgroundColor" would result in inline styling,
   * which would create a specificity issue with the hover effect.
   */
}

// Inserts new random quote into webpage.
function printQuote(resetTimer = false) {
  // Gets a random quote.
  const randomQuote = getRandomQuote();

  // Creates a variable to store HTML.
  let quoteHTML = '';

  // Adds the citation property only if it exists.
  const citation = randomQuote.citation ? `<span class="citation">${randomQuote.citation}</span>` : '';

  // Adds the year property only if it exists.
  const year = randomQuote.year ? `<span class="year">${randomQuote.year}</span>` : '';

  // Adds the tags property only if it exists.
  const tags = randomQuote.tags ? `<span class="tags">${randomQuote.tags.reduce((accumulator, tag) => `${accumulator}  #${tag}`, '')}</span>` : '';

  // Creates the HTML string.
  quoteHTML = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}${citation}${year}${tags}</p>
  `;

  // Updates the innerHTML of quote-box element.
  document.getElementById('quote-box').innerHTML = quoteHTML;

  changeBackgroundColor();

  if (resetTimer) {
    // Clears previous instance of timer.
    clearInterval(myTimer);

    // Creates a new instance of timer.
    // This results in the clock being reset after
    // 'printQuote' was called via button click.
    myTimer = setInterval(printQuote, 20000);
  }
}

// Sets a quote on page load
printQuote();

// Creates first instance of the slide timer
let myTimer = setInterval(printQuote, 20000);

// 'true' is passed to 'printQuote' to reset the timer
const resetTimer = true;

// Creates event listener for 'Show another quote' button
document.getElementById('loadQuote').addEventListener('click', () => printQuote(resetTimer), false);
