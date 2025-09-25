const form = document.getElementById("commentForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const message = document.getElementById("message").value;

    const tokenResponse = fetch("http://10.71.4.25/challenges/1", {
      method: "POST",
    });

    const token = tokenResponse.headers.get("Authorization");

    fetch("http://10.71.4.25/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: {
        message: message,
        username: username,
      },
    });

    if (commentRes.status === 201) {
      alert("Kommentar erfolgreich erstellt!");
    } else if (commentRes.status === 403) {
      alert("Token ungültig oder abgelaufen!");
    } else if (commentRes.status === 422) {
      alert("Ungültige Eingaben!");
    } else {
      alert("Fehler: " + commentRes.status);
    }
});
