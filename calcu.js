function displaydata(data){
    result.value=result.value+data//data result.valuente koode add ayii varum
}
function allclear(){
    result.value=""
}
function outputoper(){
    result.value=eval(result.value)
}
function delet(){
    result.value=result.value.slice(0,-1)
}
function openbracket(){
    result.value+="("
}
function closebracket(){
    result.value+=")"
}