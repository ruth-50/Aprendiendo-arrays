let arrays = []
let operador=''
let num = ''
document.getElementById('uno').addEventListener('click',function(){
    document.getElementById('input').value+=1
    
})
document.getElementById('dos').addEventListener('click',function(){
    document.getElementById('input').value+=2
    
})
document.getElementById('tres').addEventListener('click',function(){
    document.getElementById('input').value+=3
    
})
document.getElementById('cuatro').addEventListener('click',function(){
    document.getElementById('input').value+=4
    
})
document.getElementById('cinco').addEventListener('click',function(){
    document.getElementById('input').value+=5
    
})
document.getElementById('mas').addEventListener('click',function(){
    arrays.push(document.getElementById('input').value)
    
    if(num == ''){
        num = document.getElementById('input').value
    }
    console.log(parseInt(arrays) + parseInt(num));
    document.getElementById('input').value=''
    operador = 'mas'
})
document.getElementById('igual').addEventListener('click',function(){
    document.getElementById('input').value=''
switch (operador) {
    case 'mas':
      suma=  parseInt(arrays) + parseInt(num)
        console.log(suma);
        break;

    default:
        break;
}
   
})