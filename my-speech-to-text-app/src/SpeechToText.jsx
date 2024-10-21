import React from 'react';
import useCustomSpeechRecognition from './useCustomSpeechRecognition.jsx';

function SpeechToText(){
    const { text, listen, listening, stop } = useCustomSpeechRecognition();
    return (
        <div>
            <button onClick={listen} disabled={listening}>
                Start Listening
            </button>
            <button onClick={stop} disabled={!listening}>
                Stop Listening
            </button>
            <p>Your text: {text}</p>
        </div>
    );
};

export default SpeechToText;
