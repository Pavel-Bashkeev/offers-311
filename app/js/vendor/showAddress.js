const innerInputsAddress = document.querySelector('.choice-address__inputs');
const addressNotMatches =document.querySelector('#address-not-matches');
const addressMatches = document.querySelector('#address-matches');


if(innerInputsAddress){
  addressNotMatches.addEventListener('change', ()=>{
    if(addressNotMatches.checked){
      innerInputsAddress.style.display = 'block';
    }
    for(let i = 0; i < innerInputsAddress.children.length; i++){
      innerInputsAddress.children[i].setAttribute('required', ' ')
    }
  });
  addressMatches.addEventListener('change', ()=>{
    if(addressMatches.checked){
      innerInputsAddress.style.display = 'none';
    }
    for(let i = 0; i < innerInputsAddress.children.length; i++){
      innerInputsAddress.children[i].removeAttribute('required', 'required')
    }
  })
}