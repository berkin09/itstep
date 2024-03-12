let person = document.querySelector(".person");

window.addEventListener("keydown", (e) => {
  let coor = person.getBoundingClientRect();

  //   console.log(e);
  if (e.key == "w") {
    person.style.top = `${coor.top - 20}px`;
  } else if (e.key == "s") {
    person.style.top = `${coor.top + 20}px`;
  } else if (e.key == "a") {
    person.style.left = `${coor.left - 20}px`;
  } else if (e.key == "d") {
    person.style.left = `${coor.left + 20}px`;
  }
});
