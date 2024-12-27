import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {GameProvider} from "./context/GameContext";

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GameProvider>
            <App />
        </GameProvider>
    </React.StrictMode>
);
