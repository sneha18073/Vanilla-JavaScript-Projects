// console.log("Generate A new Quote");
// Specifying Variables
let btn = document.getElementById("newQuote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"The purpose of our lives is to be happy."`,
    person: " — Dalai Lama",
  },

  {
    quote: `"Life is what happens when you're busy making other plans." `,
    person: "- John Lennon",
  },

  { quote: `"Get busy living or get busy dying." `, person: "— Stephen King" },

  {
    quote: `"You only live once, but if you do it right, once is enough." `,
    person: "— Mae West",
  },

  {
    quote: `"Many of life’s failures are people who did not realize how close they were to success when they gave up."`,
    person: "- Thomas A. Edison",
  },

  {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: "– Albert Einstein",
  },

  {
    quote: `"Never let the fear of striking out keep you from playing the game."`,
    person: "– Babe Ruth",
  },

  {
    quote: `"Money and success don’t change people; they merely amplify what is already there." `,
    person: "— Will Smith",
  },

  {
    quote: `“If life were predictable it would cease to be life, and be without flavor.”`,
    person: " – Eleanor Roosevelt",
  },

  {
    quote: `“The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.”`,
    person: "– Henry Ford",
  },

  {
    quote: `“In order to write about life first you must live it.”`,
    person: "– Ernest Hemingway",
  },

  {
    quote: `“The big lesson in life, baby, is never be scared of anyone or anything.”`,
    person: "– Frank Sinatra",
  },

  {
    quote: `"Not how long, but how well you have lived is the main thing.”`,
    person: " — Seneca",
  },

  {
    quote: `“Life is not a problem to be solved, but a reality to be experienced.”`,
    person: "- Soren Kierkegaard",
  },

  { quote: `"The unexamined life is not worth living."`, person: "— Socrates" },

  { quote: `"Turn your wounds into wisdom."`, person: "— Oprah Winfrey" }
];


btn.addEventListener('click', function() {

  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});

