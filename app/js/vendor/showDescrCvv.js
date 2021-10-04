const descrCvv = document.querySelector('.cart-prompt__descr');
const btnDescrCvv = document.querySelector('.cart-prompt__title');
if(descrCvv){
 btnDescrCvv.addEventListener('touchstart',()=>{
  descrCvv.style.opacity = '1';

  setTimeout(()=>{
    descrCvv.style.opacity = '0';
  }, 5000)
 })
}