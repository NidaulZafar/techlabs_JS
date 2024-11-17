import { lakes } from "./data.js";

const lakesList = document.getElementsByClassName("lakes-list")[0];

lakes.forEach((lake) => {
  let lakePara = document.createElement("p");
  let lakeParaText = document.createTextNode(lake.name);
  lakePara.appendChild(lakeParaText);
  lakesList.appendChild(lakePara);
});
