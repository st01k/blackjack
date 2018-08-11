// Card -----------------------------------------------------------------------
function getSVG(suit) {
  switch (suit) {
    case "spades" :
      return '<?xml version="1.0" encoding="utf-8"?>' +
            '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="66.4 54.5 68.3 89.9" style="enable-background:new 66.4 54.5 68.3 89.9;" xml:space="preserve">' +
            '<style type="text/css"> .svgSpade{fill:#222222;} </style>' +
            '<path id="path1939" class="svgSpade" d="M100.4,54.5c-1.2,5.1-3.1,9.6-5.6,13.6s-7,8.9-13.5,14.8S70.7,93.3,69,96.4 c-1.7,3.1-2.6,6.3-2.6,9.6c0,4.5,1.5,8.3,4.5,11.3s6.7,4.5,11,4.5c7.7,0,13.7-5.6,17.6-11.8c-0.3,6.7-1.4,12.1-3.3,16.1  c-2.1,4.3-5.3,7.9-9.6,10.8c-2.9,1.9-8.1,3.6-15.7,5.1l-0.6,2.4h30.2h30.2l-0.6-2.4c-7.5-1.5-12.8-3.1-15.7-5.1  c-4.3-2.9-7.5-6.4-9.6-10.8c-1.9-4-3-9.4-3.3-16.1c3.9,6.1,9.9,11.8,17.7,11.8c4.3,0,8-1.5,11-4.5s4.5-6.7,4.5-11.3 c0-3.2-0.9-6.4-2.6-9.6c-1.7-3.1-5.9-7.6-12.3-13.5c-6.5-5.9-11-10.8-13.5-14.8C103.5,64.1,101.6,59.5,100.4,54.5z"/>' +
            '</svg>';
      break;
    case "hearts":
      return '<?xml version="1.0" encoding="utf-8"?>' +
            '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="61.9 55.3 76.7 88.2" style="enable-background:new 61.9 55.3 76.7 88.2;" xml:space="preserve">' +
            '<style type="text/css"> .svgHeart{fill:#D31F26;} </style>' +
            '<path id="path1935" class="svgHeart" d="M100.3,143.5c-1.5-5.5-3.5-10.7-6.2-15.6s-7.9-12.4-15.6-22.6C72.8,97.8,69.3,93,68,91 c-2.2-3.3-3.7-6.3-4.7-9c-1-2.7-1.4-5.5-1.4-8.3c0-5.2,1.7-9.6,5.2-13.1s7.8-5.3,12.9-5.3c5.2,0,9.6,1.8,13.4,5.5 c2.9,2.7,5.2,6.8,7,12.2c1.5-5.3,3.7-9.3,6.5-12.1c3.9-3.7,8.4-5.6,13.5-5.6s9.4,1.7,12.9,5.2c3.5,3.5,5.3,7.7,5.3,12.5 c0,4.2-1,8.6-3.1,13.2s-6,10.6-12,18c-7.7,9.7-13.3,17.7-16.8,23.9C103.9,132.9,101.8,138.1,100.3,143.5L100.3,143.5z"/>' +
            '</svg>';
      break;
    case "diamonds":
      return '<?xml version="1.0" encoding="utf-8"?>' +
            '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="68.1 55.3 64.6 88.3" style="enable-background:new 68.1 55.3 64.6 88.3;" xml:space="preserve">' +
            '<style type="text/css"> .svgDiamond{fill:#D31F26;} </style>' +
            '<path id="text1928" class="svgDiamond" d="M100.4,55.3C90.9,70.9,80,85.6,68.1,99.4c12,13.8,23,28.4,32.3,44.2 c9.3-15.7,20.4-30.4,32.3-44.2C120.8,85.6,109.9,70.9,100.4,55.3z"/>' +
            '</svg>';
      break;
    case "clubs":
      return '<?xml version="1.0" encoding="utf-8"?>' +
            '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="56.6 56.2 87 86.6" style="enable-background:new 56.6 56.2 87 86.6;" xml:space="preserve">' +
            '<style type="text/css"> .svgClub{fill:#222222;}</style>' +
            '<path id="path1937" class="svgClub" d="M100.1,56.2c-5.5,0-10.2,1.9-13.9,5.6c-3.8,3.7-5.7,8.1-5.7,13.2c0,4.2,1.6,8.5,4.8,13.1 c-2.8-2.3-5.6-3.7-10.9-3.7c-10.4,0-17.8,8.5-17.8,19.2c0,11.3,8.2,19.9,19.3,19.9c11,0,19.3-7.5,23.3-16.7 c-0.2,7.5-1.3,13.4-3.4,17.7c-2.1,4.3-5.3,7.9-9.6,10.8c-2.9,1.9-8.1,3.6-15.7,5.1l-0.6,2.4h30.2h30.2l-0.6-2.4 c-7.5-1.5-12.8-3.1-15.7-5.1c-4.3-2.9-7.5-6.4-9.6-10.8c-2.1-4.3-3.2-10.2-3.4-17.7c4.1,9.1,12.3,16.7,23.3,16.7s19.3-8.6,19.3-19.9 c0-10.7-7.5-19.2-17.8-19.2c-5.3,0-8.1,1.4-10.9,3.7c3.2-4.6,4.8-9,4.8-13.1c0-5.1-1.9-9.5-5.7-13.2C110.3,58,105.7,56.2,100.1,56.2 z"/>' +
            '</svg>';
      break;
  }
}

function Card(rank, suit) {
    this.rank = defaults.ranks[rank];
    this.value = setValue(this.rank);
    this.suit = defaults.suits[suit];
    this.svg = getSVG(this.suit);
    this.face = "up";

    this.isRed = (this.suit === "diamonds" || this.suit === "hearts")
    this.isTen = this.value === 10;
    this.isAce = this.rank === "A";

    this.isFaceDown = function() {
      return this.face === "down";
    };

    this.flip = function() {
      this.face = (this.face === "up") ? "down" : "up";
    };

    this.setAceHigh = function() {
      if (this.isAce) {
        this.value = 11;
      }
    };

    this.setAceLow = function() {
      if (this.isAce) {
        this.value = 1;
      }
    };
}

Card.prototype.toString = function cardToString() {
  return  this.rank + ' ' +
          this.suit + ' | val: '  +
          this.value + ' '  +
          this.face;
};

function setValue(rank) {
  if (rank == "A") return 1;
  else if (
      rank === "J" ||
      rank === "Q" ||
      rank === "K"
  ) return 10;
  else return parseInt(rank);
}

// Deck -----------------------------------------------------------------------
var defaults = {
  "ranks": ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
  "suits": ["spades", "hearts", "diamonds", "clubs"]
};

function Deck() {
    this.cards = [];
    for (var suit in defaults.suits) {
        for (var rank in defaults.ranks) {
            var len = this.cards.length;
            this.cards[len] = new Card(rank, suit);
        };
    };

    this.newDeck = function() {
      var newCards = [];
      for (var suit in defaults.suits) {
        for (var rank in defaults.ranks) {
          var len = newCards.length;
          newCards[len] = new Card(rank, suit);
        };
      };
      this.cards = newCards;
    };

    this.dealCard = function() {
      if (this.cards == null) return null;
      if (this.cards.length < 1) {
        statusMsg("Reshuffling", 0);
        this.newDeck();
        this.shuffle();
      }
      return this.cards.pop();
    };

  // https://www.frankmitchell.org/2015/01/fisher-yates/
    this.shuffle = function() {
        $.playSound("sounds/shuffle");
        var i, j, temp = null;
        for (i = this.cards.length - 1; i > 0; i -= 1) {
          j = Math.floor(Math.random() * (i + 1));
          temp = this.cards[i];
          this.cards[i] = this.cards[j];
          this.cards[j] = temp
        };
      };
};

// Rendering ------------------------------------------------------------------
function paintCard(card, player) {
  log("painting: " + card.rank + ' of ' + card.suit);
  $.playSound("sounds/dealCard");

  var container;
  if (player == "dealer") container = d3.select("#dHand");
  else if (player == "player")  container = d3.select("#pHand");
  else log("error in paintCard");

  var cardBox = container.select(".cardBox");
  var cardBoxEmpty = cardBox.text() == "";

  var cardSlot = cardBox.append("div").attr("class", "card");
  if (card.isRed) cardSlot.classed("pip-red", true);
  if (!cardBoxEmpty) cardSlot.classed("card-stack", true);

  cardSlot.classed("animated", true);
  cardSlot.classed("slideInRight", true);

  if (card.isFaceDown()) {
    cardSlot.attr("id", "facedown");
    cardSlot.append("img")
      .attr("src", "../img/playingcard-back.png");
  }
  else {
    cardSlot.append("div").attr("class", "pip").text(card.rank);
    cardSlot.append("div").attr("class", "smSuit").html(card.svg);
    cardSlot.append("div").attr("class", "lgSuit").html(card.svg);
  }
}

// paint deal in sequence
function paintDeal() {
  paintCard(player.hand[0], player.name);
  setTimeout(function() {
    paintCard(dealer.hand[0], dealer.name);
    setTimeout(function() {
      paintCard(player.hand[1], player.name);
      setTimeout(function() {
        paintCard(dealer.hand[1], dealer.name);
        setTimeout(function() {
          bjChecks();
        }, 500);
      }, 500);
    }, 500);
  }, 500);
}

function paintFlipCard(card) {
  var c = d3.select("#facedown");
  c.attr("id", null);
  c.remove();

  card.flip();
  paintCard(card, dealer.name);
}

// settimeout doesn't allow for clicks so it doesn't mess up flow
// using this method allows for interaction that is not accounted for
function paintRemoveCards() {
  d3.selectAll(".card")
    .each(function() {
      var container = d3.select(this);
      container.classed("slideInRight", false);
      container.classed("animated", false);
      container.classed("animated", true);
      container.classed("bounceOutLeft", true);
      setTimeout(function() {
        container.remove();
      }, 500);
    });
}
