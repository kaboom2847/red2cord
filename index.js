const reddit = require('node-reddit-js');
const discord = require('discord-webhook-node');
const embed = require('./embed');
const post = require('./post');

function webhook(options) {
  this.posted = new Array();
  if (typeof options === 'object') {
    if (typeof options.embed === 'object') {
      this.embed = new embed(options.embed);
    } else {
      this.embed = new embed();
    };
    // Makes embed.

    if (typeof options.logPosts === 'boolean') {
      this.logPosts = options.logPosts;
    } else {
      this.logPosts = true;
    };
    // Sets if logging posts is wanted to true or false.

    if (typeof options.showNSFW === 'boolean') {
      this.showNSFW = options.showNSFW;
    } else {
      this.showNSFW = false;
    };
    // Sets if NSFW posts are allowed or not.

    if (typeof options.subreddits === 'object') {
      this.subreddits = options.subreddits;
    } else if (typeof options.subreddits === 'string') {
      this.subreddits = new Array(options.subreddits);
    } else {
      this.subreddits = new Array();
    };
    // Sets subreddits from options object as an array.

    if (typeof options.webhookURL === 'string') {
      this.webhookURL = options.webhookURL;
    }
    // Sets webhookURL from options object as a string.

    this.subscribe = (subreddits) => {
      if (typeof subreddits === 'object') {
        this.subreddits = this.subreddits.concat(subreddits);
        return this;
      } else if (typeof subreddits === 'string') {
        this.subreddits = this.subreddits.push(subreddits);
        return this;
      };
      // Adds new subreddits to array.

      this.setSubreddits = (subreddits) => {
        if (typeof subreddits === 'object' || typeof subreddits === 'string') {
          this.subreddits = subreddits;
          return this;
        }
      }
    };
    // Sets subreddit array as a new array.

    this.setLog = (boolean) => {
      if (typeof boolean === 'boolean') {
        this.logPosts = boolean;
        return this;
      }
    };
    // Sets logPosts as true or false.

    this.setNSFW = (boolean) => {
      if (typeof boolean === 'boolean') {
        this.showNSFW = boolean;
        return this;
      }
    };
    // Sets showNSFW to true or false.

    this.setWebhookURL = (url) => {
      if (typeof url === 'string') {
        this.webhookURL = url;
        return this;
      }
    };
    // Sets new webhookURL.

    this.setEmbed = (options) => {
      if (typeof options === 'object') {
        this.embed = new embed(options);
        return this;
      }
    };
    // Sets embed as a new object.

    this.post = () => {
      post(this, reddit, discord);
      return this;
    };
    // Posts the posts.
  }
};

module.exports = webhook;