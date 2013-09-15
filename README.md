living-projector
================

Displays a cycling sequence of slides in the browser based on data in a Google Drive spreadsheet. Useful for remotely managing (and updating) messages across multiple projectors controlled by independent computers. Intended to be used with Chrome in presentation mode.

### Google Drive Setup

#### 1. Create your spreadsheet, and format it as follows.

- The cell in the first column, first row should be "background-color"
- The cell in the second column, first row should be "message".
- Pairs of (background color, message) should be entered into the subsequent rows.

Take a look at this [example spreadsheet](https://docs.google.com/spreadsheet/pub?key=0AucQr5RmPlQ-dGpDd0JmZ0NzRDdjMFBQbTVaMjJlMXc&output=html).

#### 2. Publish to the web, and then link your spreadsheet.

- Select "File" > "Publish to the web".
- Enable publishing all sheets, and make sure "Automatically republish when changes are made" is on.
- Copy the url under "Get a link to the published data", and paste it into the `config.url` field in `js/app.js`.
