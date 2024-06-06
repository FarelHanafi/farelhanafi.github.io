
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  const teksny = document.querySelector('.teksny');
const growAns = document.querySelectorAll('.grow-ans');

growAns.forEach((element) => {
  element.addEventListener('animationend', () => {
    teksny.classList.add('animate');
  });
});