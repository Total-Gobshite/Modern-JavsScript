// ====== 3 main ones: ======
// 1. keydown - keeps firing when key is pressed
// 2. keyup - fires once when key is released
// 3. keypress - fires once when key is pressed, does nothing when released. Can tap quickly or hold down then release, same effect.

const itemInput = document.getElementById('item-input');

// ------ Keypress ------
const onKeyPress = (e) => {
    console.log('Key Pressed');
};

// itemInput.addEventListener('keypress', onKeyPress);

// ------ Keyup ------
const onKeyUp = (e) => {
    console.log('Key Released');
};

// itemInput.addEventListener('keyup', onKeyUp);

// ------ Keydown ------
const onKeyDown = (e) => {
    console.log('Key pressed down');

    // key
    console.log(e.key); // returns the key pressed

    // keyCode
    console.log(e.keyCode); // returns the keyCode of the key pressed
    // https://www.toptal.com/developers/keycode/table

    // code
    console.log(e.code); // returns the code of the key pressed
    // https://www.toptal.com/developers/keycode/table

    // repeat
    console.log(e.repeat); // returns true if key is held down, false if not

    // ctrlKey
    console.log(e.ctrlKey); // returns true if ctrl key is held down, false if not

    // shiftKey
    console.log(e.shiftKey); // returns true if shift key is held down, false if not

    // altKey
    console.log(e.altKey); // returns true if alt key is held down, false if not
};

itemInput.addEventListener('keydown', onKeyDown);