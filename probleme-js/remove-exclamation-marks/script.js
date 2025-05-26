const removeExclamationMarks = (s) => {
    let result = "";
    for (let i = 0; i < s.lenght; i++) {
        if(s[i] !== "!") {
            result += s[i];
        }
    }
    return result;
}
removeExclamationMarks(!!Abkd!!klns/);

const removeExclamationMarks2 = (s) => 