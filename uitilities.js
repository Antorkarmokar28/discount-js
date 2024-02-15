function getInputValueById(inputId){
    const getInputValue = document.getElementById(inputId);
    const getInputValueString = getInputValue.value;
    const inputValue = parseFloat(getInputValueString);
    getInputValue.value = '';
    return inputValue;
}