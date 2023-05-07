const projectsListParent = document.querySelector(".projects-list");
const intCarrousel = 1;
const lOfAllProjects = 450 * datasProject.length;

const modalScreenshot = document.querySelector("#modal-screenshots");
const imgModalScreenshot = document.querySelector(".img-modal-screenshot");
const btnLScreenshot = document.querySelector(".btn-left-screens");
const btnRScreenshot = document.querySelector(".btn-right-screens");
const hidebody = document.querySelector("#hide-body");
const body = document.querySelector("body");


callProjects();
let posProj = 120;
var bool2 = false;
var boolMEvent = true;

function callProjects() {
  for (let i = 0; i < datasProject.length; i++) {
    const p = datasProject[i];
    if (!bool2) {
      createProjects(p, i);
      createScreenshots(p, i);

      if (i === datasProject.length - 1) {
        bool2 = true;
      }
    } else if (bool2 && boolMEvent) {
    }
  }
}

function createProjects(project, index) {
  const pDiv = document.createElement("div");
  pDiv.classList.add("project");
  pDiv.title = "Cliquez pour voir les captures d'écran";



  const pTitle = document.createElement("h3");
  pTitle.textContent = project.title;
  pDiv.appendChild(pTitle);

  const pImg = document.createElement("img");
  pImg.classList.add("img-project");
  pImg.src = project.img;
  pImg.alt = project.title;
  pDiv.appendChild(pImg);

  const pDescription = document.createElement("p");
  pDescription.textContent = project.description;
  pDiv.appendChild(pDescription);

  if (project.url.site) {
    const btnSite = document.createElement("a");
    btnSite.classList.add("btn-project");
    btnSite.href = project.url.site;
    btnSite.textContent = "Site";
    btnSite.target = "_blank";

    pDiv.appendChild(btnSite);
  }

  const btnRepo = document.createElement("a");
  btnRepo.classList.add("btn-project");
  btnRepo.target = "_blank";

  btnRepo.href = project.url.repo;
  btnRepo.innerHTML = `<i class="fa-brands fa-github"></i>Github`;
  pDiv.appendChild(btnRepo);

  pDiv.addEventListener("click", (e) =>
    showModalScreenshot(e, project.screenshots)
  );

  console.log(pDiv);

  const techListDiv = document.createElement("div");
  techListDiv.classList.add("techlist-div");
  project.techlistImg.forEach((el) => {
    const imgTechno = document.createElement("img");
    imgTechno.classList.add("tech-logo");
    imgTechno.setAttribute("src", el.path);
    imgTechno.setAttribute("alt", el.alt);
    imgTechno.setAttribute("title", el.alt);
    imgTechno.style.border = `2px solid ${el.color ? el.color : "red"}`;
    techListDiv.appendChild(imgTechno);
  });

  pDiv.appendChild(techListDiv);
  projectsListParent.appendChild(pDiv);
  if (document.querySelectorAll(".project").length === datasProject.length) {
    gsap.from(".project", {
      duration: 0.5,
      opacity: 0,
      stagger: {
        each: 0.3,
      },
      delay: 2,
    });

    gsap.from(".btn-left", {
      duration: 0.25,
      opacity: 0,

      delay: 2.5,
    });
    gsap.from(".btn-right", {
      duration: 0.25,
      opacity: 0,
      delay: 2.5,
    });
  }
}

function createScreenshots(project, i) {
  console.log(project);
  console.log(i);
}

console.log(imgModalScreenshot);
console.log(modalScreenshot);
console.log(btnLScreenshot);
console.log(btnRScreenshot);



function showModalScreenshot(e, screens) {
  console.log("test");

  if (e.target.nodeName !== "A") {
    let idScreens = 0;
    console.log(screens);
    console.log(e.target);
    console.log("ouverture de ma modale");
    modalScreenshot.style.display = "block";
    hidebody.style.display = "block";

    imgModalScreenshot.src = screens[idScreens].path;
    imgModalScreenshot.alt = screens[idScreens].alt;
    console.log(idScreens);

    btnLScreenshot.addEventListener("click", () => {
      idScreens--;
      if (idScreens < 0) {
        idScreens = screens.length - 1;
      }
      console.log(idScreens);
      imgModalScreenshot.src = screens[idScreens].path;
      imgModalScreenshot.alt = screens[idScreens].alt;
    });

    btnRScreenshot.addEventListener("click", () => {
      idScreens++;
      if (idScreens > screens.length - 1) {
        idScreens = 0;
      }
      console.log(idScreens);
      imgModalScreenshot.src = screens[idScreens].path;
      imgModalScreenshot.alt = screens[idScreens].alt;
    });
  }
}

hidebody.addEventListener("click", () => {
  hidebody.style.display = "none";
  modalScreenshot.style.display = "none";
});
