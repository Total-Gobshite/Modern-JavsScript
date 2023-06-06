// ====== My way ======
const body = document.querySelector('body');
body.addEventListener('keydown', updateKeyValues);

function updateKeyValues(e) {
    const keys = document.querySelectorAll('.key'); // nodelist of all elements with class of key
    keys[0].firstChild.textContent = e.key === ' ' ? 'Space' : e.key; // otherwise it would show nothing if space key pressed
    keys[1].firstChild.textContent = e.keyCode;
    keys[2].firstChild.textContent = e.code;
}

// ====== Fancy way ======
// function showKeyCodes(e) {
//     const insert = document.getElementById('insert');
//     insert.innerHTML = ''; // clears out every time called
  
//     const keyCodes = { // put all the keycodes into an object
//       'e.key': e.key === ' ' ? 'Space' : e.key,
//       'e.keyCode': e.keyCode,
//       'e.code': e.code,
//     };
  
//     for (let key in keyCodes) {
//     // create the HTML structure
//       const div = document.createElement('div');
//       div.className = 'key';
//       const small = document.createElement('small');
  
//       const keyText = document.createTextNode(key);
//       const valueText = document.createTextNode(keyCodes[key]);
  
//       small.appendChild(keyText);
//       div.appendChild(valueText);
//       div.appendChild(small);
  
//       insert.appendChild(div);
//     }
//   }
  
//   window.addEventListener('keydown', showKeyCodes);