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
