function nav (element){
  //console.log("yer", element)
  window.location.href= element;
}

let addCart = document.getElementsByClassName("fa-cart-plus");
let trash = document.getElementsByClassName("fa-trash");

Array.from(addCart).forEach(function (element){
  element.addEventListener("click", function(){
    console.log("YER", this.parentNode.parentNode.childNodes[1].dataset.value)
    const selectedItem = this.parentNode.parentNode.childNodes[1].dataset.value
    fetch ("cart", {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "selectedItem": selectedItem
      })
    })
    .then(response => {
              if (response.ok) return response.json()
            })
            .then(data => {
              console.log(data)
              window.location.reload(true)
            })
  })
})

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        console.log(this.parentNode.parentNode.childNodes[1].dataset.value)
        const deleteItem = (this.parentNode.parentNode.childNodes[1].dataset.value)
        fetch('cart', {
          method: 'delete',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            deleteItem: deleteItem
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

// var thumbUp = document.getElementsByClassName("fa-grin-squint-tears");
// var suprised = document.getElementsByClassName("fa fa-surprise");
//
// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });
//
// Array.from(suprised).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         const suprised = parseFloat(this.parentNode.parentNode.childNodes[6].innerText)
//         fetch('messages/suprised', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp': thumbUp,
//             'suprised': suprised
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });
//
// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         fetch('messages', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });
