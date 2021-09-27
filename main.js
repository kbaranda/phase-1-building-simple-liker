// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById("modal");
modal.className = "hidden";

const hearts = document.querySelectorAll(".like-glyph");
for (let heart of hearts) {
  heart.addEventListener("click", likedHearts);
}

function likedHearts(e) {
  mimicServerCall()
  .then(heartStatus(e))
  .catch(error => {
    errorModel.innerHTML = error
    errorModel.className = " "
    setTimeout(() => errorModel.className = "hidden", 3000)
  })
}

function heartStatus(e) {
  const heart = e.target
  if (heart.innerText === EMPTY_HEART) {
    heart.innerText = FULL_HEART
    heart.classList.add("activated-heart")
  } else {
    heart.innerText = EMPTY_HEART
    heart.classList.remove("activated-heart")
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
