// Cache the DOM elements
const stars = document.getElementById('stars');
const moon = document.getElementById('moon');
const mountains3 = document.getElementById('mountains3');
const mountains4 = document.getElementById('mountains4');
const river = document.getElementById('river');
const boat6 = document.getElementById('boat');
const nouvil = document.querySelector('.nouvil');

// Set up the scroll event handler
window.onscroll = function() {
  // Get the current scroll position
  let value = window.scrollY;

  // Apply styles based on scroll position
  stars.style.left = value + 'px';
  moon.style.top = value * 4 + 'px';
  mountains3.style.top = value * 2 + 'px';
  mountains4.style.top = value * 1.5 + 'px';
  river.style.top = value + 'px';
  boat6.style.top = value + 'px';
  boat6.style.left = value * 3 + 'px';
  nouvil.style.fontSize = value + 'px';

  // Additional actions based on scroll position
  if (value >= 67) {
    nouvil.style.fontSize = '67px';
    nouvil.style.position = 'fixed';

    if (value >= 450) {
      nouvil.style.display = 'none';
    } else {
      nouvil.style.display = 'block';
    }

    if (value >= 127) {
      document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)';
    }else{
      document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)';

    }
  }
};
