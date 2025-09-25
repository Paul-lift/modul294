const container = document.querySelector(".container");

function renderPost(post) {
  const postContainer = document.createElement("div");
  postContainer.innerText = post.title;
  container.append(postContainer);
}

function renderPosts(posts) {
  posts.forEach((post) => {
    renderPost(post);
  });
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((respose) => {
    return respose.json();
  })
  .then((data) => {
    renderPosts(data);
  });
