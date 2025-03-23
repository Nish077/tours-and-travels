document.addEventListener('DOMContentLoaded', function() {
    const signInButton = document.getElementById('sign-in-btn');
    const signUpButton = document.getElementById('sign-up-btn');

    if (signInButton && signUpButton) {
        signInButton.addEventListener('click', () => {
            document.querySelector('.container').classList.remove('sign-up-mode');
        });

        signUpButton.addEventListener('click', () => {
            document.querySelector('.container').classList.add('sign-up-mode');
        });
    }
});




//   if (annyang) {
//     // Let's define a command.
//     const commands = {
//       'hello': () => { alert('Hello world!'); }
//     };

//     // Add our commands to annyang
//     annyang.addCommands(commands);

//     // Start listening.
//     annyang.start();
//   }







// Function to start speech recognition for a specific field
function startSpeech(fieldId) {
    // Check if Speech Recognition is supported
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition()
        recognition.lang = 'en-IN'; // Set language to English
        recognition.continuous = false;

        // Based on the fieldId, create the prompt
        let promptMessage;
        if (fieldId.includes('username')) {
            promptMessage = "Please say your username.";
        }
        else if (fieldId.includes('email')) {
            promptMessage = "Please say your email address.";
        }
        else if (fieldId.includes('address')) {
            promptMessage = "Please say your address.";
        }
        else if (fieldId.includes('password')) {
            promptMessage = "Please say your password.";
        }

        // Use Speech Synthesis to prompt the user
        const utterThis = new SpeechSynthesisUtterance(promptMessage)
        window.speechSynthesis.speak(utterThis)

        // Start recognition after the prompt finishes
        utterThis.onend = () => {
            recognition.start()

        }


        //record the result and put it into input field
        recognition.onresult = function (event) {
            let transcript = event.results[0][0].transcript;
            transcript = transcript.replace(/s*comma/g, ',')
                .replace(/\s*at the rate\s*/g, '@')
                .replace(/\s*dot/g, '.')
                .replace(/plus/g, '+')
                .replace(/minus/g, '-')
                .replace(/multiply/g, '*');

            console.log(transcript)
            document.getElementById(fieldId).value = transcript; // Set recognized text to the input field to that particular id field
        }


        recognition.onerror = function (event) {
            console.error('Speech recognition error:', event.error)
            alert("Sorry, there was an error recognizing your speech. Please try again.")
        }

        recognition.onend = function () {
            console.log("Speech recognition service disconnected")
        }
    } else {
        alert("Sorry, your browser does not support speech recognition.")
    }
}