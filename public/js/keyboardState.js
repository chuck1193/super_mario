export default class KeyboardState {
  constructor(){
    // holds the current state of a given key
    this.keyStates = new Map();

    // holds the callback functions for a keyCode
    this.keyMap = new Map();
  }
  addMapping(keyCode, callback){
    this.keyMap.set(keyCode, callback);
  }

  handleEvent(event){
    const {keyCode} = event;

    if (!this.keyMap.has(keyCode)){
      // Did not have key mapped
      return false;
    }

    event.preventDefault();
  }
}