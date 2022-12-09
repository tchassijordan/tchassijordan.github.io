export default function disableBtn(btnId) {
  const btnEl = document.getElementById(btnId);
  btnEl.style = "pointer-events: none; opacity: 0.25; cursor: not-allowed;";
}
