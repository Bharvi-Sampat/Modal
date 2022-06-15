'use strict';

// jQuery IP address extractor 
$.getJSON("https://api.ipify.org?format=json", function(data) {
        
        // Setting text of element P with id gfg
        $("#gfg").html(data.ip);
        console.log(data.ip);
    })

// // jQuery IP Address extractor
// $.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=42a2876607b8431f86945e8f7f22c8d2", function(data) {
//     console.log(data);
// })
  
//   var url = "https://ipgeolocation.abstractapi.com/v1/?api_key=42a2876607b8431f86945e8f7f22c8d2"
  
// httpGetAsync(url)

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModal = document.querySelectorAll('.open-modal');
const closeModal = document.querySelector('.close-modal');


const open = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


const close = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < openModal.length; i++)
  openModal[i].addEventListener('click', open);

closeModal.addEventListener('click', close);
overlay.addEventListener('click', close);

document.addEventListener('keydown', function(e) {
  console.log(e.key);

  if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
      close();
  }
});

