// Attach event listeners to window, not the canvas.


// KeyboardEvent Properties
//
// e.altKey     = A boolean value returns when a key event was triggered while ALT key was down.
// e.charCode   = Return the Unicode characer code of the key when the event was triggered.
// e.code       = Return the code of the key when the event was triggered.
// e.ctrlKey    = Boolean, true if CTRL key was being held down when event was triggered.
// e.key        = Return the identifier of the key when the event was triggered.
// e.keyCode    = Return the Unicode key code of the key when the event was triggered.
// e.metaKey    = Boolean for META key pressed or not when event was triggered.
// e.shiftKey   = Boolean for if SHIFT key was pressed or not when event was triggered.
// e.which      = DEPRECATED. Retun the Unicode character code of the key when onkeypress triggered.

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const KEY_GROUPS = {
  ARROW_KEYS: {"LEFT": 37, "UP": 38, "RIGHT": 39, "DOWN": 40},
  DIGITS: {"0": 48, "1": 49, "2": 50, "3": 51, "4": 52, "5": 53, "6": 54, "7": 55, "8": 56, "9": 57},
};

window.addEventListener('keydown', (event) => {
  console.log(`keydown event triggered: `);
})