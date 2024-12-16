import { useState } from 'react';

export default function useCustomSpeechRecognition() {
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);

    const listen = () => {
        setListening(true);
        if (window.SpeechRecognition || window.webkitSpeechRecognition) {
            const recognition =
                new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognition.interimResults = true;

            recognition.onresult = (event) => {
                let transcript = '';
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    if (event.results[i].isFinal) {
                        transcript = event.results[i][0].transcript;
                        setText(transcript);
                    }
                }
            };

            recognition.onend = () => {
                setListening(false);
            };

            recognition.start();
        } else {
            console.error('Ваш браузер не підтримує голосовий ввід');
        }
    };

    const stop = () => {
        setListening(false);
        if (window.SpeechRecognition || window.webkitSpeechRecognition) {
            const recognition =
                new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognition.stop();
        }
    };
    return {
        text,
        listen,
        listening,
        stop,
    };
}
