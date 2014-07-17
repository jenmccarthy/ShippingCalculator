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

var total = [];

$(document).ready(function(){
  $("button#add").click(function() {
    $(".package").last().after("<div class='package'>" +
                            "<div class='form-group'>" +
                              "<label for='origin-location'>Origin Location</label>" +
                              "<select class='form-control' id='origin-location'>" +
                                "<option>PDX</option>" +
                                "<option>LAX</option>" +
                                "<option>DEN</option>" +
                                "<option>CHI</option>" +
                                "<option>NYC</option>" +
                              "</select>" +
                            "</div>" +
                            "<div class='form-group'>" +
                              "<label for='destination'>Destination</label>" +
                              "<select class='form-control' id='destination'>" +
                                "<option>PDX</option>" +
                                "<option>LAX</option>" +
                                "<option>DEN</option>" +
                                "<option>CHI</option>" +
                                "<option>NYC</option>" +
                              "</select>" +
                            "</div>" +
                            "<div class='form-group'>" +
                              "<label for='weight'>Weight</label>" +
                              "<input type='text' class='form-control' id='weight'>" +
                            "</div>"+
                          "</div>");
  });

  $("form#calculator").submit(function(event) {
    event.preventDefault();

    $(".package").each(function() {
      //total = [];
      package.origin = $(this).find("select#origin-locator").val();
      package.destination = $(this).find("select#destination").val();
      package.weight = parseInt($(this).find("input#weight").val());

      // var result = package.cost();
      // package.total.push(package.cost());
      total.push(package.cost());
    })

    var price = 0;
    total.forEach(function(package) {
      price =  price + package;
    });

    console.log(package.total)
    console.log(total);
    console.log(price);

    $(".result").show();
    $("#cost").text(price);
    total = [];

  });
});



