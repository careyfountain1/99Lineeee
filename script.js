document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

var friends = ["John", "Ted", "Ralph", "Post Malone", "Patrick Ewing"];

document.getElementById("myBtn").addEventListener("click", function(){
for (let i = 0; i < friends.length; i++) {
    let div = document.createElement("div");//creates div in the document
    document.body.appendChild(div);//adding div to the body of the html doc
    div.className = "friends"; //creating a class name in the div in the html doc
    let h3 = document.createElement("h3"); //creating an h3 element
    div.appendChild(h3); //adding the h3 element in the div
    let text = document.createTextNode(`${friends[i]} :`); //adding the "friends name" text to the html doc
    h3.appendChild(text); //adding the "friends name" text to the h3 element


    for (let j = 99; j > 0; j--) {
        if (j === 2) {
            let p = document.createElement("p");
            div.appendChild(p);
            let pText = document.createTextNode(`${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${j - 1} line of code in the file`);
            p.appendChild(pText);
        }else if(j === 1) {
            let p = document.createElement("p");
            div.appendChild(p);
            let pText = document.createTextNode(`${j} line of code in the file, ${j} line of code; ${friends[i]} strikes out, clears it all out, no more lines of code in the file`);
            p.appendChild(pText);
        }else {
            let p = document.createElement("p");
            div.appendChild(p);
            let pText = document.createTextNode(`${j} line of code in the file, ${j} line of code; ${friends[i]} strikes one out, clears it all out, ${j - 1} more lines of code in the file`);
            p.appendChild(pText);
        }
    }
}
})
});