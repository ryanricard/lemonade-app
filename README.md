# Let's build an app

So you have a cool idea for an app, but don't know where to start?  Sometimes you just need to a good example.  

This repository contains instructions and source code for a simple web app that provides today's location of a fictitious lemonade stand business.  Follow the steps to build your own version of the app.  Then find out how to really make your app awesome.

## Prerequisites

1. Admin rights on your Mac
2. [Install Node.js](http://nodejs.org/download/)
3. [Install Sublime Text 2](http://www.sublimetext.com/2) (any decent text editor will do)

## Steps

1. Create the app directory

    ```
    $ mkdir lemonade-app
    $ cd lemonade-app
    ```

1. Initialize the Node app

    ```
    $ npm init
    ```

    Accept all defaults in the wizard except `entry point`, which should be `web.js`:

    ```
    entry point: (index.js) web.js
    ```

1. Install Express.js

    ```
    $ npm install express --save
    ```

1. Run **Sublime Text 2** and open the project directory

    *File* menu > *Open...* > (browse to above directory)

1. Create project subdirectories for the code

    ```
    $ mkdir public
    $ mkdir public/css
    $ mkdir public/js
    ```

1. Create empty code files to go into those subdirectories

    ```
    touch web.js
    touch public/index.html
    touch public/css/index.css
    touch public/js/index.js
    ```

1. Open each of the above files in **Sublime** and copy/paste their associated content from the following sources:

    [/web.js](/web.js)
    
    [/public/index.html](/public/index.html)
    
    [/public/css/index.css](/public/css/index.css)
    
    [/public/js/index.js](/public/js/index.js)

1. Start your app

    ```
    $ node web.js
    ```
    
    You should see output that looks like this:
    
    ```
    Listening on 5001
    ```

1. View your app in your browser

    [http://localhost:5001](http://localhost:5001)
    
## What's going on?

* The [web.js](/web.js) file is the only server-side script, and it's basically serving up static client-side content in the `public` directory.
* The [index.html](/public/index.html) and [index.css](/public/css/index.css) files provide the layout and styling of the web app.  The real magic happens in [index.js](/public/js/index.js).
* When the page first loads, [index.js](/public/js/index.js) makes an AJAX call to the [Lemonade Stand API](http://api.lemonade.targetrad.com/location/today) to get today's location of the stand.

  **NOTE:** That API is just for demo purposes and actually randomly returns one of a handful of locations with each call.  The API is a Heroku app and you can see its source code [here](https://github.com/TargetRAD/lemonade-api).

* The page then renders a [Google Maps](https://developers.google.com/maps/) object centered on the location returned by the API and creates an associated [Marker](https://developers.google.com/maps/documentation/javascript/reference?csw=1#Marker) and [InfoWindow](https://developers.google.com/maps/documentation/javascript/reference?csw=1#InfoWindow) to pinpoint the location of the lemonade stand.

## Make it awesome!

So having your own app idea running on your laptop is great, but wouldn't it be really awesome if you could share it with the world?  Check out [the next chapter](https://github.com/TargetRAD/lemonade-app/tree/awesome) of this app's adventure and learn how to deploy your app to the cloud...
