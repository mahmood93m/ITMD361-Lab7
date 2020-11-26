function init(){
    document.getElementById("entrybutton").addEventListener("click", m1);
    function m1() {
      var hObject =  document.querySelectorAll("h2.center");
      var hMessage = hObject.item(0).innerHTML;
      var eInput = document.getElementById("entryinput").value;
      document.getElementById("textoutput").innerHTML = eInput;
      alert(hMessage + ": " + eInput);
    }
    window.addEventListener('load', init);
  }
  