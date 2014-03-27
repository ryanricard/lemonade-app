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
    
    Enter the credentials you set up in the [Prerequisites](#prerequisites).

    If Heroku reports that you don't have an existing public key and asks if you'd like to create one, answer yes!

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
    
    If you get a warning that the authenticity of the host heroku.com can't be established and if you'd like to to continue connecting, thereby trusting the Heroku RSA fingerprint, choose yes!

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

* In a few simple steps, you pushed your app to [Heroku](http://heroku.com), a [PaaS](http://en.wikipedia.org/wiki/Platform_as_a_service) provider that allows people to host their apps and API's in the cloud.  We essetially followed their [Getting Started guide](https://devcenter.heroku.com/articles/quickstart) to deploy our Lemonade Stand app.

* Heroku uses [Git](http://git-scm.com/) to deploy your app.  We created a local git repository, committed our code, and *pushed* it to a remote repository set up by Heroku when they provisioned our app.  To deploy updates, all we have to do is commit those changes to our local repository and push again.

* Heroku gives you a generated URL under their __*.herokuapp.com__ domain.  If you want to associate your app with a custom domain, you can learn more about that [here](https://devcenter.heroku.com/articles/custom-domains).

* Wanna see a live version of the Lemonade Stand App?  Check out: 

    http://lemonade.targetrad.com
