import React, { useState } from 'react';

const AddItem = ({ addItem }) => {
    const [itemName, setItemName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(itemName);
        setItemName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Item Name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                required
            />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddItem;
