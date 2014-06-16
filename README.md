# Making Lemonade Awesome

So you've got a cool app on your computer but now you'd like to share it with the world.  Follow these steps to take our [Lemonade Stand App](https://github.com/TargetRAD/lemonade-app) to the cloud...

## Prerequisites

In addition to the [prerequisites you've already set up for the local app](https://github.com/TargetRAD/lemonade-app#prerequisites)...

1. Sign up for a [free Heroku Account](https://id.heroku.com/signup/www-header)
1. Install the [Heroku Toolbelt](https://toolbelt.heroku.com/)
1. **Windows ONLY**: Install [GitHub for Windows](https://windows.github.com/)  
We won't actually be using the [GitHub](http://github.com) service, but their Windows client (specifically, their **Git Shell**) solves a lot of the ugly SSH issues in Windows.

## Steps

1. Open a command prompt

   *Mac*: Run the **Terminal** app

   *Windows*: Double-click the **Git Shell** icon on your desktop  
   **NOTE:** This is a different command prompt than what we used when we built the [local app](https://github.com/TargetRAD/lemonade-app).

1. Make sure you're back in your project's directory

    *Mac*
    ```
    cd ~/Documents/lemonade-app
    ```

    *Windows*
    ```
    cd %USERPROFILE%\Documents\lemonade-app
    ```

1. Create empty code files necessary for deployment to Heroku

    *Mac*
    ```
    touch Procfile
    touch .gitignore
    ```

    *Windows*
    ```
    echo $null > Procfile
    echo $null > .gitignore
    ```

1. Open each of the above files in **Sublime Text 2** and copy/paste their associated content from the following sources

    [Procfile](/Procfile)

    [.gitignore](/.gitignore)

    **IMPORTANT**: Be sure to save the changes to the files (*File* > *Save*)

1. Tell Git who you are

    **NOTE**: You don't need to this if you've already got Git set up with your name and email

    ```
    git config --global user.email "you@example.com"
    git config --global user.name "Your Name"
    ```

1. Initialize a local Git repository

    ```
    git init
    ```

1. Perform your first Git commit

    ```
    git add .
    git commit -m "My first commit"
    ```

1. Log into Heroku

    ```
    heroku login
    ```

    Enter the credentials you set up in the [Prerequisites](#prerequisites).

    *Mac*: If Heroku reports that you don't have an existing public key and asks if you'd like to create one, answer yes!

1. **Windows ONLY**  

    You need to manually add your SSH public key to Heroku

    ```
    heroku keys:add
    ```

    If you're prompted that an existing public key can't be found and you're asked if you'd like to create one, say yes!

    The final output should look something like this

    ```
    Uploading SSH public key C:/Users/your_username/.ssh/id_rsa.pub... done
    ```

1. Create your Heroku app

    ```
    heroku create
    ```

    You'll see output that looks something like this

    ```
    Creating warm-sierra-1964... done, stack is cedar
    http://warm-sierra-1964.herokuapp.com/ | git@heroku.com:warm-sierra-1964.git
    Git remote heroku added
    ```

    If that was the output of your app, your app's URL would be:

    `http://warm-sierra-1964.herokuapp.com/`

1. Deploy your app

    ```
    git push heroku master
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

    Tinker with the code.  Then deploy your changes:

    ```
    git add .
    git commit -m "a description of your change"
    git push heroku master
    ```

## What did I just do?

* In a few simple steps, you pushed your app to [Heroku](http://heroku.com), a [PaaS](http://en.wikipedia.org/wiki/Platform_as_a_service) provider that allows people to host their apps and API's in the cloud.  We essetially followed their [Getting Started guide](https://devcenter.heroku.com/articles/quickstart) to deploy our Lemonade Stand app.

* Heroku uses [Git](http://git-scm.com/) to deploy your app.  We created a local git repository, committed our code, and *pushed* it to a remote repository set up by Heroku when they provisioned our app.  To deploy updates, all we have to do is commit those changes to our local repository and push again.

* Heroku gives you a generated URL under their __*.herokuapp.com__ domain.  If you want to associate your app with a custom domain, you can learn more about that [here](https://devcenter.heroku.com/articles/custom-domains).

* Wanna see a live version of the Lemonade Stand App?  Check out:

    http://lemonade.targetrad.com
