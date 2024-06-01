import React, { useState } from 'react';
import NavBar from '.src/components/NavBar';
import AddItem from '.src/components/AddItem';
import ItemList from './components/ItemList';
import './styles.css';

const App = () => {
    const [items, setItems] = useState([]);

    const addItem = (itemName) => {
        setItems([...items, itemName]);
    };

    const deleteItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div className="App">
            <NavBar />
            <AddItem addItem={addItem} />
            <ItemList items={items} deleteItem={deleteItem} />
        </div>
    );
};

export default App;
