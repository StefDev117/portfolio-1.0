const html = "#c84720";
const css = "#1572b6";
const sass = "#c75093";
const javascript = "#e2ca53";
const react = "#04a0c9";
const nodeJs = "#266618";
const mongoDb = "#52b73c";
const github = "#f4f4f4";
const lighthouse = "#1217bc";

const datasProject = [
  {
    title: "Kasa",
    url: {repo: "https://github.com/StefDev117/P6-Kasa.git"},
    img: "./images/logos_projets/P6.Kasa.svg",
    techlist: ["ReactJS", "SASS"],
    techlistImg: [
      {
        path: "./images/logo_technos/react.png",
        alt: "react JS",
        color: react,
      },
      {
        path: "./images/logo_technos/sass.png",
        alt: "SASS",
        color: sass,
      },
    ],
    screenshots: [
      { path: "./images/screenshots_portfolio/P6-Kasa/home.png", alt: "page hom Kasa" },
      { path: "./images/screenshots_portfolio/P6-Kasa/projects.png", alt: "page projet" },
      { path: "./images/screenshots_portfolio/P6-Kasa/projects 2.png", alt: "page projet déroulée" },
      { path: "./images/screenshots_portfolio/P6-Kasa/about.png", alt: "page about" },
    ],
    description: "Location d'hébergements",
  },
  {
    title: "Mon vieux grimoire",
    url: {repo: "https://github.com/StefDev117/Mon-vieux-grimoire_Back-Front.git"},
    img: "./images/logos_projets/pile-of-books.png",
    techlist: ["NodeJs", "Express", "MongoDb"],
    techlistImg: [
      {
        path: "./images/logo_technos/nodeJS.png",
        alt: "Node JS",
        color: nodeJs,
      },
      {
        path: "./images/logo_technos/mongo_db.png",
        alt: "Mongo Db",
        color: mongoDb,
      },
    ],
    screenshots: [
      {
        path: "./images/screenshots_portfolio/P7-Vieux grimoire/home books.png",
        alt: "page d'accueil",
      },
      {
        path: "./images/screenshots_portfolio/P7-Vieux grimoire/note et top livres.png",
        alt: "page description livre",
      },
      {
        path: "./images/screenshots_portfolio/P7-Vieux grimoire/error inscription.png",
        alt: "ajout d'un livre",
      },
      {
        path: "./images/screenshots_portfolio/P7-Vieux grimoire/ajout d'un livre.png",
        alt: "ajout d'un livre",
      },
    ],
    description: "API de création de livres",
  },
  {
    title: "Nina Carducci photographe",
    url: {repo: "https://github.com/StefDev117/nina-carducci-2.0", site: "https://stefdev117.github.io/P5-Nina-Carducci/"},
    img: "./images/logos_projets/photographe.png",
    techlist: ["Google Lighthouse", "Wave Tools", "Javascript"],
    techlistImg: [
      {
        path: "./images/logo_technos/lighthouse.png",
        alt: "Google Lighthouse",
        color: lighthouse,
      },
      {
        path: "./images/logo_technos/js.png",
        alt: "Javascript",
        color: javascript,
      },
    ],
    screenshots: [
      { path: "./images/screenshots_portfolio/P5-Nina Carducci/Screenshot_1.png", alt: "screen de la page 1" },
      { path: "./images/screenshots_portfolio/P5-Nina Carducci/Screenshot_1.png", alt: "screen de la page 2" },
      { path: "./images/screenshots_portfolio/P5-Nina Carducci/rapports intervention.png", alt: "rapport lighthouse avant/après" },
      { path: "./images/screenshots_portfolio/P5-Nina Carducci/rapport wave(accesibilite).png", alt: "rapport WAVE (accesibilité) avant/après" },
    ],
    description: "Optimisation d'un site de photographe",
  },
  {
    title: "Sophie Bluel",
    url: {repo: "https://github.com/StefDev117/P3-Sophie-Bluel.git"},
    img: "./images/logos_projets/sophie_bluel_photographe.png",
    techlist: ["Javascript"],
    techlistImg: [
      {
        path: "./images/logo_technos/js.png",
        alt: "Javascript",
        color: javascript,
      },
      { path: "./images/logo_technos/css.png", alt: "CSS", color: css },
    ],
    screenshots: [
      { path: "./images/screenshots_portfolio/P3-Sophie Bluel/home1.png", alt: "screenshot de la page d'accueil 1" },
      { path: "./images/screenshots_portfolio/P3-Sophie Bluel/home2.png", alt: "screenshot de la page d'accueil 2" },
      { path: "./images/screenshots_portfolio/P3-Sophie Bluel/galerie suppression.png", alt: "screen de la modal côté suppression" },
      { path: "./images/screenshots_portfolio/P3-Sophie Bluel/ajout photo.png", alt: "screen de la modal côté création" },
    ],
    description: "Application front qui gère des appels API",
  },
  {
    title: "Booki",
    url: {repo: "https://github.com/StefDev117/P2-openclassrooms-Booki" , site: "https://stefdev117.github.io/P2-openclassrooms-Booki/"},
    img: "./images/logos_projets/Booki.png",
    techlist: ["HTML", "CSS"],
    techlistImg: [
      { path: "./images/logo_technos/html.png", alt: "HTML", color: html },
      {
        path: "./images/logo_technos/css.png",
        alt: "CSS",
        color: css,
      },
    ],
    screenshots: [
      { path: "./images/screenshots_portfolio/P2-Booki/booki home 1.png", alt: "screen page d'accueil booki 1" },
      { path: "./images/screenshots_portfolio/P2-Booki/booki home 2.png", alt: "screen page d'accueil booki 2" },
    ],
    description: "Application de réservation d'hôtel",
  },
];
