var animalArray = [];
const animalTypes = {cat: "cat", dog: "dog", bird: "bird"};

var statusShow = "available";

function populateTab(tabName) {
  Object.keys(animalTypes).forEach(function(type){
    $(`#${type}List`).text("");
  });
  $("#homeList").text("");
  var currentTab = $("#"+tabName+"List");
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
    addCard(animal, currentTab);
  });
}

function Animal(name, species) {
  this.name = name;
  this.species = species;
  this.adopted = false;

  this.id = Animal.prototype.id++;

  this.picture = "img/kitten.jpg";
  this.age = 3;
  this.sex = "unknown";
  this.type = "unknown";
}

Animal.prototype.id = 0;

function animalSort(arr, propertyName, propertyValue) {
  var propertyName = propertyName.toString();
  var propertyValue = propertyValue.toString();
  var result = arr.filter(function(item){
    var isRight = item[propertyName].toString() === propertyValue;
    return isRight;
  });
  return result;
}

function getTestAnimals(){
  var animalsList = [];
  animalsList.push(new Animal("Pixel", animalTypes.cat));
  animalsList.push(new Animal("Fido", animalTypes.dog));
  animalsList.push(new Animal("Fluffy", animalTypes.dog));
  animalsList.push(new Animal("Pippin", animalTypes.dog));
  animalsList.push(new Animal("Kazoo", animalTypes.bird));
  animalsList.push(new Animal("Treble", animalTypes.bird));
  return animalsList;
}

function getCardHTML(animal){
  var output =
  `<div class="animal-card" id="animal-${animal.id}">
    <div class="card" name="front">
      <img src="${animal.picture}" alt="Picture of the animal" class="card-img-top">
      <div class="card-footer">
        <h3>${animal.name} | Age ${animal.age}</h3>
      </div>
    </div>
    <div class="card" name="back">
      <div class="card-body">
        <h5 class="card-title">About ${animal.name}</h5>
        <ul>
          <li>Age: ${animal.age}</li>
          <li>Sex: ${animal.sex}</li>
          <li>Type: ${animal.type}</li>
        </ul>
      </div>
      <div class="card-footer">
        <button type="button" name="button" class="btn btn-primary">Adopt ${animal.name}!</button>
      </div>
    </div>
  </div>`;
  return output;
}

function addCard(animal, parent){
  parent.append(getCardHTML(animal));

  var animalCard = $(`#animal-${animal.id}`);
  var front = animalCard.find(".card[name=front]");
  var back = animalCard.find(".card[name=back]");
  front.click(function(){
    $(this).fadeOut(function(){
      back.fadeIn();
    });
  });
  back.click(function(){
    $(this).fadeOut(function(){
      front.fadeIn();
    });
  });
}

$(function () {
  animalArray = getTestAnimals();
  $('#myTab li:last-child a').tab('show');
  var animalsList = getTestAnimals();

  $("a[data-toggle=tab]").on('shown.bs.tab', function(event){
    console.log("switching tabs");
    var tabName = $(this).prop("name");
    populateTab(tabName);
  });

  populateTab("home");

  $("#showPetForm").click(function(){
    $("#addNewPet").toggle();
  });

  $("#addNewPet").submit(function(event){
    event.preventDefault();
    var newPetName = $("#newPetName").val();
    var newPetSpecies = document.querySelector('input[name="petSpecies"]:checked').value;
    if (newPetName != '') {
      animalArray.push(new Animal(newPetName, newPetSpecies));
      populateTab("home");
    };
  });
});
