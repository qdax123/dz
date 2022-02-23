// 弹出隐藏
function off() {
  document.getElementById("gg").style.display = "none";
}

// 图片
window.onload = function () {
  var gg = document.getElementById("gg");
  var w;
  var h;
  var x = 1;
  var y = 1;

  function move() {
    w = window.innerWidth;
    h = window.innerHeight;
    if (gg.offsetLeft > w - 302 || gg.offsetLeft < 0) x = -x;
    gg.style.left = gg.offsetLeft + 1 * x + "px";
    if (gg.offsetTop > h - 102 || gg.offsetTop < 0) y = -y;
    gg.style.top = gg.offsetTop + 1 * y + "px";
  }

  gg.onmouseover = function stop() {
    clearInterval(time);
  };

  gg.onmouseout = function play() {
    time = setInterval(move, 10);
  };

  time = setInterval(move, 10);
};
