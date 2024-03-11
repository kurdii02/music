function simpleCounter(element, end, duration) {
    let start = 0;
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let timer;

    function updateCounter() {
        current += increment;
        element.textContent = current+" +";
        if (current == end) {
            clearInterval(timer);
        }
    }

    timer = setInterval(updateCounter, stepTime);
    updateCounter();
}

let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let number3 = document.getElementById('number3');

simpleCounter(number1, 1240, 2200);
simpleCounter(number2, 2000, 1000);
simpleCounter(number3, 1000, 2400);

function myFunction() {
    var x = document.getElementById("myLinks");
    var icon = document.getElementById("icon");

    if (x.style.display === "block") {
      x.style.display = "none";
      icon.classList.remove("clicked"); 


    } else {
      x.style.display = "block";
      icon.classList.add("clicked"); 


    }
  }


 document.getElementById("icon").addEventListener("click", myFunction);








