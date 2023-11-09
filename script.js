function waitForBackgroundToLoad() {
    var background = document.querySelector('.background');

    function checkIfBackgroundIsLoaded() {
        // The background element has loaded

        // Show the content
        var content = document.querySelector('.content');
        content.style.display = 'block';

        // Optionally, you can add animations or other actions here for the content
    }

    background.addEventListener('load', checkIfBackgroundIsLoaded);

    // Check if the background is already loaded (in case it is cached)
    if (background.complete) {
        checkIfBackgroundIsLoaded();
    }
}

// Call the function to start the process when the page loads
window.addEventListener('load', waitForBackgroundToLoad);
