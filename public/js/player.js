// Player ---------------------------------------------------------------------
function Player(isDealer) {
  if (isDealer) {
    this.name = "dealer";
    this.hand = [];
  }
  else {
    this.name = "player";
    this.stash = 5000;
    this.betAmt = 0;
    this.prevBet = 0;
    this.insurance = 0;
    this.insPurchased = false;
    this.hand = [];
  }
  this.bet = function(amt) {
    if (this.name == "player") {
      if (amt <= this.stash) {
        $.playSound("sounds/chipBet");
        this.stash -= amt;
        this.betAmt += amt;
      } else {
        statusMsg("Insufficient funds", 0);
      }
      updateAmts(player);
    }
  };
  this.isBroke = function() {
    return this.stash < 5 && this.betAmt <= 0;
  };
  this.clearHand = function() {
    this.hand = [];
  };
}

function hasAce(hand) {
  for (var i = 0; i < hand.length; i++) {
    if (hand[i].isAce) return true;
  }
  return false;
};