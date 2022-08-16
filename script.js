const buttonOpenMenuMobile = document.querySelector('.header__icon-open');
const buttonCloseMenuMobile = document.querySelector('.header__icon-close');
const menuBody = document.querySelector('.menu__body');



buttonOpenMenuMobile.addEventListener('click', function(event){
     menuBody.classList.add('_active')

     buttonOpenMenuMobile.classList.add('_active');
     buttonCloseMenuMobile.classList.add('_active');
     document.body.style.overflow = 'hidden';

     createIconNetwork()
});
buttonCloseMenuMobile.addEventListener('click', function(event){
     menuBody.classList.remove('_active')

     buttonCloseMenuMobile.classList.remove('_active');
     buttonOpenMenuMobile.classList.remove('_active');
     document.body.style.overflow = 'auto';

     deleteIconNetwork();
});



function createIconNetwork(){
     const blockIconNetwork = document.createElement('div')
     menuBody.append(blockIconNetwork)
     blockIconNetwork.classList.add('_menu-burger-networkIcon')
     blockIconNetwork.innerHTML = '<img src="./assets/img/instagram2.png"><img src="./assets/img/facebook2.png"><img src="./assets/img/twitter2.png">' 
};
function deleteIconNetwork(){
     document.querySelector('._menu-burger-networkIcon').remove();
};
function createIrrowButton(element, num, textOne, textTwo, color){
     const svgArrow = '<svg class="svgArrow" width="28" height="8" viewBox="0 0 28 8" fill="none"></svg>';
     const pathArrow = '<path d="M1 4H26M26 4C26 4 24.1716 2.17157 23 1M26 4L23 7" stroke="' + color + '" stroke-width="1.7" stroke-linecap="round"/>'

     if(window.innerWidth <= num){
          element.innerHTML = textOne + svgArrow;
          document.querySelectorAll('.svgArrow').forEach(function(item, index){
               item.innerHTML = pathArrow;
               item.style.margin = '0 0 0 25px';
          })
     }
     else if(window.innerWidth >= num){
          element.innerHTML = textTwo
     }
}

window.addEventListener('resize', function(event){
     const btn = document.querySelector('.block__cofeeshop-button');
     const sliderLink = document.querySelectorAll('.slider__link')
     const footerMapOne = document.querySelector('.footer__map img');
     const footerAdress = document.querySelector('.footer__adress');
     createIrrowButton(btn, 990, 'Order here', 'Order here', 'white')

     if(window.innerWidth <= 788){
          sliderLink.forEach(function(item, index){
               item.textContent = 'Add to cart';
          });
          footerMapOne.src = './assets/img/map2.png';

          const buttonMoreAdress = document.createElement('button')
          footerAdress.append(buttonMoreAdress);
          buttonMoreAdress.classList.add('buttonMoreAdress')

          const buttonMoreAdressPoisk = document.querySelectorAll('.buttonMoreAdress');
          for(let i = 0; i < buttonMoreAdressPoisk.length; i++){
               if(buttonMoreAdressPoisk.length > 1){
                    buttonMoreAdressPoisk[buttonMoreAdressPoisk.length - 1].remove();
               }
          } 
     }
     else if(window.innerWidth >= 788){
          sliderLink.forEach(function(item, index){
               item.textContent = 'Order now';
          });
          footerMapOne.src = './assets/img/map.png';
          document.querySelector('.buttonMoreAdress').remove()
     }  
     const btnMoreAdress = document.querySelector('.buttonMoreAdress');
     createIrrowButton(btnMoreAdress, 788, 'See more address', 'See more address', 'black')  
})