const accordionTitle = document.querySelector(".accordion-title");
const accordionContent = document.querySelector(".accordion-content");
const accordionOpenIcon = document.querySelector(".accordion-open-icon");
const accordionCloseIcon = document.querySelector(".accordion-close-icon");

const handleAccordionOpen = () => {
    // daca vrei sa modifici un element de css in js, il selectezi in js
    // 1.accordionContent.style.display = "block";
    // ca sa apara - cand apare paragraful folosim:
    // 2.accordionOpenIcon.style.display = "none";
    // 3.accordionCloseIcon.style.display = "inline"; //pastram inline pt de
    // default este inline  (in loc de block)
    accordionContent.classList.toggle("hide"); //1. - vreau sa apara
    accordionOpenIcon.classList.toggle("hide"); //2. - vreau sa dispara
    accordionCloseIcon.classList.toggle("hide"); //3. - vreau sa apara
};

accordionTitle.addEventListener("click", handleAccordionOpen);