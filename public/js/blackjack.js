var inPlay = false;
var dealer, player, deck;

// initialize blackjack game
function initBJ() {
    deck = new Deck();
    deck.shuffle();

    dealer = new Player(true);
    player = new Player(false);
    log(dealer);
    log(player);

    updateAmts(player);
    var btn = $("#btnDeal");
    toggle(btn);
    btn.addClass("disableBtn");
}

// starts a new game for reload
function newGame() {
  deck = new Deck();
  deck.shuffle();

  player = new Player(false);

  updateAmts(player);
  $("#txtStatus").html("");

  var btn = $("#btnDeal");
  toggle(btn);
  btn.removeClass("refresh");
  btn.addClass("disableBtn");
  paintRemoveCards();
}

// deals initial round of 2 cards per player
function dealRound() {
  var cardsToDeal = 4;
  var players = [player, dealer];
  for (var p = 0; cardsToDeal-- > 0; p = 1 - p) {
    var card = deck.dealCard();

    // flip dealer's last card in user mode
    if (!envDev()) {
      if (players[p].name == "dealer" && cardsToDeal == 0) {
        card.flip();
      }
    }

    players[p].hand.push(card);
    sumHand(player.hand);
    log(players[p].name + ": " + card);
  }

  paintDeal();
  btnOn($("#btnDD"));

  if (player.hand[0].rank === player.hand[1].rank) {
    log("showing split button")
    btnOn($("#btnSplit"));
  }
}

// checks for dealer/player blackjacks, in that order
// checks for push (tie) - pot goes to dealer
function bjChecks() {
  log("insurance eligible: " + insEligible());
  log("player has purchased insurance: " + player.insPurchased);
  if (insEligible() && player.insPurchased === false) {
    btnOn($("#btnIns"));
  }
  else {
    // dealer bj
    if (isBJ(dealer.hand)) {
      // push
      if (!envDev()) paintFlipCard(dealer.hand[1]);
      if (isBJ(player.hand)) {
        finalizeRound(player.betAmt);
        endRound("Push", 0);
      }
      else {
        var temp = player.betAmt;
        if (player.insPurchased) {
          finalizeRound(temp);
          endRound("Dealer Blackjack.  You're loss was insured.", 0);
        }
        else {
          var temp = player.betAmt;
          finalizeRound(0);
          endRound("Dealer Blackjack", -(temp));
        }
      }
    }
    // player bj
    else if (isBJ(player.hand)) {
      var winnings = player.betAmt * 2.5;
      finalizeRound(winnings);
      endRound("Blackjack", winnings);
    }
    // no player bj
    else {
      statusMsgStick("Total: " + sumHand(player.hand));
    }
  }
}

// adds one card to player's hand, checks for bust
function hitPlayer() {
  var card = deck.dealCard();
  log("hit: " + card.toString());
  paintCard(card, player.name);
  player.hand.push(card);
  var tot = sumHand(player.hand);
  statusMsgStick("Total: " + tot);
  var temp = player.betAmt;
  if (tot > 21) {
    finalizeRound(0);
    endRound("Busted", -(temp));
  }
  else if (player.hand.length == 7) {
    finalizeRound(player.betAmt);
    endRound("Won with 5 hits", temp);
  }
}

// dealer turn logic
function hitDealer() {
  if (!envDev()) paintFlipCard(dealer.hand[1]);

  var tot = sumHand(dealer.hand);
  for (tot; tot < 18; tot = sumHand(dealer.hand)) {
    if (tot < 17) {
      var card = deck.dealCard();
      dealer.hand.push(card);
    }
    if (tot == 17) {
      if (hasAce(dealer.hand)) {
        log("dealer hits on soft 17");
        var card = deck.dealCard();
        dealer.hand.push(card);
      }
      else {
        log("dealer stands on hard 17");
        break;
      }
    }
  }
  recurseTimeout(dealer.hand, tot, dealer.hand.length - 2);
}

// paints dealer's hits and finalizes dealer's turn
function recurseTimeout(hand, tot, hits) {
  // finalizes turn after hits (if applicable) are painted
  if (hits == 0) {
    setTimeout(function() {
      // dealer bust
      if (tot > 21) {
        var winnings = player.betAmt * 2;
        finalizeRound(winnings);
        endRound("Dealer busted with " + tot, winnings);
      }
      else {
        updateWin();
      }
    }, 500);
  }
  // base case
  if (hits < 1) return;
  // paints hits in timed sequence
  else setTimeout(function() {
    paintCard(hand[hand.length - hits], dealer.name);
    recurseTimeout(hand, tot, hits - 1);
  }, 500);
}

// dispenses winnings, ends round
function updateWin() {
  var pTot = sumHand(player.hand);
  var dTot = sumHand(dealer.hand);
  log("player tot: " + pTot + " | dealer tot: " + dTot);
  if (pTot > dTot) {
    // standard win
    var winnings = player.betAmt * 2;
    finalizeRound(winnings);
    endRound("", winnings);
  }
  else if (pTot == dTot) {
    finalizeRound(player.betAmt);
    endRound("Push", 0);
  }
  else {
    var temp = player.betAmt;
    finalizeRound(0);
    endRound("Dealer won with " + dTot, -(temp));
  }
}

// updates player's internal stats
function finalizeRound(winAmt) {
  log("player won $" + winAmt);
  player.stash += winAmt;
  player.betAmt = 0;
  player.insPurchased = false;
}

// returns the sum of all cards in the hand
// if ace in hand, and if high ace does not cause
// sum to exceed 21, total with high ace is returned
function sumHand(hand) {
  var tot = 0;
  var aceIndex = false;

  for (var i = 0; i < hand.length; i++) {
    tot += hand[i].value;
    if (hand[i].isAce) aceIndex = true;
  }

  if (aceIndex) {
    if (tot + 10 <= 21) {
      return tot + 10;
    }
  }
  return tot;
}

// returns true if hand is a blackjack
function isBJ(hand) {
    if (hand.length > 2) return false;
    var hasAce = false;
    var hasTen = false;
    for (var i = 0; i < 2; i++) {
      if (hand[i].isAce) hasAce = true;
      if (hand[i].isTen) hasTen = true;
    }
    log("has ace: " + hasAce + " | has ten card: " + hasTen);
    return (hasAce && hasTen);
}

// Additional Actions ---------------------------------------------------------
function doubleDown() {
  if (player.stash >= player.betAmt) {
    player.bet(player.betAmt);
    hitPlayer();

    var tot = sumHand(player.hand);
    statusMsgStick("Total: " + tot);
    var temp = player.betAmt;

    if (tot > 21) {
      finalizeRound(0);
      endRound("Busted", -(temp));
    }
    else {
      setTimeout(function() {
        hitDealer();
      }, 1000);
    }
  }
  else {
    statusMsg("Insufficient Funds", 0);
    //btnOff($("#btnDD"));
    $("#btnHit").removeClass("disableBtn");
    $("#btnStand").removeClass("disableBtn");
  }
}

// checks if hand is eligible for insurance
// returns true if dealer's first card is A, false otherwise
function insEligible() {
  return dealer.hand[0].isAce;
}

function purchaseIns() {
  var halfBet = player.betAmt / 2;
  if (halfBet <= player.stash) {
    player.insPurchased = true;
    player.stash -= halfBet;
    player.insurance = halfBet;
    log("insurance purchased for $" + halfBet);
    bjChecks();
  }
  else {
    statusMsg("Insufficient Funds", 0);
    $("#btnIns").hide();
  }
}

function split() {}

function surrender() {}
