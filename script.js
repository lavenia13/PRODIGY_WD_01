// Function to open the menu based on the tab clicked
function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-grey", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " w3-grey";
  }
  