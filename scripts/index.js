let recognitionActive = false;

// Function to start voice recognition
function startVoiceRecognition() {
    speak("Please say the page name where you want to navigate to");
}

// Function to speak a message
function speak(message) {
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = 'en-US'; // Set the language

    recognitionActive = false; // Stop recognition during speech

    window.speechSynthesis.speak(utterance);

    // Start voice recognition after speech has finished
    utterance.onend = function() {
        recognitionActive = true; // Resume recognition after speech
        setupVoiceCommands(); // Setup voice commands after speaking
    };
}

// Function to set up voice commands
function setupVoiceCommands() {
    if (annyang && recognitionActive) {
        // Define the commands
        const commands = {
            'book now': function() {
                console.log("Navigating to Book Now");
                window.location.href = 'tour/book.html'; // Redirect to Book Now
            },
            'about': function() {
                console.log("Navigating to About Us");
                window.location.href = 'tour/about.html'; // Redirect to About Us
            },
            'home': function() {
                console.log("Navigating to Home");
                window.location.href = 'tour/index.html'; // Redirect to Home
            },
            'login': function() {
                console.log("Navigating to Login page");
                window.location.href = '/tour/register.html'; 
            },
            'packages': function() {
                console.log("Navigating to Packages");
                window.location.href = 'tour/package.html'; // Redirect to Packages
            }
        };

        // Add the commands to Annyang
        annyang.addCommands(commands);

        // Start listening
        annyang.start({ autoRestart: true, continuous: false });
    } else {
        console.log("Speech Recognition not supported.");
    }
}
