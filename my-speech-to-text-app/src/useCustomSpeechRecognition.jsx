import { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';

function useCustomSpeechRecognition(){
    const [text, setText] = useState('');
    const { listen, listening, stop } = useSpeechRecognition({
        onResult: (result) => {
            setText(result);
        },
    });
    return {
        text,
        listen,
        listening,
        stop,
    };
};
export default useCustomSpeechRecognition;
