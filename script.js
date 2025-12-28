const keys = document.querySelectorAll('.key');

// Create a map for easier key lookup
const keyMap = new Map();
keys.forEach(key => {
    const keyValue = key.getAttribute('data-key');
    if (keyValue) {
        keyMap.set(keyValue.toLowerCase(), key);
    }
});

// Handle keyboard events
document.addEventListener('keydown', (e) => {
    let keyElement = null;
    
    // Special handling for different key types
    if (e.key === ' ') {
        keyElement = keyMap.get(' ');
    } else if (e.code === 'ShiftLeft') {
        keyElement = keyMap.get('shiftleft');
    } else if (e.code === 'ShiftRight') {
        keyElement = keyMap.get('shiftright');
    } else if (e.code === 'ControlLeft') {
        keyElement = keyMap.get('controlleft');
    } else if (e.code === 'ControlRight') {
        keyElement = keyMap.get('controlright');
    } else if (e.code === 'AltLeft') {
        keyElement = keyMap.get('altleft');
    } else if (e.code === 'AltRight') {
        keyElement = keyMap.get('altright');
    } else if (e.code === 'MetaLeft') {
        keyElement = keyMap.get('metaleft');
    } else if (e.code === 'MetaRight') {
        keyElement = keyMap.get('metaright');
    } else {
        keyElement = keyMap.get(e.key.toLowerCase());
    }
    
    if (keyElement && !keyElement.classList.contains('active')) {
        keyElement.classList.add('active');
    }
});

document.addEventListener('keyup', (e) => {
    let keyElement = null;
    
    // Special handling for different key types
    if (e.key === ' ') {
        keyElement = keyMap.get(' ');
    } else if (e.code === 'ShiftLeft') {
        keyElement = keyMap.get('shiftleft');
    } else if (e.code === 'ShiftRight') {
        keyElement = keyMap.get('shiftright');
    } else if (e.code === 'ControlLeft') {
        keyElement = keyMap.get('controlleft');
    } else if (e.code === 'ControlRight') {
        keyElement = keyMap.get('controlright');
    } else if (e.code === 'AltLeft') {
        keyElement = keyMap.get('altleft');
    } else if (e.code === 'AltRight') {
        keyElement = keyMap.get('altright');
    } else if (e.code === 'MetaLeft') {
        keyElement = keyMap.get('metaleft');
    } else if (e.code === 'MetaRight') {
        keyElement = keyMap.get('metaright');
    } else {
        keyElement = keyMap.get(e.key.toLowerCase());
    }
    
    if (keyElement) {
        keyElement.classList.remove('active');
    }
});

// Handle mouse clicks
keys.forEach(key => {
    key.addEventListener('mousedown', () => {
        key.classList.add('active');
    });
    
    key.addEventListener('mouseup', () => {
        key.classList.remove('active');
    });
    
    key.addEventListener('mouseleave', () => {
        key.classList.remove('active');
    });
});
