const accordionTitles = document.querySelectorAll(".accordion-title");

const handleAccordionOpen = (e) => {
    
    let clickedButton; //gaseste functia care declanseaza click-ul

    if(e.target.tagName === "SPAN" || e.target.tagName === "IMG") {
        clickedButton = e.target.parentNode; //dc targetul este span sau img, merg mai
        // sus pe parinte si-i pun clickedButton, in caz contrat s-a dat click pe
        // intreg butonul 
    } else {
        clickedButton = e.target;
    }

    // -------- varianta cu atributul data -------
    // const id = clickedButton.getAtribute("data-accordion-id"); //de pe butonul apasat vreau sa 
    // // iau valoarea atributului id
    // const accordionItem = document.querySelector(
    //     `.accordion-item[data-accordion-id="${id}"]`
    // );
     // merg in pagina si caut clasa 
    // paragrafului   care are acelasi atribut ca si id

    // ---------- varianta cu parentNode
     const accordionItem = clickedButton.parentNode;
};
    const accordionContent = accordionItem.querySelector(".accordion-content");
    accordionContent.classList.toggle("hide");
        
    const accordionCloseIcon = accordionItem.querySelector(".accordion-close-icon");
    accordionCloseIcon.classList.toggle("hide");

    const accordionOpenIcon = accordionItem.querySelector(".accordion-open-icon");
    accordionOpenIcon.classList.toggle("hide");

// functie care se poate aplica in array-uri
// primeste ca parametru o alta  functie
accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener("click", handleAccordionOpen);
}); //executa functia pt fiecare element din array

