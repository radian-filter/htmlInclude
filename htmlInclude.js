document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll("[data-include]");
  for (var i = 0; i < elements.length; i++) {
    var filePath = elements[i].getAttribute("data-include");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        elements[i].innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", filePath, true);
    xhttp.send();
  }
});
