import React from 'react';
import { FixedSizeGrid } from 'react-window';
import './fixed-size-grid.css'
function Cell({rowIndex,columnIndex,style}){
    return (
        <div
          style={style}
          className={
              columnIndex%2?rowIndex%2===0?'GridItemOdd':'GridItemEven':rowIndex%2?"GridItemOdd":"GridItemEven"
          }
        >
            r{rowIndex}, c{columnIndex}
        </div>

    )
}
function App() {
    return (
        <FixedSizeGrid
            className='Grid'
            rowCount={1000}
            rowHeight={35}
            columnCount={1000}
            columnWidth={100}
            width={300}
            height={150}
        >
            {Cell}
        </FixedSizeGrid>
    )
}
export default App;