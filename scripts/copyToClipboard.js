const copyTxt = document.querySelectorAll(".copy-txt");

copyTxt.forEach(elCopy => {
    elCopy.addEventListener("click", () => copyMailFunc(elCopy))
});


function copyMailFunc(elem) {
  navigator.clipboard.writeText(elem.getAttribute("value"));
};


