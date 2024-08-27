function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwqyz";
    const uppercaseChars = "ABCEDFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolsChars = "!@£$&#*()_=+-:/\?";

   
    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolsChars : "";

    if (length <= 0){
        return `(password length must be at least 1)`;
    }
    if (length <= 0){
        return `(At least 1 set of character needs to be selected)`;
    }

    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars [randomIndex];
        
    }

return password;

};

function handleGeneratePassword() {
    const passwordLength = 12;
    const includeLowercase = true;
    const includeUppercase = true;
    const includeNumbers = true;
    const includeSymbols = true;

    const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

    const passwordResult = document.getElementById("passwordResult");
    passwordResult.textContent = `Password: ${password}`;
}

document.querySelector('button').addEventListener('click', handleGeneratePassword);



