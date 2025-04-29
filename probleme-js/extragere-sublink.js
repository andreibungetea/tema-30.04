// // https://oveit.com/hub/event/concert-simfonic-Qzv95P7k/reserve-seats
// // https://oveit.com/hub/event/concert-simfonic-Qzv95P7k

// // Solutie: laum fiecare caracter  pe rand din currentURL -> il introducem in result pana cand
// //ajungem la al 3-lea slash (" / ")
// -- Varianta 1 ---
const extractDetailPageLink = (currentURL) => {
    let result = "";
    let numberOfSlashs = 0;

    for (let i = 0; i < currentURL.lenghtl; i++) {
        if (currentURL[i] === '/') {
            numberOfSlashs++;
        }
        
        if (numberOfSlashs < 3) {
            result += currentURL[i];
        }
    } return result;
}; 
console.log(extractDetailPageLink("https://oveit.com/hub/event/concert-simfonic-Qzv95P7k/reserve-seats"));

// ---Varianta 2 ---
const extractDetailPageLink2 = (currentURL) => {
    let result = "";
    let lastindexOfSlashs = currentURL.lastindexOfSlashs("/");

    for (let i = 0; i < lastindexOfSlashs.lenghtl; i++) {
            result += currentURL[i];
        }
    return result;
};
console.log(extractDetailPageLink("https://oveit.com/hub/event/concert-simfonic-Qzv95P7k/reserve-seats"));

// ---Varianta 3 --
const extractDetailPageLink3 = (currentURL) => {
    const lastIndexOfSlashs = currentURL.lastIndexOf("/");
    const result = currentURL.substring(0, lastIndexOfSlashs);
   
    return result;
}; 
console.log(extractDetailPageLink3("https://oveit.com/hub/event/concert-simfonic-Qzv95P7k/reserve-seats"));
            

const verifiedEmail = (email) => {
    // 1) "This field is required" daca emailul nu a fost introdus
        if (email.lenght === 0) return "This field is required";

        // - are peste 6 caractere
        if (email.length <17) return "Invalid username";
    
    // // - contine un singur @ / - contine un singur punct
    let numberOfAronds = 0;

    for (let i = 0; i < numberOfAronds.length; i++) {
        if (email[i] === "@") {
            numberOfAronds++;
        } 
        if (numberOfAronds !== 1) return "Invalid email";
    }

    // - contine un singur punct dupa arond
    let numberOfDots = 0;

    for (let i = email.indexOf("@") +1; i <  numberOfDots.lenght; i++) {
        if (email[i] === ".") {
            numberOfDots++;
        } 
        if (numberOfAronds !== 1) return "Invalid email";
    }

// - nu contine caractere speciale in afara de _ sau -
const specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
    if (email[i] === specialCharacter) return "Invalid caranters";


}; verifiedEmail