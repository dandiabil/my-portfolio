// Shrink Header
function shrinkHeader(e) {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 200,
    headerEl = document.getElementById("header");

  if (distanceY > shrinkOn) {
    headerEl.classList.add("shrink");
  } else {
    headerEl.classList.remove("shrink");
  }
}

window.addEventListener("scroll", shrinkHeader);

// Submit Message
// const form = document
//   .getElementById("form")
//   .addEventListener("submit", async (e) => {
//     e.preventDefault();
//     let senderName = document.getElementById("name").value;
//     let senderEmail = document.getElementById("email").value;
//     let senderMessage = document.getElementById("message").value;

//     const res = await fetch("https://formsubmit.co/dandiabil24@gmail.com", {
//       method: "POST",
//       body: {
//         name: senderName,
//         email: senderEmail,
//         message: senderMessage,
//       },
//     }).then((res) => console.log(res));

// console.log(res);

// senderName = "";
// senderEmail = "";
// senderMessage = "";
// });
