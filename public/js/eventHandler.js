$(".chip").click(function(event) {
  if (!inPlay) {

    if (player.betAmt == 0) {
      statusMsgStick("");
      paintRemoveCards();
      player.clearHand();
      dealer.clearHand();
      removeAudio();
    }

    var amt = event.currentTarget.value;
    log("--------- " + amt + " Chip Clicked");
    player.bet(amt);

    btnOff($("#btnRpt"));
    var btn = $("#btnDeal");
    var dealBtnOn = btn.hasClass("show");
    if (player.betAmt > 0 && !dealBtnOn) toggle(btn);

    if (!player.isBroke()) {
      btn.text("Deal");
      btn.removeClass("disableBtn");
    }
  }
});

$("#btnRpt").click(function() {
  if (!inPlay) {

    if (player.betAmt == 0) {
      statusMsgStick("");
      paintRemoveCards();
      player.clearHand();
      dealer.clearHand();
      removeAudio();
    }

    player.bet(player.prevBet);
    btnOff($("#btnRpt"));
    log("--------- Rebet Clicked");

    var btn = $("#btnDeal");
    var dealBtnOn = btn.hasClass("show");
    if (player.betAmt > 0 && !dealBtnOn) toggle(btn);

    if (!player.isBroke()) {
      btn.text("Deal");
      btn.removeClass("disableBtn");
    }
  }
});

$("#btnDeal").click(function() {
  if ($("#btnDeal").hasClass("refresh")) {
    newGame();
  }
  else {
    if (player.betAmt > 0) {
      log("--------- Deal Clicked");
      player.prevBet = player.betAmt;
      inPlay = true;
      dealRound();
      toggle($("#btnDeal"));
      toggle($("#btnHit"));
      toggle($("#btnStand"));
    }
    else {
      statusMsg("Place a bet", 0);
    }
  }
});

$("#btnHit").click(function() {
  if (!$("#btnHit").hasClass("disableBtn")) {
    log("--------- Hit Clicked");
    btnOff($("#btnDD"));
    hitPlayer();
  }
});

$("#btnStand").click(function() {
  if (!$("#btnStand").hasClass("disableBtn")) {
    log("--------- Stand Clicked");
    $("#btnHit").addClass("disableBtn");
    $("#btnStand").addClass("disableBtn");
    btnOff($("#btnDD"));
    hitDealer();
  }
});

$("#btnDD").click(function() {
  log("--------- Double Down Clicked");
  $("#btnHit").addClass("disableBtn");
  $("#btnStand").addClass("disableBtn");
  btnOff($("#btnDD"));
  btnOff($("#btnIns"));
  doubleDown();
});

$("#btnIns").click(function() {
  log("--------- Insurance Clicked");
  btnOff($("#btnIns"));
  purchaseIns();
});

$("#btnSplit").click(function() {
  log("--------- Split Clicked");
  btnOff($("#btnSplit"));
});

$("#btnDevMode").click(function() {
  var btn = $("#btnDevMode");
  if (envDev()) {
    toggleEnv();
    log("Disabling Dev Mode...");
    btn.text("Enable Dev Mode");
  }
  else {
    toggleEnv();
    log("Enabling Dev Mode...");
    btn.text("Disable Dev Mode");
  }
});

// updates UI stats/buttons on end of round
function endRound(msg, amt) {
  inPlay = false;
  updateAmts(player);
  $("#btnHit").removeClass("disableBtn");
  $("#btnStand").removeClass("disableBtn");
  $("#btnDeal").addClass("disableBtn");
  btnOn($("#btnDeal"));
  btnOn($("#btnRpt"));

  btnOff($("#btnHit"));
  btnOff($("#btnStand"));
  btnOff($("#btnDD"));
  btnOff($("#btnIns"));

  statusMsg(msg, amt);

  if (player.isBroke()) {
    var btn = $("#btnDeal");
    btn.text("Restart");
    btn.addClass("refresh");
    btn.removeClass("disableBtn");
    btnOff($("#btnRpt"));
  }
}