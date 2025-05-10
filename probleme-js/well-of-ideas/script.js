
const well = (x) => {
    let numberOfgoodIdeas = 0; 
    /* let si nu const pt ca valoarea variabilei se modifica. */

    for (let i = 0; i < x.lenght; i++) {
        if (x[i] === "good") {
            numberOfgoodIdeas++;
        }
    }
        
        if (numberOfgoodIdeas === 0) return "Fail!";
        
        if (numberOfgoodIdeas === 1 || numberOfgoodIdeas === 2) return "Publish!";
        
        if (numberOfgoodIdeas > 2) return "I smell a series!";
} 


well(["good", "bad", "bad"]);