// Makes GoogleSpreadsheet (spreadsheet.js) more useful.

$(document).ready(function(){

  /*
   * Set the number of columns in a table.
   */
  GoogleSpreadsheet.prototype.setColumns = function(columns){
    this.columns = columns;
  }

  /*
   * @given cb callback for current spreadsheet data.
   * @given haschangedCB callback for any changes to spreadsheet data.
   */
  GoogleSpreadsheet.prototype.sync = function(cb, haschangedCB){

    var self = this;

    var datahandler = function(result){

      if (typeof self.table == "undefined"){
        self.table = [ ];
      }

      var oldtablehash = JSON.stringify(self.table);

      self.table = [ ];
      var keys = _.first(result.data, self.columns),
          data = _.rest( result.data, self.columns),
          i = 0;

      while (i < data.length){
        var row = {};
        for (var j=0; j< self.columns; j++){
          if (i < data.length){
            row[keys[j]] = data[i];
          }else{
            row[keys[j]] = null;
          }
          i++;
        }
        self.table.push(row);
      }

      if (typeof cb != "undefined" && cb != null){
        cb(self.table);
      }

      if (oldtablehash != JSON.stringify(self.table)){
        if (typeof haschangedCB != "undefined" && haschangedCB != null){
          haschangedCB(self.table);
        }
      }
    };

    this.load(datahandler);

  };

});
