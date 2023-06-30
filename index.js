const btn = document.getElementById("button")

 function clickAlert(){
    alert("I was clicked!");
}

function addingEventListener() {
    alert("I was clicked!");
    btn.addEventListener("click", clickAlert);
}

addingEventListener()









// const button = document.getElementById("button")

// function clickAlert(){
//     alert("I was clicked");
// }


// function addingEventListener() {
//     input.addingEventListener("click", clickAlert);
// }

// function clickAlert(){
//     alert("I was clicked!");
// }
// addingEventListener()