const form = document.getElementById("form");
const submitBtn = form.submit;
const friendsContainer = document.querySelector(".friendsContainer");
const friends = [];



form.addEventListener("submit", (event) => {
  event.preventDefault();
  friends.push(newFriend(form));
  console.log(friends);
  update();
  form.reset(); 
});

function newFriend(formElement) {
  const newFriend = {
    firstName: formElement.firstName.value,
    lastName: formElement.lastName.value,
    street: formElement.street.value,
    plz: formElement.plz.value,
    location: formElement.location.value,
    fromWhere: formElement.fromWhere.value,
  };
  return newFriend;
}

function update() {
  friendsContainer.innerHTML = ""
  friends.forEach((friend) => {
    const friendContainer = document.createElement("div");
    friendContainer.classList.add("friendContainer");

    friendContainer.innerHTML = `
      <div class="friend-header">
        <h3>${friend.firstName} ${friend.lastName}</h3>
      </div>
      <div class="friend-details">
        <p><strong>Adresse:</strong> ${friend.street}</p>
        <p><strong>PLZ/Ort:</strong> ${friend.plz} ${friend.location}</p>
        <p><strong>Herkunft:</strong> ${friend.fromWhere}</p>
      </div>
    `;

    friendsContainer.append(friendContainer);
  });
}
