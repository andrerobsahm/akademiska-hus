# A mobile friendly webb app for Akademiska Hus

<img src="https://media.giphy.com/media/RkLfdfhNq2gsbfUa01/giphy.gif" width="100%">

## Akademiska Hus
This is a project through Yrgo, Yrkeshögskola Göteborg, in collaboration with Akademiska hus.
Four students of web development and digital design has made a new design for their new mobile experience.

## Stack
Wordpress as backend and React as frontend.

## Get started

1. Clone or download this repository by pressing the green button (you will find the button above the list of my files which is shown above this section on this page) with the text "Clone or download".

2. Find the "env.example" file and duplicate it, rename the newly created file to ".env" and add your own database credentials inside of it.

3. Open the command line tool on your computer and navigate to the repository root folder and then to /backend. From here, run this commands to compile the project:
```sh
  $ npm install
  $ composer install
```

Once it's finished, jump into the backend/public folder and run this command to start the php server:
```sh
  $ php -S localhost:8888
```

4. Open another command line window and navigate to the repository root folder and then jump to the frontend folder. From here, run this commands to 1. compile the project and 2. start the client server:
```sh
  $ npm install
  $ npm start
```

Now you should be good to go!

## Authors
<a href="https://github.com/besv16">Beatrice Svensson</a>,
<a href="https://github.com/andrerobsahm">André Robsahm</a>

_Yrgo Göteborg, 2018_
