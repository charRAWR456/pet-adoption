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

const animalTypes = {cat: "cat", dog: "dog", bird: "bird"};

function animalSort(arr, propertyName, propertyValue) {
  propertyName = propertyName.toString();
  propertyValue = propertyValue.toString();

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
      <img src="${animal.image} alt="Picture of the animal" class="card-img-top">
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

$(function () {
  $(".card[name=back]").hide();
  $('#myTab li:last-child a').tab('show');
  var animalsList = getTestAnimals();
  console.log(getCardHTML(animalsList[0]));
  console.log("hi");
  $("#animal-0").find(".card[name=front]").click(function(){
    $(this).fadeOut(function(){
      $("#animal-0").find(".card[name=back]").fadeIn();
    });
  });

  $("#animal-0").find(".card[name=back]").click(function(){
    $(this).fadeOut(function(){
      $("#animal-0").find(".card[name=front]").fadeIn();
    })
  });

});
