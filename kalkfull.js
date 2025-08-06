const display = document.getElementById('display');
function displayCharacters(input){
    display.value += input;    
}
function deleteAll(){
    display.value = 0;
}
function calculate(){
    try{
        display.value = eval(display.value);
    }catch(error)
    {
        display.value = 'ERROR';
    }
}
