function regex(){
    let str1 = "Edyoda is a online learning Edyoda platform Edyoda";
    let regex = /Edyoda/g;
    let outputstr = str1.match(regex);

    console.log("Found Edyoda " + outputstr.length);
}

regex();

function regex1(){
    let str1 = "Jayesh Vyas is a Mechanical Engineer Mechanical";
    console.log("before Modification",str1);
    let regex = new RegExp("Mechanical","g");
    let newStr = "Software";
    let outputstr = str1.replace(regex,newStr);
    console.log("After Modification",outputstr);

}
regex1();

function regex2(){
    let str1 = "edyoda is the online teaching platform Edyoda"
    let  regex = /edyoda/gi;
    let outputstr = str1.match(regex);

    console.log(outputstr);
}

regex2();

function regex3(){
   let str1 = "Jayesh vyas is a software enginner"
   let pattern = /[a]/g;
   let outputstr = str1.match(pattern);

   console.log(outputstr);

   let text = "123456789";
   let pat = /[1-5]/g;
   let res = text.match(pat);
   console.log(res);

    // let str1 = `edyoda vyas is reaching at edyoda
    // edyoda
    // edyoda`;

    // let regex = /^edyoda/m;
    // let outputstr = str1.match(regex);
    // console.log(outputstr);
}
regex3();