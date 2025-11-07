const body = document.body;
const hoverBtn = document.getElementById("hoverBtn");
const focusInput = document.getElementById("focusInput");

const defaultBg = "#f4f4f9";
const hoverBg = "linear-gradient(135deg, #4f73ff, #00d83d)";
const focusBg = "linear-gradient(135deg, #ffb6ee, #fae3d9)";

let isHover = false, isFocus = false;

hoverBtn.onmouseover = () => {
  isHover = true;
  if (!isFocus) body.style.background = hoverBg;
};

hoverBtn.onmouseout = () => {
  isHover = false;
  if (!isFocus) body.style.background = defaultBg;
};

focusInput.onfocus = () => {
  isFocus = true;
  body.style.background = focusBg;
};

focusInput.onblur = () => {
  isFocus = false;
  body.style.background = isHover ? hoverBg : defaultBg;
};
