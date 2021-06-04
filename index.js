const natural = require('natural');
const Analyzer = require('natural').SentimentAnalyzer;
const aposToLexForm = require('apos-to-lex-form');
const stemmer = require('natural').PorterStemmer;
const analyzer = new Analyzer("English", stemmer, "afinn");
// getSentiment expects an array of strings

const { WordTokenizer } = natural;
const tokenizer = new WordTokenizer();

const SpellCorrector = require('spelling-corrector');
const spellCorrector = new SpellCorrector();
spellCorrector.loadDictionary();

const SW = require('stopword');
const customStopWords = ['yeah' ,'please']

lyrics = `Love of mine
Someday you will die
But I'll be close behind
I'll follow you into the dark
No blinding light
Or tunnels, to gates of white
Just our hands clasped so tight
Waiting for the hint of a spark
If Heaven and Hell decide that they both are satisfied
Illuminate the no's on their vacancy signs
If there's no one beside you when your soul embarks
Then I'll follow you into the dark
In Catholic school, as vicious as Roman rule
I got my knuckles bruised by a lady in black
And I held my tongue as she told me
"Son, fear is the heart of love, " so I never went back
And if Heaven and Hell decide that they both are satisfied
Illuminate the no's on their vacancy signs
If there's no one beside you when your soul embarks
Then I'll follow you into the dark`

wordsToReview = (aposToLexForm(lyrics.replace(/\n/g, " ")).toLowerCase());
wordsToReview = wordsToReview.replace(/[^a-zA-Z\s]+/g, '')
console.log(wordsToReview)
const tokenizedReview = tokenizer.tokenize(wordsToReview);
let filteredReview = SW.removeStopwords(tokenizedReview, [...SW.en, ...customStopWords]);

// Remove duplicates 
// filteredReview = filteredReview.filter((c, index) => {
//   return filteredReview.indexOf(c) === index;
// });

// Show ranking for each word
// filteredReview.forEach((word, index) => {
//   console.log(spellCorrector.correct(word) + ' (' + analyzer.getSentiment([spellCorrector.correct(word)]) + ')')
// })


filteredReview.forEach((word, index) => {
  filteredReview[index] = spellCorrector.correct(word);
})

console.log(filteredReview)

console.log(analyzer.getSentiment(filteredReview));
// 0.6666666666666666

// angry -1
// happy +1