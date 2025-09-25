let postsEL = document.getElementById("posts");

function renderPosts(posts) {
  posts.forEach((post) => {
    renderPost(post);
  });
}

function renderPost(post) {
  const container = document.createElement("div");
  const title = document.createElement("div");
  title.innerText = post.title;

  //DELETE
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Löschen";

  deleteBtn.addEventListener("click", () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fehler Beim Löschen");
        }

        container.remove();
      })
      .catch((error) => {
        alert("Fehler" + error.message);
      });
  });

  const editBtn = document.createElement("button");
  editBtn.innerText = "Bearbeiten";
  editBtn.addEventListener("click", () => {
    openEditPopup(post, title);
  });

  container.append(title, deleteBtn);
  postsEL.append(container);
}

function openEditPopup(post, titleElement) {
  const popup = document.createElement("div");

  const form = document.createElement("form");

  const input = document.createElement("input");
  input.type = "text";
  input.value = post.title;

  const textarea = document.createElement("textarea");
  textarea.value = post.body || "";

  const saveBtn = document.createElement("button");
  saveBtn.type = "submit";
  saveBtn.innerText = "Speichern";

  const cancelBtn = document.createElement("button");
  cancelBtn.type = "button";
  cancelBtn.innerText = "Abbrechen";

  form.append(input, textarea, saveBtn, cancelBtn);
  popup.append(form);
  document.body.append(popup);

  cancelBtn.addEventListener("click", () => {
    popup.remove();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "PUT", 
      headers: {
        "Content-type": "application/json"
        //NICHT FERTIG
      }
    });
  });
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => renderPosts(data));
