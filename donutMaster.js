//javascript for donutMaster.html CodeFellows Foundations 1 Assignment 4
var TopPotShop = function(shopLoc, minCustPerHour, maxCustPerHour,
    avgDonutPerCust, businessHours) {
  this.shopLoc = shopLoc;
  this.min = minCustPerHour;
  this.max = maxCustPerHour;
  this.avg = avgDonutPerCust;
  this.hrs = businessHours;
  this.donutsPerHour = function() {
    return Math.round(Math.random() * (this.max - this.min + 1) +
    this.min) * this.avg;
  };
  this.donutsPerDay = function() {
    return Math.round(this.donutsPerHour() * this.hrs);
  };
};
//---------------------------------------------------------------------
var DonutMaster = function() {
  this.stores = [];
  this.addNewShop = function(shopLoc, minCustPerHour,
      maxCustPerHour, avgDonutPerCust, businessHours) {
    var newShop = new TopPotShop(shopLoc, minCustPerHour,
      maxCustPerHour, avgDonutPerCust, businessHours);
    this.stores.push(newShop);
    };

  this.generateReport = function() {
    for (var index = 0; index < this.stores.length; index++) {
      console.log("The " + this.stores[index].shopLoc + " location averages " +
      Math.round(this.stores[index].donutsPerHour()) + " donuts per hour and " +
      Math.round(this.stores[index].donutsPerDay()) + " donuts per day.");
    }
  };
};
//---------------------------------------------------------------------
var dm = new DonutMaster();

dm.addNewShop("Bellevue", 4, 49, 4, 10);
dm.addNewShop("Downtown", 8, 43, 4.5, 16);
dm.addNewShop("Capitol Hill", 4, 37, 2.00, 12);
dm.addNewShop("South Lake Union", 9, 12, 6.33, 12);
dm.addNewShop("Wedgewood",2, 28, 1.25, 10);
dm.addNewShop("Ballard", 8, 58, 3.75, 14);

dm.generateReport();





