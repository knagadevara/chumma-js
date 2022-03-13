'use strict';

function print_bill(bill_value, tax_bracket){
    const bill = bill_value * 1.00
    const tip_percentile = Number(bill <= 300.00 && bill >= 50.00 ? "15" : "20");
    const tip_charged = (bill) * (tip_percentile / 100);
    const tax_charged = (bill) * (tax_bracket / 100);
    console.log(`Amount Charged:\t\t${bill}\n
    Tax Charged:\t\t${tax_bracket}%\t->\t${tax_charged}\n
    Tip Charged:\t\t${tip_percentile}%\t->\t${tip_charged}\n
    Total:\t\t\t${bill + tip_charged + tax_charged}`);
}

print_bill(2000, 7.5)