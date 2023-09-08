//tap to top btn
const tap_top_btn = document.querySelector(".tap-toTop");
const tap_botton_btn = document.querySelector(".tap-toBottom");

tap_top_btn.onclick = function () {
  document.documentElement.scrollTop = 0;
};

tap_botton_btn.onclick = function () {
  document.documentElement.scrollTop = 2000;
};
