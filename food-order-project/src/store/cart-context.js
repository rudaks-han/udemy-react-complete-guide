import React from 'react';

let CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: (id) => {}
});

export default CartContext;