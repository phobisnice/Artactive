export default function (toElement, speed) {
  let w = window.pageYOffset;
  const hash = toElement.getAttribute('href');
  const elemPos = document.querySelector(hash).getBoundingClientRect().top;
  let start = null;

  requestAnimationFrame(step);

  function step(time) {
    if (start === null) {
      start = time;
    }
    let progress = time - start;
    let scroll = (elemPos < 0 ? Math.max(w - progress / speed, w + elemPos) : Math.min(w + progress / speed, w + elemPos));
    window.scrollTo(0, scroll);
    if (scroll != w + elemPos) {
      requestAnimationFrame(step)
    } else {
      location.hash = hash
    }
  }
}
