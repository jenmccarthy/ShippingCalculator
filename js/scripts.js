var cities = ["PDX", "LAX", "DEN", "CHI", "NYC"];

var package = {
  origin: "",
  destination: "",
  distance: function () {
    var packageOrigin = cities.indexOf(this.origin);
    var packageDestination = cities.indexOf(this.destination);
    return Math.abs(packageOrigin - packageDestination);
  },
  weight: 0,
  weightCost: function () {
    if (this.weight <= 10) {
      return 10;
    } else if (this.weight > 10 && this.weight <= 20) {
      return 20;
    } else if (this.weight >20 && this.weight <=  50) {
      return 50
    } else if (this.weight >50) {
      return 100;
    }
  },
  cost: function() {
    return this.weightCost() * this.distance();
  }
};

package.origin = "PDX";
package.destination = "NYC";
package.weight = 10;

console.log(package.cost());


$(document).ready(function(){
  $("form#calculator").submit(function(event)) {
    event.preventDefault;
  $("select#form-control")




  }



});



