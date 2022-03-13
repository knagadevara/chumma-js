let MarkWeight = 78;
let MarkHeight = 1.69;
let JohnWeight = 92;
let JohnHeight = 1.95;

// Decleration
function calculate_bmi(height, weight)
{   
    bmi = weight / (height * height)
    return bmi
}

//One-line Arrow Function(Use them only in a case if you have one statement to process.).
bmi = (height, weight) => weight / (height * height);
// Calling arrow_function
myBmi = bmi(5.7 , 62)


function compare_bmi(bmi1, bmi2)
{     
    if ( bmi1 == bmi2 )
    {
        console.log(`${bmi1} is equal to ${bmi2}`);
    }
    else if ( bmi1 > bmi2 )
    {
        console.log(`${bmi1} is greater than ${bmi2}`);
    }
    else
    {
        console.log(`${bmi1} is less than ${bmi2}`);
    }
}


JohnBMI = calculate_bmi(JohnHeight, JohnWeight)
MarkBMI = calculate_bmi(MarkHeight, MarkWeight)
console.log("John's BMI: "+ JohnBMI)
console.log("Mark's BMI: "+ MarkBMI)
compare_bmi(MarkBMI, JohnBMI)

