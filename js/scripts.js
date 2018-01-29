var animalArray = [
  new Animal("Fido", "dog"),
  new Animal("Poochy", "dog"),
  new Animal("Bob", "dog"),
  new Animal("Fluffums", "cat"),
  new Animal("Feisty", "cat"),
  new Animal("Crackerz", "bird"),
  new Animal("Ted", "bird"),
  new Animal("Adoptee", "bird"),
  new Animal("Adoptee2ElectricBoogaloo", "bird")
];

var statusShow = "available";

animalArray[7].adopted = true;
animalArray[8].adopted = true;

function populateTab(tabName) {
  $(tabName+"List").text("");
  var animals;
  if (tabName === "home") {
    animals = animalArray;
  }
  else {
    animals = animalSort(animalArray, "species", tabName);
  };

  if (statusShow === "available") {
    animals = animalSort(animals, "adopted", false);
  } else if (statusShow === "adopted") {
    animals = animalSort(animals, "adopted", true);
  };

  animals.forEach(function(animal){
    $("#"+tabName+"List").append("<li>" + animal.name + "</li>");
  });
}

function Animal(name, species) {
  this.name = name;
  this.species = species;
  this.adopted = false;
}

function animalSort(arr, propertyName, propertyValue) {
  var propertyName = propertyName.toString();
  var propertyValue = propertyValue.toString();
  var result = arr.filter(function(item){
    var isRight = item[propertyName].toString() === propertyValue;
    return isRight;
  });
  return result;
}


$(function () {

  $('#myTab li:last-child a').tab('show');

  populateTab("home");
  populateTab("cat");
  populateTab("dog");
  populateTab("bird");

})
