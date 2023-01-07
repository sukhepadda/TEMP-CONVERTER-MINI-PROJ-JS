// console.log("test");

const tempCalculator = () => {
    let userVal = document.getElementById("userVal").value;
    // console.log(userVal);
    let selOption = document.getElementById("selOption").value;
    // console.log(selOption);

    if(selOption == "cels"){
        let farToCel = Math.round((userVal -32) * 5/9);
        // console.log(ferToCel);
        document.getElementById("resultDiv").innerHTML = `= ${farToCel}&#xb0; Celcius`;
    }else{
        let celToFar = Math.round((userVal * 9/5) + 32);
        // console.log(celToFer);
        document.getElementById("resultDiv").innerHTML = `= ${celToFar}&#xb0; Ferhenheight`;
    }
}
