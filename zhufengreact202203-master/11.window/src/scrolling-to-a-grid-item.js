import React, { useRef } from 'react';
import { FixedSizeGrid } from 'react-window';
import './scrolling-to-a-grid-item.css'
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
    const gridRef = useRef();
    const scrollToRow100Column50Auto = ()=>{
        gridRef.current.scrollToItem({
            rowIndex:100,
            columnIndex:50
        });
    }
    return (
       <>
            <button onClick={scrollToRow100Column50Auto}>滚动到第100行，第50列</button>
            <FixedSizeGrid
                ref={gridRef}
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
       </>
    )
}
export default App;