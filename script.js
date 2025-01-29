const postForm = document.getElementById("post-form");
const postTitleInput = document.getElementById("title");
const postContentInput = document.getElementById("post-body");
const postsContainer = document.getElementById("posts");

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

async function displayPosts(posts) {
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
    postsContainer.appendChild(postDiv);
  });
}

function addPost(event) {
  event.preventDefault();

  var newPost = {
    title: postTitleInput.value,
    body: postContentInput.value,
  };

  var newPostDiv = document.createElement("div");
  newPostDiv.classList.add("post");
  newPostDiv.innerHTML = `
      <h3>${newPost.title}</h3>
      <p>${newPost.body}</p>
    `;

  //postsContainer.appendChild(newPostDiv);
  postsContainer.prepend(newPostDiv);

  postTitleInput.value = "";
  postContentInput.value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  fetchPosts();
  postForm.addEventListener("submit", addPost);
});
