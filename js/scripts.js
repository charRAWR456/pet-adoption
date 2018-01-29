function Animal(name, species) {
  this.name = name;
  this.species = species;
  this.adopted = false;
}

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
  return string;
}

$(function () {
  $(".card[name=back]").hide();
  $('#myTab li:last-child a').tab('show');
  var animalsList = getTestAnimals();

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
