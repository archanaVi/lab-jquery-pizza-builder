/*

// Write your Pizza Builder JavaScript in this file.

// Iteration 1: Add and remove toppings
$ (".btn-pepperonni").click(function () {
    $(".pep").toggle();
});

$ (".btn-green-peppers").click(function () {
    $(".green-pepper").toggle();
});

$ (".btn-mushrooms").click(function () {
    $(".mushroom").toggle();
});

//Iteration 2: Sauce and crust options

$ (".btn-sauce").click(function () {
    $(".sauce").toggle();
});

$ (".btn-crust").click(function () {
    $(".crust").toggle();
});


//Iteration 3: Change the buttons' state

$ (".btn-pepperonni").click(function () {
    $(".btn-pepperonni").toggleClass("active");
});

$ (".btn-green-peppers").click(function () {
    $(".btn-green-peppers").toggleClass("active");
});

$ (".btn-mushrooms").click(function () {
    $(".btn-mushrooms").toggleClass("active");
});


//$(document).ready(function())

*/

//Pour attribuer des valeurs par défaut aux boutons

function defaultValue () {
     //Buttons par défaut
    $('.btn-crust, .btn-sauce').removeClass('active');

    //Ingredients par défaut
    $('.crust').removeClass('crust-gluten-free');
    $('.crust').find('.sauce').removeClass('sauce-white'); //dans html on veut dans class crust on enleve sauce white

    // Ingredients list
    $('.panel.price').find('ul').find('li:contains("sauce")').toggle();
    $('.panel.price').find('ul').find('li:contains("crust")').toggle();
};


//Pepperoni button and design
$(".btn-pepperonni").click(function() {
    $(".btn-pepperonni").toggleClass("active");
    $(".pep").toggle();
    $(".panel li:contains('pepperonni')").toggle(); //pour ajouter une ligne sur la liste à droite quand on va cliquer
});

//Mushroom button and design
$(".btn-mushrooms").click(function() {
    $(".btn-mushrooms").toggleClass("active");
    $(".mushroom").toggle();
    $(".panel li:contains('mushrooms')").toggle();
});

//Green pepper button and design
$(".btn-green-peppers").click(function() {
    $(".btn-green-peppers").toggleClass("active");
    $(".green-pepper").toggle();
    $(".panel li:contains('green')").toggle();
});

//Add dans la liste le gluten free 
$(".btn-crust").click(function() {
    $(".btn-crust").toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    $(".price li:contains('crust')").toggle();
});

//Add dans la liste white sauce or regular sauce
$(".btn-sauce").click(function() {
    $(".btn-sauce").toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
    $(".price li:contains('sauce')").toggle();
});

//Update Price
function updatePrice (classStatus) {
    var total = 10;
    for (var i=0;i<classStatus.length;i++){
        if(classStatus[i].name.hasClass("active")){
            total +=
        }
    }
}



$(document).ready(function(){
    defaultValue();
});