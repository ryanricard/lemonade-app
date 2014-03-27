# Making Lemonade Awesome

So you've got a cool app on your computer but now you'd like to share it with the world.  Follow these steps to take our [Lemonade Stand App](https://github.com/TargetRAD/lemonade-app) to the cloud...

## Prerequisites

In addition to the [prerequisites you've already set up for the local app](https://github.com/TargetRAD/lemonade-app#prerequisites)...

1. Sign up for a [free Heroku Account](https://id.heroku.com/signup/www-header)
1. Install the [Heroku Toolbelt](https://toolbelt.heroku.com/)

## Steps

1. Create empty code files necessary for deployment to Heroku

    ```
    $ touch Procfile
    $ touch .gitignore
    ```

1. Open each of the above files in **Sublime Text 2** and copy/paste their associated content from the following sources:

    [Procfile](/Procfile)
    
    [.gitignore](/.gitignore)

1. Initialize a local Git repository

    ```
    $ git init
    ```

1. Perform your first Git commit

    ```
    $ git add .
    $ git commit -m 'My first commit'
    ```

1. If you haven't done it already, log into Heroku via the Toolbelt

    ```
    $ heroku login
    ```
    
    Enter the credentials you set up in the [Prerequisites](#prerequisites)

1. Create your Heroku app

    ```
    $ heroku create
    ```
    
    You'll see output that looks something like this
    
    ```
    Creating warm-sierra-1964... done, stack is cedar
    http://warm-sierra-1964.herokuapp.com/ | git@heroku.com:warm-sierra-1964.git
    Git remote heroku added
    ```
    
    If that was the output of your app, your app's URL would be:
    
    **http://warm-sierra-1964.herokuapp.com**

1. Deploy your app

    ```
    $ git push heroku master
    ```
    
    You'll see a bunch of output, but if everything was successful, the end will look something like this:
    
    ```
    ...
    http://warm-sierra-1964.herokuapp.com/ deployed to Heroku
    To git@heroku.com:warm-sierra-1964.git
     * [new branch]      master -> master
    ```

1. Show it to the world!

    Open up your app's URL in your browser.  Then share it with all your friends!

1. Make it your own

    Tinker with the code and deploy your changes:

    ```
    $ git add .
    $ git commit -m 'a description of your change'
    $ git push heroku master
    ```

## What did I just do?

(more)
