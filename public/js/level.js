import Compositor from './compositor.js';

export default class Level {
  constructor(){
    this.comp = new Compositor;
    this.entities = new Set();
  }
}