import { lakes } from "./data.js";

const lakesContainer = document.getElementById("lakes-container");

let lakeData = [...lakes];

const renderLakes = () => {
  lakesContainer.innerHTML = "";
  lakeData.forEach((lake) => {
    const lakeElement = document.createElement("div");
    lakeElement.classList.add("lake-item");
    lakeElement.innerHTML = `
      <figure>
        <img src="${lake.img}" alt="${lake.name}" />
        <figcaption>
          <h4>${lake.name}</h4>
          <p>${lake.description}</p>
          <button class="delete-btn" data-id="${lake.id}">Delete</button>
        </figcaption>
      </figure>
    `;
    lakesContainer.appendChild(lakeElement);
  });

  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = parseInt(event.target.dataset.id);
      deleteLake(id);
    });
  });
};

renderLakes();

const deleteLake = (id) => {
  lakeData = lakeData.filter((lake) => lake.id !== id);
  renderLakes();
};

// For adding lakes to the "Lakes Wish List" form input

const imgInput = document.getElementById("add-lake-img");
const nameInput = document.getElementById("add-lake-name");
const descriptionInput = document.getElementById("add-lake-description");
const addBtn = document.getElementsByClassName("add-btn")[0];
const lakeWishList = document.getElementsByClassName("lake-wish-list")[0];

addBtn.onclick = function () {
  const currentNameInput = nameInput.value;
  nameInput.value = "";
  const currentDescriptionInput = descriptionInput.value;
  descriptionInput.value = "";
  const currentImgInput = imgInput.file;
  imgInput.file = "";

  const newLakeListItem = document.createElement("li");
  const newLakeImg = document.createElement("img");
  const newLakeName = document.createElement("h4");
  const newLakeDescription = document.createElement("p");
  const deleteBtn = document.createElement("button");

  newLakeListItem.appendChild(newLakeImg);
  newLakeImg = currentImgInput;
  newLakeListItem.appendChild(newLakeName);
  newLakeName.innerHTML = currentNameInput;
  newLakeListItem.appendChild(newLakeDescription);
  newLakeDescription.innerHTML = currentDescriptionInput;
  newLakeListItem.appendChild(deleteBtn);
  deleteBtn.innerHTML = "Delete";

  if (!currentNameInput) {
    alert("Please enter which lake you would like to visit.");
  } else {
    lakeWishList.appendChild(newLakeListItem);
  }

  deleteBtn.onclick = function () {
    lakeWishList.removeChild(newLakeListItem);
  };
};