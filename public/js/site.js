var _env = "user";

function toggleEnv() {
  if (envDev()) _env = "user";
  else _env = "dev";
}

function envDev() {
  return _env === "dev"
}

function toggle(btn) {
  btn.toggleClass("hide");
  btn.toggleClass("show");
}

function btnOff(btn) {
  btn.removeClass("show");
  btn.addClass("hide");
}

function btnOn(btn) {
  btn.removeClass("hide");
  btn.addClass("show");
}

function log(msg) {
  if (envDev()) console.log(msg);
 }

function updateAmts(player) {
  $("#txtBet").text("Bet: $" + player.betAmt);
  $("#txtCash").text("$" + player.stash);
}

function statusMsg(msg, amt) {
  log(msg);
  var msgBox = $("#status");
  msgBox.addClass("animated");
  // msgBox.addClass("zoomOutRight");
  msgBox.addClass("pulse");
  if (amt < 0) {
    msgBox.html(msg + "<br/><h3>-$" + Math.abs(amt) + "</h3>");
  }
  if (amt == 0) {
    msgBox.text(msg);
  }
  if (amt > 0) {
    msgBox.html(msg + "<br/><h3>+$" + Math.abs(amt) + "</h3>");
  }

  setTimeout(function() {
    msgBox.text("");
    msgBox.removeClass("animated");
    // msgBox.removeClass("zoomOutRight");
    msgBox.removeClass("pulse");
  }, 2500);
}

function statusMsgStick(msg) {
  log("sticky: " + msg);
  var msgBox = $("#txtStatus");
  msgBox.text(msg);
}

function removeAudio() {
  d3.selectAll("audio")
    .each(function() {
      var container = d3.select(this);
      container.remove();
    });
}