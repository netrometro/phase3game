import Phaser from 'phaser';

// Import stylesheets
import './style.css';

// Write TypeScript code!
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);

function preload () {
  console.log('preload');
}

function create () {
  console.log('create');
}

function update () {
  //console.log('update');
}




const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;