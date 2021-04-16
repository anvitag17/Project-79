var pizzas = [
  "VEG SUPREME PIZZA",
  "DELUXE VEGGIE PIZZA",
  "VEG EXTRAVAGANZA PIZZA",
  "CHICKEN TANDOORI PIZZA",
  "PANEER TIKKA PIZZA",
];

function getmenu() {
  var menuListStr = "<ol>"; //start building the html string

  pizzas.sort();

  for (var i = 0; i < pizzas.length; i++) {
    menuListStr = menuListStr + "<li>";
    menuListStr = menuListStr + pizzas[i];
    menuListStr = menuListStr + "</li>";
  }
  menuListStr = menuListStr + "</ol>"; //completed building the html string

  //Get the empty menu div
  var emptyMenu = document.getElementById("empty_menu");

  emptyMenu.innerHTML = menuListStr; // fill in the menu div with html string

  if (emptyMenu.style.display === "block") {
    emptyMenu.style.display = "none";
    document.getElementById("menu_button").innerText = "Show Menu";
  } else {
    emptyMenu.style.display = "block";
    document.getElementById("menu_button").innerText = "Hide Menu";
  }
}


/*

  Build the following html code in the javascript code
  <span>
        <div class="pizzas">
            <img id="pizzaimage" src="images/pizzaImg.png">
            <h4>Veg Supreme Pizza</h4>
        </div>
        <div ...
  </span>
*/
function showRecommendedToppings() {

  var recoToppings = document.getElementById("pizza_recos");
  //clear the span if it exists before recreating the child nodes
  recoToppings.innerHTML = '';

  var span=document.createElement("span");
  recoToppings.appendChild(span);

  pizzas.sort(); 

  for (var i = 0; i < pizzas.length; i++) {

    //Create the pizzas div
    var pizzasDiv = document.createElement("div");
    pizzasDiv.className = "pizzas";
    span.appendChild(pizzasDiv);

    var img = document.createElement("img");
    img.setAttribute("id","pizzaimage");
    img.setAttribute("src","images/pizzaImg.png");
    pizzasDiv.appendChild(img);

    //Add the H4 element with pizza name in it
    var pizzaLabel = document.createElement("h4");
    pizzaLabel.innerText=pizzas[i];
    pizzasDiv.appendChild(pizzaLabel); //add the h4 element to recoToppings div
  }
}

  function additem() {
    var newrecommend = document.getElementById("add_item").value.toUpperCase();
    pizzas.push(newrecommend);
    showRecommendedToppings();
  }
