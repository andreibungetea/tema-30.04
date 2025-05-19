const accordionTitles = document.querySelectorAll(".accordion-title");

const handleAccordionOpen = (e) => {
    let clickedButton;
    if (e.target.tagName === "SPAN" || e.target.tagName === "IMG") {
        clickedButton = e.target.parentNode; 
    } else {
        clickedButton = e.target;
    }

// --- varianta cu atributul data ---
    // const id = clickedButton.getAttribute(".data-accordion-id");
    // const accordionItem = document.querySelector(
    //     `accordionItem[data-accordion-id=${id}]`);

// --- varianta cu parentNode
const accordionItem = clickedButton.parentNode; 
//punem parintele butonului apasat

     const accordionContent = accordionItem.querySelector(".accordion-content");
    accordionContent.classList.toggle("hide");

    const accordionCloseIcon = accordionItem.querySelector(".accordion-close-icon");
    accordionCloseIcon.classList.toggle("hide");

    const accordionOpenIcon = accordionItem.querySelector(".accordion-open-icon");
    accordionOpenIcon.classList.toggle("hide");
}

accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener("click", handleAccordionOpen);
})

