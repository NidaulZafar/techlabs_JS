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

const input = document.getElementById("added-lake");
const addBtn = document.getElementsByClassName("add-btn")[0];
const lakeWishList = document.getElementsByClassName("lake-wish-list")[0];

addBtn.onclick = function () {
  const currentInput = input.value;
  input.value = "";

  const lakeListItem = document.createElement("li");
  const lakeName = document.createElement("span");
  const deleteBtn = document.createElement("button");

  lakeListItem.appendChild(lakeName);
  lakeName.innerHTML = currentInput;
  lakeListItem.appendChild(deleteBtn);
  deleteBtn.innerHTML = "Delete";

  if (!currentInput) {
    alert("Please enter which lake you would like to visit.");
  } else {
    lakeWishList.appendChild(lakeListItem);
  }

  deleteBtn.onclick = function () {
    lakeWishList.removeChild(lakeListItem);
  };
};



