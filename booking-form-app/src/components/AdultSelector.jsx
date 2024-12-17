import React from 'react';
const AdultSelector = ({ adults, setShowForm, showForm, updateAdults }) => (
    <>
        <select onClick={() => setShowForm(!showForm)}>
            <option value="1">{adults} дорослий(их)</option>
        </select>
        {showForm && (
            <div className="form-container">
                <label for="number">Додати або відняти:</label>
                <input type="number" id="number" name="number" onChange={(e) => updateAdults(parseInt(e.target.value))} />
                <button type="button" onClick={() => updateAdults(-1)}>–</button>
                <button type="button" onClick={() => updateAdults(1)}>+</button>
            </div>
        )}
    </>
);

export default AdultSelector;
