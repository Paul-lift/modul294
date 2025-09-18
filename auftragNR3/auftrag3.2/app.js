const albumContainer = document.querySelector(".imageContainer");

const addAlbenButton = document.getElementById("addAlben");

const removeAlbenButton = document.getElementById("removeAlben");

function addThree(){
    for (let i = 0; i < 3; i++){
        const randomId = Math.floor(Math.random() * 999)
        const album = document.createElement("img");
        album.src = `https://picsum.photos/id/${randomId}/200/200`
        albumContainer.appendChild(album)
    }
}

function removeThree(){
    
}


