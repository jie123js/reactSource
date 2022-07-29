import React from 'react';
import { VariableSizeList } from 'react-window';
import './fixed-size-list-horizontal.css'
const rowSizes = new Array(1000)
    .fill(true)
    .map(() => 50 + Math.round(Math.random() * 50))

const getItemSize = index => rowSizes[index]

function Column({ index, style }) {
    return (
        <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
            Col {index}
        </div>
    )
}
function App() {
    return (
        <VariableSizeList
            className='List'
            height={75}
            width={300}
            itemCount={1000}
            itemSize={getItemSize}
            layout="horizontal"
        >
            {Column}
        </VariableSizeList>
    )
}
export default App;