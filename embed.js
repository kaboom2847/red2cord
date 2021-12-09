function embed(options = { color: null, voteSymbol: null, showScore: null, showThumbnail: null, showAuthor: null, showImage: null, showSelfText: null }) {
   if (typeof options.color === 'string') {
      this.color = options.color;
    } else {
      this.color = false;
    }
    // Sets embed color.

    if (typeof options.voteSymbol === 'string') {
      this.voteSymbol = options.voteSymbol;
    } else {
      this.voteSymbol = '👍';
    };
    // Sets the voteSymbol.

    if (typeof options.showScore === 'boolean') {
      this.showScore = options.showScore;
    } else {
      this.showScore = true;
    };
    // Sets if the score is shown to true or false.

    if (typeof options.showThumbnail === 'boolean') {
      this.showThumbnail = options.showThumbnail;
    } else {
      this.showThumbnail = false;
    };
    // Sets if the thumbnail is wanted to true or false.

    if (typeof options.showAuthor === 'boolean') {
      this.showAuthor = options.showAuthor;
    } else {
      this.showAuthor = true;
    };
    // Sets if the author username is wanted to true or false.

    if (typeof options.showImage === 'boolean') {
      this.showImage = options.showImage;
    } else {
      this.showImage = true;
    };
    // Sets if the post image is wanted to true or false.

    if (typeof options.showSelfText === 'boolean') {
      this.showSelfText = options.showSelfText;
    } else {
      this.showSelfText = true;
    };
    // Sets if the text in the body is wanted to true or false.

    if (typeof options.showLink === 'boolean') {
      this.showLink = options.showLink;
    } else {
      this.showLink = true;
    }
};

module.exports = embed;