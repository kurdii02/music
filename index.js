function simpleCounter(element, endValue, duration) {
    let start = 0;
    let range = endValue - start;
    let current = start;
    let increment = endValue > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));

    function updateCounter() {
        current += increment;
        element.textContent = current + "+";
        if (current !== endValue) {
            setTimeout(updateCounter, stepTime);
        }
    }

    updateCounter();
}

simpleCounter(document.getElementById('number1'), 1240, 4000);
simpleCounter(document.getElementById('number2'), 1500, 2000); 
simpleCounter(document.getElementById('number3'), 1000, 4000);




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








