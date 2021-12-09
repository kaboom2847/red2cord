## red2cord
red2cord makes posting Reddit posts to Discord through webhooks easy!

### Install:
```
npm install red2cord
```
```js
const red2cord = require('red2cord');
```
### Useage:
#### red2cord(options)
```js
const myRed2Cord = new red2cord({
  webhookURL: 'my-discord-webhook-url', //Required string
  subreddits: ['my-subreddit'], //Required array or string
  embed: {
    color: null, //Default optional string (hex code)
    voteSymbol: '👍', //Default optional string
    showLink: true, //Default optional boolean
    showAuthor: true, //Default optional boolean
    showImage: true, //Default optional boolean
    showSelfText: true, //Default optional boolean
    showScore: true, //Default optional boolean
    showThumbnail: false //Default optional boolean
  }, //Default optional object
  showNSFW: false, //Default boolean
  logPosts: true //Default boolean
});
```
#### red2cord(options).post()
```js
myRed2Cord.post();
//Sends a single webhook (per subreddit) if post hasn't been posted.
```
#### Other methods
```js
myRed2Cord
 .setWebhookURL('new-discord-webhook-url') //String
 .setSubreddits(['new-subreddit']) //Array or string
 .subscribe(['new-subreddit']) //Array or string
 .setEmbed({options}) //Embed options object
 .setNSFW(true) //Boolean
 .setLog(false) //Boolean
 ```
### Example
```js
const red2cord = require('red2cord');

const funny = new red2cord({
  webhookURL: process.env.webhookURL,
  subreddits: 'funny',
  embed: {
    color: '#FFFF00',
    voteSymbol: '😂',
    showAuthor: false,
    showLink: false
  }
});
//I secretly don't want anyone to know who made the joke so I can steal it...

const sad = new red2cord({
  webhookURL: process.env.webhookURL2,
  subreddits: ['tifu', 'sadcringe'],
  logPosts: false
});
//I don't even want the console to tell me about how its posting sad stuff.

sad.setEmbed({
  voteSymbol: '😭',
  color: '#0000FF'
});
//Oops, forgot this!

funny.post();
sad.post();
//Wow, it worked!

funny.subscribe('memes');
//I really liked the funny posts so I want more!

funny.post();
//I need more!

funny.setSubreddits(['funny', 'meme', 'memes', 'dankmemes']);
funny.post();
//That's much better...

setInterval(funny.post, 300000);
//I liked them so much I want it to be posted every 5 minutes!
```
I'm sorry that was so cringe.