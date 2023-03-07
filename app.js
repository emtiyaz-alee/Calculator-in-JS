function act(a){
    var v=document.getElementById('display')
    v.value+=a
}
function clr(){
    document.getElementById('display').value=''
}
function res(){
   var v= document.getElementById('display')
v.value=eval(v.value)
}