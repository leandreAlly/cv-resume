function changeColor() {
    document.getElementById('color').style.color = randomColors();
  }
  
  function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }