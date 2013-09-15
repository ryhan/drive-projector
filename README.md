## Drive Projector

When running a big event, it's often useful to have a bunch of projectors displaying a cycling sequence of messages.
This tool lets event organizers centralize their messages into a Google Drive spreadsheet and instantly update the slides being shown on every display.
Setting up a display is as simple as pointing Chrome to a url and going into full-screen mode.

Questions? Bug [Ryhan](https://github.com/ryhan).

### Google Spreadsheet Setup

#### 1. Create your spreadsheet, and format it as follows.

- The cell in the first column, first row should be "background-color"
- The cell in the second column, first row should be "message".
- Pairs of (background color, message) should be entered into the subsequent rows.

Take a look at this [example spreadsheet](https://docs.google.com/spreadsheet/pub?key=0AucQr5RmPlQ-dGpDd0JmZ0NzRDdjMFBQbTVaMjJlMXc&output=html).

#### 2. Publish to the web, and then link your spreadsheet.

- Select "File" > "Publish to the web".
- Enable publishing all sheets, and make sure "Automatically republish when changes are made" is on.
- Copy the url under "Get a link to the published data", and paste it into the `config.url` field in `app.js`.

