var config = {

  // Slide duration (ms). Also defines how frequently we poll for updates.
  duration: 7000,

  // Publish URL
  url:  "https://docs.google.com/spreadsheet/pub?key=0AucQr5RmPlQ-dGpDd0JmZ0NzRDdjMFBQbTVaMjJlMXc&output=html",

  // Number of columns in the table
  table_width: 2

};

var model, slides;

$(document).ready(function(){

  // Automatically progress through slides.
  slides = new SlideSet();
  setInterval(function(){slides.next();}, config.duration);

  // Set up the Google spreadsheet.
  model = new GoogleSpreadsheet();
  model.url(config.url);
  model.setColumns(config.table_width);

  // Load a table into the slides (SlideSet).
  var queueSlides = function (table){
    _.map(table, function(entity){
      slides.queue(entity["message"], null, entity["background-color"]);
    });
  };

  // Fetch data from the spreadsheet, and use queueSlides to generate the slides.
  model.sync(queueSlides);

  // Poll for updates to the spreadsheet, and apply the needed changes.
  setInterval(function(){model.sync(undefined, function(newtable){
    slides.clearTable();
    queueSlides(newtable);
  })}, config.duration);

});