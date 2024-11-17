import { lakes } from "./data.js";

const lakesList = document.getElementsByClassName("lakes-list")[0];

lakes.forEach((lake) => {
  let lakePara = document.createElement("p");
  let lakeParaNameText = document.createTextNode(lake.name);
  lakePara.appendChild(lakeParaNameText);
  lakesList.appendChild(lakePara);
  let lakeImg = document.createElement("img");
  lakeImg.src = lake.img;
  lakesList.appendChild(lakeImg);
  let lakeAbout = document.createElement("p");
  let lakeAboutText = document.createTextNode(lake.description);
  lakeAbout.appendChild(lakeAboutText);
  lakesList.appendChild(lakeAbout);
});

