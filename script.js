const upArrow = document.querySelector('.arrowTop');
const downArrow = document.querySelector('.arrowDown');

window.addEventListener('scroll', function() {

  const screenHeight = document.documentElement.clientHeight;
  const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;


  if (scrollPosition > (screenHeight / 2)-500) {

    upArrow.style.display = 'block';
    downArrow.style.display = 'none';
  } else {

    upArrow.style.display = 'none';
    downArrow.style.display = 'block';
  }
});


upArrow.addEventListener('click', function() {

  window.scrollTo({top: 0, behavior: 'smooth'});
});


downArrow.addEventListener('click', function() {

  window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
});