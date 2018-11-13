const responses = ["I\'m daddy", "Haha, nice one, sweetheart!"];
const specialResponse = ["i love you", "i love u", "i wuv you", "i wuv u"];
function send() {
  var t = document.getElementById('daddyTextBox');
  var tv = t.value;
  if (tv != '') {
    var hourminute;
    t.value = '';
    document.getElementById('daddybox').innerHTML += `<div class="userMessage">${tv}</div><br><br><p id="readMessage" style="font-size: 8px; color: grey; float: right;"></p><br><br>`;
    setTimeout(function(){
      var isAM;
      var hs;
      var mins = new Date().getMinutes()
      if (new Date().getHours() < 12) {
        isAM = "AM";
        hs = new Date().getHours();
        if (hs == 0) {
          hs = 12;
        }
      } else {
        isAM = "PM";
        hs = new Date().getHours() - 12;
        if (hs == 0) {
          hs = 12;
        }
      }
      if (mins < 10) {
        mins = `0${mins}`;
      }
      hourminute = `${hs}:${mins} ${isAM}`
      document.getElementById("readMessage").innerHTML = `Read ${hourminute}`;
      document.getElementById("readMessage").removeAttribute("id");
      if (!specialResponse.includes(tv.toLowercase())) {
          var daddyr = randomNumber(1, responses.length) - 1;
          var daddyrs = responses[daddyr];
          document.getElementById('daddybox').innerHTML += `<br><div class="daddyMessage">${daddyrs}</div><br><br>`;
      }
    }, 2000)
  }
}
function checkKey(event) {
  if (event.which == 13) {
    send();
  }
}
