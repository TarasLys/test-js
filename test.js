// const fetchPostsBtn = document.querySelector(".btn");
// const postList = document.querySelector(".posts");

// // Controls the group number
// let page = 1;
// // Controls the number of items in the group
// let perPage = 10;

// fetchPostsBtn.addEventListener("click", () => {
//   fetchPosts()
//     .then((posts) => {
//       renderPosts(posts);
//       // Increase the group number
//       page += 1;

//       // Replace button text after first request
//       if (page > 1) {
//         fetchPostsBtn.textContent = "Fetch more posts";
//       }
//     })
//     .catch((error) => console.log(error));
// });

// function fetchPosts() {
//   const params = new URLSearchParams({
//     _limit: perPage,
//     _page: page
//   });

//   return fetch(`https://jsonplaceholder.typicode.com/posts?${params}`).then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p class="post-body">${body}</p>
//         </li>`;
//     })
//     .join("");
//   postList.insertAdjacentHTML("beforeend", markup);
// }


const icon = document.querySelector(".icon")
const formRequest = document.querySelector(".form-request")

const txtItem = document.querySelector(".textarea__item")
const txtItemLimit = txtItem.getAttribute("maxlength")
const txtCounter = document.querySelector(".textarea__counter span")


formRequest.style.display = "none"

icon.addEventListener("click", openForm)

function openForm(e) {
e.stopPropagation()

  const opfo = e.target;
  if (opfo) {
    
   return formRequest.style.display = "block"
  } 
}

document.addEventListener("keyup", closeForm)
function closeForm(e) {
  //console.dir(e.code)
  if (e.code === "Escape") { 
    formRequest.style.display = "none"
  }

}

document.addEventListener("click", offClick)

function offClick(e) {
  
  //console.log(clfo)
  if (e.target && !e.target.closest(".form-request")) {
  formRequest.style.display = "none"
  } 
}



  txtCounter.innerHTML = txtItemLimit





txtItem.addEventListener("keyup", listSymbol)
function listSymbol(e) {

  const result = txtItemLimit - e.target.value.length
    txtCounter.innerHTML = result;
  
  
    if (e.target.value.length > txtItemLimit) {
    e.target.value = e.target.value.slice(0, txtItemLimit);
  }
  
  
  
//   if (e.target.value.length >= 30) {

// txtItem.removeEventListener("keyup", listSymbol)
    
//   } return
  
}


txtItem.addEventListener("input", inputAdd)

function inputAdd(e) {
  if (e.target.value.length > txtItemLimit) {
    e.target.value = e.target.value.slice(0, txtItemLimit);

  }
}

txtItem.addEventListener("keydown", repeatSymb)
function repeatSymb(e) {
  if (e.repeat) listSymbol() 
  
}

