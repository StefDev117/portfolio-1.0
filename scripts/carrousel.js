const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const projectsList = document.querySelector(".projects-list");
const allProjects = document.querySelectorAll(".project");


let translateInd = 0;

window.addEventListener("resize", function () {
  if(window.innerWidth >= 1040) {
    projectsList.style.translate = `0%`;
  } else {
    projectsList.style.translate = `${translateInd * 100}%`;
  }
  projectsList.style.transition = "none";
});

btnLeft.addEventListener("click", () => {
  translateInd += 1;
  currentTranslate(translateInd);
});

btnRight.addEventListener("click", () => {
  translateInd -= 1;
  currentTranslate(translateInd);
});

function currentTranslate(translateInd) {
  projectsList.style.translate = `${translateInd * 100}%`;
  projectsList.style.transition = "0.4s";
  areArrowDisplayed(translateInd);
}

areArrowDisplayed(translateInd);

function areArrowDisplayed(translateInd) {
  if (translateInd <= -(allProjects.length - 1)) {
    btnRight.style.display = "none";
  } else {
    btnRight.style.display = "block";
  }

  if (translateInd === 0) {
    btnLeft.style.display = "none";
  } else {
    btnLeft.style.display = "block";
  }
}
