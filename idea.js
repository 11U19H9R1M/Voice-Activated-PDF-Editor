document.addEventListener('DOMContentLoaded', function () {
    // Function to handle voice commands for PDF editing
    function handleVoiceCommand(command) {
      console.log(`Voice command received: ${command}`);
      // Add logic to handle different voice commands
      if (command.includes('open')) {
        // Logic to open a PDF
      } else if (command.includes('edit')) {
        // Logic to edit the PDF
      } else if (command.includes('save')) {
        // Logic to save the PDF
      }
    }
  
    // Integrating voice commands using webkitSpeechRecognition
    if ('webkitSpeechRecognition' in window) {
      let recognition = new webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.onresult = function (event) {
        let interimTranscript = '';
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          let transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
            handleVoiceCommand(transcript);
          } else {
            interimTranscript += transcript;
          }
        }
      };
      recognition.start();
    }
  });
  