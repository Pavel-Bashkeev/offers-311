
const itemRadio = document.querySelectorAll('.kit-item__checkbox');
const itemKit = document.querySelectorAll('.kit-item');
if(itemKit){
  itemRadio.forEach(item => {
    item.addEventListener('change', (e)=>{
      let target = e.target;
      itemKit.forEach(item => {
        item.classList.remove('active-checked');
        if(item.contains(target)){
          item.classList.add('active-checked');
        }
      })
    })
  });
}
