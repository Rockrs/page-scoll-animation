const animationBar = document.querySelector('.animation-bar')
const content = document.querySelector('.content');


document.addEventListener('scroll', function(e) {
    const percentageDocScrolled = document.documentElement.scrollTop/(content.offsetHeight - document.documentElement.clientHeight) *100
    animationBar.style.width = `${percentageDocScrolled}%` ;
  });