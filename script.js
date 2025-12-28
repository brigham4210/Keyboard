const keys = document.querySelectorAll('.key');

// Create a map for easier key lookup
const keyMap = new Map();
keys.forEach(key => {
    const keyValue = key.getAttribute('data-key');
    if (keyValue) {
        keyMap.set(keyValue.toLowerCase(), key);
    }
});

// Store original content and custom images for keys
const keyOriginalContent = new Map();
const keyImages = new Map();

// Store original content for each key
keys.forEach(key => {
    keyOriginalContent.set(key, key.innerHTML);
});

// Create hidden file input for image uploads
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = 'image/*';
fileInput.style.display = 'none';
document.body.appendChild(fileInput);

let currentKeyForImage = null;

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
    
    // Double-click to upload image
    key.addEventListener('dblclick', (e) => {
        e.preventDefault();
        currentKeyForImage = key;
        fileInput.click();
    });
    
    // Right-click to reset to original
    key.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        resetKeyToOriginal(key);
    });
});

// Handle file selection
fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0] && currentKeyForImage) {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = (event) => {
            const imgUrl = event.target.result;
            keyImages.set(currentKeyForImage, imgUrl);
            applyImageToKey(currentKeyForImage, imgUrl);
        };
        
        reader.readAsDataURL(file);
    }
    // Reset file input
    fileInput.value = '';
});

// Function to apply image to key
function applyImageToKey(key, imgUrl) {
    key.style.backgroundImage = `url('${imgUrl}')`;
    key.style.backgroundSize = 'cover';
    key.style.backgroundPosition = 'center';
    key.style.color = 'transparent';
    key.setAttribute('data-has-image', 'true');
}

// Function to reset key to original appearance
function resetKeyToOriginal(key) {
    key.style.backgroundImage = '';
    key.style.backgroundSize = '';
    key.style.backgroundPosition = '';
    key.style.color = '';
    key.innerHTML = keyOriginalContent.get(key);
    key.removeAttribute('data-has-image');
    keyImages.delete(key);
}

