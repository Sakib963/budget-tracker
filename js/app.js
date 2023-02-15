// Live Link: https://ubiquitous-croquembouche-a27ad0.netlify.app/
// Fetching data from input field
function getInputValue(elementId)
{
    const field = document.getElementById(elementId);
    const value = parseFloat(field.value);
    return value;
}

// Fetching data from text field
function getTextValue(elementId)
{
    const field = document.getElementById(elementId);
    const value = parseFloat(field.innerText);
    return value;
}

// Set Text to Text Field
function setText(elementId, value)
{
    document.getElementById(elementId).innerText = value;
    return;
}

// Calculating Total Expense
function calculateExpense(foodAmount, rentAmount, clothesAmount){
    return foodAmount+rentAmount+clothesAmount;
}

// Calculate Button Event Handler
document.getElementById('calculate-btn').addEventListener('click', function(){
    const incomeAmount = getInputValue('income-input-field');
    const foodAmount = getInputValue('food-input-field');
    const rentAmount = getInputValue('rent-input-field');
    const clothesAmount = getInputValue('clothes-input-field');
    if(isNaN(incomeAmount) || incomeAmount < 0 || isNaN(foodAmount) || foodAmount < 0 || isNaN(rentAmount) || rentAmount < 0 || isNaN(clothesAmount) || clothesAmount < 0)
    {
        alert('Please Enter Valid Number')
        document.getElementById('income-input-field').value = '';
        document.getElementById('food-input-field').value = '';
        document.getElementById('rent-input-field').value = '';
        document.getElementById('clothes-input-field').value = '';
    }
    else
    {
        const totalExpense = calculateExpense(foodAmount, rentAmount, clothesAmount)
        setText('total-expense-text', totalExpense);

        const balance = incomeAmount - totalExpense;
        setText('balance-text', balance)

        if(totalExpense > incomeAmount)
        {
            alert('Dhaar neya baad de vai, negative Income e gesos');
            return;
        }

    }
})

// Finding Percentage
function percentage(num, per)
{
  return (num/100)*per;
}

// Save Button Event Handler
document.getElementById('save-btn').addEventListener('click', function(){
    const savePercentage = getInputValue('save-input-field');
    const incomeAmount = getInputValue('income-input-field');
    const saveAmount = percentage(incomeAmount, savePercentage);
    const balance = getTextValue('balance-text');

    if(isNaN(savePercentage) || savePercentage < 0 || isNaN(incomeAmount) || incomeAmount < 0 || isNaN(balance))
    {
        alert('Please Enter Valid Number or try to calculate expense first')
        return;
    }
    else
    {
        // console.log(saveAmount, balance)
        if(savePercentage > 100)
        {
            alert('You can not save more than 100%');
            return;
        }
        else if(saveAmount > balance)
        {
            alert('Bro you can not save money when you dont have money');
            return;
        }
        else
        {
            setText('save-text', saveAmount);
            const remainBalance = balance - saveAmount;
            setText('remaining-text', remainBalance);
        }

    }
})