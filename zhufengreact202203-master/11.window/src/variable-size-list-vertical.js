import React from 'react';
import { VariableSizeList } from 'react-window';
import './variable-size-list-vertical.css'

const rowSizes = new Array(1000)
  .fill(true)
  .map(()=>25+Math.round(Math.random()*50))

const getItemSize = index=>rowSizes[index]

function Row({ index, style }) {
    return (
        <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
            Row {index}
        </div>
    )
}
function App() {
    return (
        <VariableSizeList
            className='List'
            height={150}
            width={300}
            itemCount={1000}
            itemSize={getItemSize}
        >
            {Row}
        </VariableSizeList>
    )
}
export default App;