import React from 'react';
import { FixedSizeList } from 'react-window';
import './fixed-size-list-horizontal.css'
function Column({ index, style }) {
    return (
        <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
            Column {index}
        </div>
    )
}
function App() {
    return (
        <FixedSizeList
            className='List'
            height={75}
            width={300}
            itemCount={1000}
            itemSize={100}
            layout="horizontal"
        >
            {Column}
        </FixedSizeList>
    )
}
export default App;