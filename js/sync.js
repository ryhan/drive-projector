// Makes GoogleSpreadsheet (spreadsheet.js) more useful.

$(document).ready(function(){

  GoogleSpreadsheet.prototype.setColumns = function(columns){
    this.columns = columns;
  }

  // success is a callback that returns the table contained with the spreadsheet.
  // onchange is a callback that returns a table when there are changes.
  GoogleSpreadsheet.prototype.sync = function(success, onchange){

    var self = this;

    // Make sure our callbacks are defined.
    success  = success  || function(){};
    onchange = onchange || function(){};

    // Callback called when we've loaded data and need to turn it into a table.
    var datahandler = function(result){

      var oldtable = JSON.stringify(self.table),
          keys = _.first(result.data, self.columns),
          data = _.rest( result.data, self.columns);

      // Iterate through the data array, populating self.table as we move along.
      self.table = [ ];
      var i = 0;
      while (i < data.length){
        var row = {};
        for (var j=0; j< self.columns; j++){
          row[keys[j]] = (i < data.length) ? data[i] : null;
          i++;
        }
        self.table.push(row);
      }

      // Once we've successfully processed the data array,
      // return the table in the success callback.
      success(self.table);

      // If there are differences between the new and old tables,
      // call the onchange callback and supply the updated table.
      if (oldtable != JSON.stringify(self.table)){
        onchange(self.table);
      }

    };

    // Attempt to fetch data about the current spreadsheet.
    this.load(datahandler);

  };

});
