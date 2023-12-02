function Mobile(name, company) {
      this.name = name, 
      this.company = company 
}

let inputVALONE = new Mobile('Nokia 510', 'Mirosoft Nokia')

if(inputVALONE.hasOwnProperty('company')){
        console.log("True");
}else{
    console.log("False");
}