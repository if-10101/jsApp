const $ = document;
const btn = $.querySelector('button');
btn.addEventListener('mouseup', () =>{
  console.log('mouse uped')
});
btn.addEventListener('mousedown', () =>{
  console.log('clicked')
});