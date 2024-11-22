import { lakes } from "./data.js";

const lakesContainer = document.getElementById("lakes-container");
const lakeForm = document.getElementById("lake-form");
const lakeNameInput = document.getElementById("lake-name");
const lakeDescriptionInput = document.getElementById("lake-description");
const lakeImageInput = document.getElementById("lake-image");

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

const addLake = (event) => {
  event.preventDefault();
  const newLake = {
    id: lakeData.length + 1,
    name: lakeNameInput.value,
    description: lakeDescriptionInput.value,
    img: lakeImageInput.value,
  };
  lakeData.push(newLake);
  renderLakes();
  lakeForm.reset();
};

lakeForm.addEventListener("submit", addLake);
