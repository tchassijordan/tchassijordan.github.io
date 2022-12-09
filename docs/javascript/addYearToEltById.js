export default function addYearToEltById(eltId) {
  const year = new Date().getFullYear();
  const yearEl = document.getElementById(eltId);
  yearEl.innerHTML += ` ${year}`;
}
