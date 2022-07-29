import React from 'react';
import { VariableSizeGrid } from 'react-window';
import './fixed-size-grid.css'
const rowHeights = new Array(1000)
    .fill(true)
    .map(() => 25 + Math.round(Math.random() * 50))
const columnWidths = new Array(1000)
    .fill(true)
    .map(() => 75 + Math.round(Math.random() * 50))


function Cell({ rowIndex, columnIndex, style }) {
    return (
        <div
            style={style}
            className={
                columnIndex % 2 ? rowIndex % 2 === 0 ? 'GridItemOdd' : 'GridItemEven' : rowIndex % 2 ? "GridItemOdd" : "GridItemEven"
            }
        >
            r{rowIndex}, c{columnIndex}
        </div>

    )
}
function App() {
    return (
        <VariableSizeGrid
            className='Grid'
            rowCount={1000}
            rowHeight={(index) => rowHeights[index]}
            columnCount={1000}
            columnWidth={(index) => columnWidths[index]}
            width={300}
            height={150}
        >
            {Cell}
        </VariableSizeGrid>
    )
}
export default App;