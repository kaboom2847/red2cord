function post(options, reddit, discord) {
options.subreddits.forEach(async s => {
  const redditClient = new reddit.Client();
  const discordWebhook = new discord.Webhook(options.webhookURL);
  let newPost = await redditClient.reddit.r(s, 'new.json').get({
    data: {
      limit: 1
    },
    auth: false
  });
  const postData = newPost.data.children[0].data;
  var footer = new Array();
  const postEmbed = new discord.MessageBuilder()
   .setTitle(postData.title)
   .setAuthor(`r/${postData.subreddit}`)
  if (options.embed.showLink) {
    postEmbed.setURL(`https://reddit.com${postData.permalink}`)
  };
  if (options.embed.color) {
     postEmbed.setColor(options.embed.color);
  };
  if (options.embed.showAuthor) {
    footer.push(`u/${postData.author}`);
  };
  if (options.embed.showScore) {
    footer.push(`${options.embed.voteSymbol} ${postData.score}`);
  };
  postEmbed.setFooter(footer.join(' | '));
  if (options.embed.showThumbnail) {
    postEmbed.setThumbnail(postData.thumbnail);
  };
  if (options.embed.showImage) {
    if (postData.url.length > 3) {
      postEmbed.setImage(postData.url);
    } else {
      postEmbed.setImage(postData.thumbnail)
    }
  };
  if (options.embed.showSelfText) {
    if (postData.selftext.length > 3000) {
      postEmbed.setDescription(`${postData.selftext.slice(0, 3000)}...`);
    } else {
      postEmbed.setDescription(postData.selftext)
    }
  };

  function log(msg) {
    if (options.logPosts) {
      console.log(msg);
    }
  };

  if ((postData.over_18 && options.showNSFW) || (!postData.over_18)) {
    if (!options.posted.includes(postData.id)) {
      discordWebhook.send(postEmbed);
      options.posted.push(postData.id);
      log(`Posted ${postData.id} from r/${postData.subreddit}`);
    } else {
      log(`${postData.id} not posted | already posted`);
    }
  } else {
    log(`${postData.id} not posted | NSFW`);
  }
});
};

module.exports = post;