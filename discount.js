document.getElementById('dicount-btn').addEventListener('click', function(){
    // get user price
    const userPrice = getInputValueById('user-price');
    if(isNaN(userPrice)){
        return;
    }
    // get user coupan code
    const userCoupanInput = document.getElementById('user-coupan');
    const userCoupan = userCoupanInput.value;
    userCoupanInput.value = '';
    const discountInfo = document.getElementById('discount-info');
    // discount price by user coupan code comparission
    if(userCoupan === 'DISC30'){
        const userOrginalPrice = (userPrice - (userPrice * 30)/100);
        // create element
        discountInfo.innerText = 'Please Pay: ' + userOrginalPrice + ' Taka';
    }else{
        // set the discount Price
        discountInfo.innerText = 'Please Pay: ' + userPrice + ' Taka';
    }

})