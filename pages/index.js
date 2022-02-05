"use strict";
import { reasons, influencers } from "../constants/Constants.js";

function handleRandomClick(e) {
  e.preventDefault;
  let randomItem = selectItem(reasons);

  let cardData = {
    title: randomItem.reason,
    desc: randomItem.desc,
    link: randomItem.link,
  };

  const titleEl = document.querySelector(".card__title");
  const descEl = document.querySelector(".card__desc");
  const linkEl = document.querySelector(".card__link");
  
  titleEl.textContent = cardData.title;
  descEl.textContent = cardData.desc;

  if (randomItem.link) {
    linkEl.classList.add("visible");
    linkEl.href = cardData.link;
  } else {
    linkEl.classList.remove("visible");
  }
}
function selectItem(reasons) {
  let item = reasons[Math.round(Math.random() * (reasons.length - 1))];
  return item;
}

const eventListener = document
  .querySelector(".card__button")
  .addEventListener("click", handleRandomClick);
const getContainer = document.querySelector(".influencers__container");
influencers.map((i) => {
  var li = document.createElement("li");
  getContainer.appendChild(li);
  console.log("i");
  let personHTML = `<div class='influencers__id'><IMG class='influencer__img' SRC='./images/${i.pic}.png' alt='${i.name} influencer photo'/><div class='influencer__name'>${i.name}</div></div><div class='influencer__desc'>${i.desc}</div><a class='influencer__link' target="_blank" href='${i.link}'>${i.linkType}</a>`;
  li.innerHTML = personHTML;
  li.classList.add("influencers__item");
});

selectItem(reasons);
