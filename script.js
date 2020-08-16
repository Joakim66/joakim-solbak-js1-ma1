// question 1

const cat = {
  complain : function(){
    console.log("Meow!")
  }
};

cat.complain()

// question 2

var heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// question 3

heading.style.fontSize = "2em";

// question 4

heading.classList.add("subheading");

// question 5

var paragraphs = document.querySelectorAll("p");
let i = 0;

for(i = 0; i < 3; i++){
  paragraphs[i].style.color = "red";
}

while (i < paragraphs.length){
  paragraphs[i].style.color = "red";
  i++
}
// (not sure which type of loop is better here)

// question 6

var resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.background = "yellow";

// question 7

myFunction = function(list){
  i = 0;
  for(i = 0; i < arguments.length; i++){
    console.log(list)
  }
}

myFunction("cats")

// question 8

const catList = [
  {
  name: "Blob",
  age: 10,
  },
  {
  name: "Harold"
  },
  {
  name: "Blurt",
  age: 21,
  }
  ]

createCats = function(cats){
  let i = 0;
  let catListHTML = "";
  for(i of cats){
    if(i.age === undefined){
      catListHTML = catListHTML + ("<div>" + "<h5>" + i.name + "</h5>" + "<p>" + "Age unknown" + "</p>" + "</div>")
    }
    else{
      catListHTML = catListHTML + ("<div>" + "<h5>" + i.name + "</h5>" + "<p>" + i.age + "</p>" + "</div>")
    }
  }
  return(catListHTML)
}

const newHTML = createCats(catList)

const container = document.querySelector(".cat-container");

container.innerHTML = newHTML