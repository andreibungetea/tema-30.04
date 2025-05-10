// Atunci cand vrei sa un buton / element sa face ceva odata apasat:
// 1. selectezi butonul in JS
// 2. adaugi event listner pe el
// 3. creezi functia care sa se execute pe click

const popoverTrigger = document.querySelector(".popover-trigger"); // 1.
const popoverContent = document.querySelector(".popover-content"); // 1)
// cand vrem sa facem legatura intre un el din html si js,
// selectam el din html si il punem in js printr-o const
const overlay = document.querySelector(".overlay"); 

const handleOpenPopover = () => { //3.
    popoverContent.style.display = "block"; // 2)
    overlay.style.display = "block"; //nu are importanta ordinea pt ca 
    // totul se intampla foarte rapid
}

const handleClosePopover = () => {
    popoverContent.style.display = "none";
    overlay.style.display = "none";
}
popoverTrigger.addEventListener("click", handleOpenPopover); // 2.
//string cu numele evenimentului "click" - ce anume sa faca; 
//numele functiei care se executa pe click
overlay.addEventListener("click", handleClosePopover);


// Atunci cand vrei sa schimbi o proprietate de css al unui element folosind js:
// 1) selectezi elementul in js, intr-o constanta
// 2) pui numele constantei urmat de 'style', iar apoi numele proprietatii scris in camelCase
// [constanta].style.[numeProprietateCss] = '[valoareProprietateCss]';

// Menu
const haburgerMenu = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector(".mobile-menu");

const handleOpenMenu = () => {
    mobileMenu.style.transform = "translateX(0)"; //notam numele proprietaii pe care vrem sa o 
    //modificam
    // overlay.style.display = "block"; de pus cu o culoare inchisa pe eventlisner pe noul menu
}

haburgerMenu.addEventListener("click", handleOpenMenu);