// input something into a form and get a value from it
// event listener for the button

var trash = document.getElementById("fa-trash");

document.getElementById("funnyBtn").addEventListener("click", function(e){
  let userInput = document.getElementById("urls").value
  console.log("hello", userInput)
  fetch("cute", {
    method: "post",
    headers: {"Content-Type":
  "application/json"},
  body:JSON.stringify({
    userInput: userInput
  })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(data => {
    window.location.reload(true)
  })
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'userInput': userInput
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
