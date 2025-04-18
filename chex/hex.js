function generateHexCode() {
    const hexChars = '0123456789ABCDEF';
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        hexCode += hexChars[randomIndex];
    }
    return hexCode;
}

function generateHexCodes() {
    const colorDisplays = [
        document.getElementById('colorDisplay1'),
        document.getElementById('colorDisplay2'),
        document.getElementById('colorDisplay3'),
        document.getElementById('colorDisplay4')
    ];
    
    colorDisplays.forEach(display => {
        const hexCode = generateHexCode();
        display.innerText = hexCode;
        display.style.backgroundColor = hexCode;
    });
}

function resetColors() {
    const colorDisplays = [
        document.getElementById('colorDisplay1'),
        document.getElementById('colorDisplay2'),
        document.getElementById('colorDisplay3'),
        document.getElementById('colorDisplay4')
    ];

    colorDisplays.forEach(display => {
        display.innerText = '#FFFFFF';
        display.style.backgroundColor = '#FFFFFF';
    });
}

// Function to toggle the visibility of the content div
document.getElementById('alchemize').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});

