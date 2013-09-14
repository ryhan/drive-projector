var model, slides;

function queueSlides (table){
  _.map(table, function(entity){
    console.log(entity);
    slides.queue(entity["message"], null, entity["background-color"]);
  });
}

$(document).ready(function(){

  // Auto Advance Slides
  slides = new SlideSet();
  setInterval(function(){slides.next();}, 7000);

  // Set up our data model
  model = new GoogleSpreadsheet();
  model.url("https://docs.google.com/spreadsheet/pub?key=0AucQr5RmPlQ-dGpDd0JmZ0NzRDdjMFBQbTVaMjJlMXc&output=html");
  model.setColumns(2);

  // Sync our model with our slides
  model.sync(queueSlides);

  // Listen for changes to the model.
  setInterval(function(){model.sync(undefined, function(newtable){
    console.log("Change detected - updating slides");
    slides.clearTable();
    queueSlides(newtable);
  })}, 7000);

});
