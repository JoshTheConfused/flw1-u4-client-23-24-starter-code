console.log('hi');

let heading = document.querySelector("h1");

heading.addEventListener("click", function(){
    heading.style.color = 'green';
    heading.innerText = 'Ready to Code';
});