function Animal(name, species) {
  this.name = name;
  this.species = species;
  this.adopted = false;
}

function animalSort(arr, propertyName, propertyValue) {
  propertyName = propertyName.toString();
  propertyValue = propertyValue.toString();

  var result = arr.filter(function(item){
    var isRight = item[propertyName].toString() === propertyValue;
    return isRight;
  });

  return result;
}
