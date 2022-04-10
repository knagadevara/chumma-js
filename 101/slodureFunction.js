'use strict';
function namie(LastName){
  LastName = LastName[0].toUpperCase() + LastName.slice(1).toLowerCase()
  console.log("Converting the name to userName");
    return function userName(FirstName){
      FirstName = FirstName[0].toUpperCase() + FirstName.slice(1).toLowerCase()
      console.log(`${FirstName}. ${LastName}`);
}
}
const nagadevara = namie("nagadevara")
nagadevara("karthik")
nagadevara("srinivas")
nagadevara("bharathi")
