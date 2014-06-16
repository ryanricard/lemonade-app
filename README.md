# Let's build an app

So you have a cool idea for an app, but don't know where to start?  Sometimes you just need to a good example.  

This repository contains instructions and source code for a simple web app that provides today's location of a fictitious lemonade stand business.  Follow the steps to build your own version of the app.  Then find out how to really make your app awesome.

## Prerequisites

1. A **Mac** (running OSX 10.8 or better) or a **PC** (running Windows 7 or better)
1. Admin rights on your Mac or PC
1. [Install Google Chrome](https://www.google.com/intl/en/chrome/browser/)
1. [Install Node.js](http://nodejs.org/download/)
1. [Install Sublime Text 2](http://www.sublimetext.com/2) (any decent text editor will do)

## Steps

1. Open a command prompt

    *Mac*: Run the **Terminal** app

    *Windows*: Start > Run > `cmd`

1. In the command prompt, create the app directory

    *Mac*
    ```
    cd ~/Documents
    mkdir lemonade-app
    cd lemonade-app
    ```

    *Windows*
    ```
    cd %USERPROFILE%\Documents
    mkdir lemonade-app
    cd lemonade-app
    ```

1. Initialize the Node app

    ```
    npm init
    ```

    Accept all defaults in the wizard except `entry point`, which should be `web.js`:

    ```
    entry point: (index.js) web.js
    ```

1. Install Express.js

    ```
    npm install express@3.5 --save
    ```

1. Install Google Spreadsheets library

    ```
    npm install google-spreadsheet@0.2 --save
    ```

1. Run **Sublime Text 2** and open the project directory

    *Mac*: *File* menu > *Open...* > (browse to above directory)

    *Windows*: *File* menu > *Open Folder...* > (browse to above directory)

1. Create the `public` subdirectory for our static content

    ```
    mkdir public
    ```

1. Create empty code files to go into the project

    *Mac*
    ```
    touch web.js
    touch public/index.html
    ```

    *Windows*
    ```
    type NUL > web.js
    type NUL > public\index.html
    ```

1. Open each of the above files in **Sublime** and copy/paste their associated content from the following sources:

    [/web.js](/web.js)

    [/public/index.html](/public/index.html)

    **IMPORTANT**: Be sure to save the changes to the files (*File* > *Save*)

1. Start your app

    ```
    node web.js
    ```

    You should see output that looks like this:

    ```
    Listening on 5001
    ```

1. View your app in your browser

    [http://localhost:5001](http://localhost:5001)

## What's going on?

* The [web.js](/web.js) file is the only server-side code (running in Node.js), and it's basically serving up static client-side content out of the `public` directory as well as a simple API endpoint for the lemonade stand location.

* The API endpoint is `/api/location` and returns the current lemonade stand location, which is obtained by consuming a published Google Spreadsheet by calling the [Google Spreadsheets API](https://developers.google.com/google-apps/spreadsheets/) via a very handy Node.js library called [google-spreadsheet](https://github.com/theoephraim/node-google-spreadsheet).

* The published version of the Google Spreadsheet consumed by the endpoint can be [seen here](https://docs.google.com/spreadsheets/d/1MxOkAmSITKl6dKSQjkUkU72UcXPykTfn2Eae5BsL5pA/pubhtml).

* The [public/index.html](/public/index.html) file is essentially the entire client-side app.  The HTML in the page provides the layout, the `<style>` block provides the CSS styling.  The real magic happens in `<script>` block that contains the client-side JavaScript.

* When the page first loads, that JavaScript code makes an AJAX call to the API endpoint to get today's location of the stand.

* The page then renders a [Google Maps](https://developers.google.com/maps/) object centered on the location returned by the API and creates an associated [Marker](https://developers.google.com/maps/documentation/javascript/reference?csw=1#Marker) and [InfoWindow](https://developers.google.com/maps/documentation/javascript/reference?csw=1#InfoWindow) to pinpoint the location of the lemonade stand.

## Make it awesome!

So having your own app idea running on your laptop is great, but wouldn't it be really awesome if you could share it with the world?  Check out [the next chapter](https://github.com/TargetRAD/lemonade-app/tree/awesome) of this app's adventure and learn how to deploy your app to the cloud...
