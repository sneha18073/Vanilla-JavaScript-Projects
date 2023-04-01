function playSound(e){
    const audio = document.getElementById(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`key[data-key="${e.keyCode}"]`);
    
}