let contentItems = document.querySelectorAll('.tabs-item');

// Modify current tabs links into left and right button for carousel
let tabsLinks = document.querySelector('.tabs-links');
tabsLinks.classList.add('carousel-tabs-link');

    // Hide all tabs links instead the first and last one
for (let i = 1; i < tabsLinks.children.length-1; i++) {
    console.log(tabsLinks.children[i]);
    tabsLinks.children[i].classList.add('carousel-tabs-hide');    
}
    // Create buttons to click
let leftBtn = tabsLinks.firstElementChild;
let rightBtn = tabsLinks.lastElementChild;
leftBtn.innerText = "Left";
rightBtn.innerText = "Right";
leftBtn.addEventListener('click', slideCarouselLeft);
rightBtn.addEventListener('click', slideCarouselRight);
// end of tabs links modification

// Counter to manage position of the 'tabs-item-selected' class
let currentPosition;

function slideCarouselRight() {
    // Check which position (NodeList item) has 'tabs-item-selected' ON and remove it.
   for (let i = 0; i < contentItems.length; i++) {
       if (contentItems[i].classList.contains('tabs-item-selected')) {
        currentPosition = Number(contentItems[i].dataset.tab)+1;
        contentItems[i].classList.remove('tabs-item-selected')
       }           
   }

   // Make sure the currentPosition counter does not exceed lenght of NodeList
   if (currentPosition > contentItems.length) {
       currentPosition = 1;
    }

    // Add the 'tabs-item-selected' to next item based on dataset count.
   let nextItem = document.querySelector(`.tabs-item[data-tab="${currentPosition}"]`);
   nextItem.classList.add('tabs-item-selected');

   return currentPosition;
}


function slideCarouselLeft() {
    // Check which position (NodeList item) has 'tabs-item-selected' ON and remove it.
   for (let i = 0; i < contentItems.length; i++) {
       if (contentItems[i].classList.contains('tabs-item-selected')) {
        currentPosition = Number(contentItems[i].dataset.tab)-1;
        contentItems[i].classList.remove('tabs-item-selected')
       }           
    }

    // Make sure the currentPosition counter does not go below 0
    if (currentPosition <= 0) {
        currentPosition = contentItems.length;
    }

    // Add the 'tabs-item-selected' to next item based on dataset count.
   let nextItem = document.querySelector(`.tabs-item[data-tab="${currentPosition}"]`);
   nextItem.classList.add('tabs-item-selected');

   return currentPosition;
}
