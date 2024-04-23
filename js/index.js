function navToggle() {
  document.getElementById("headerUl").classList.toggle("_active");
  document.getElementById("headerBackdrop").classList.toggle("_active");
}

// var projects = document.querySelector("projects");
// var requestURL = "./project.json";
// var request = new XMLHttpRequest();
// request.open("GET", requestURL);

// request.responseType = "json";
// request.send();

// request.onload = function () {
//   var superHeroes = request.response;
//   populateProjects(superHeroes);
//   // showHeroes(superHeroes);
// };

// function populateProjects(jsonObj) {
//   var projects = document.querySelector("projects");
//   var img = document.createElement("img");
//   img.src = './img/projects/@@img.jpg';
//   projects.appendChild(img);

//   var myPara = document.createElement("p");
//   myPara.textContent =
//     "Hometown: " + jsonObj["homeTown"] + " // Formed: " + jsonObj["formed"];
//     projects.appendChild(myPara);
// }

// function showHeroes(jsonObj) {
//   var projects = document.querySelector("projects");
//   var heroes = jsonObj["members"];

//   for (var i = 0; i < heroes.length; i++) {
//     var myArticle = document.createElement("article");
//     var myH2 = document.createElement("h2");
//     var myPara1 = document.createElement("p");
//     var myPara2 = document.createElement("p");
//     var myPara3 = document.createElement("p");
//     var myList = document.createElement("ul");

//     myH2.textContent = heroes[i].name;
//     myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
//     myPara2.textContent = "Age: " + heroes[i].age;
//     myPara3.textContent = "Superpowers:";

//     var superPowers = heroes[i].powers;
//     for (var j = 0; j < superPowers.length; j++) {
//       var listItem = document.createElement("li");
//       listItem.textContent = superPowers[j];
//       myList.appendChild(listItem);
//     }

//     myArticle.appendChild(myH2);
//     myArticle.appendChild(myPara1);
//     myArticle.appendChild(myPara2);
//     myArticle.appendChild(myPara3);
//     myArticle.appendChild(myList);

//     projects.appendChild(myArticle);
//   }
// }
