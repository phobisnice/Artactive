export default function (message) {
  const container = document.createElement('div');
  container.className = 'modal modal--message';
  container.textContent = message;
  document.body.append(container);
  setTimeout(() => {
    container.classList.add('modal--active');
  }, 100);
  setTimeout(() => {
    container.classList.remove('modal--active');
  }, 2000)
  setTimeout(() => {
    container.remove()
  }, 3000)
}
