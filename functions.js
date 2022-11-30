var buttonThing = document.getElementById("submit")
buttonThing.onclick = putToast;

function putToast(){

    window.alert("Press it again. You won't.");
    
}

function stylisticChange(){
    
}
function clear(){
    
}

const yesBtn = document.getElementById('yes');

// ✅ Set radio button to checked
yesBtn.checked = true;

var slider = document.getElementById("Hot");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
  }