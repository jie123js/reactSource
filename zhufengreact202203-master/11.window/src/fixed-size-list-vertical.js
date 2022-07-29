import React from 'react';
import {FixedSizeList} from 'react-window';
import './fixed-size-list-vertical.css'
function Row({index,style,isScrolling}){
  return (
      <div className={index % 2 ? "ListItemOdd" :"ListItemEven"} style={style}>
          {isScrolling ? 'Scrolling' :`Row ${index}`}
      </div>
  )
}
function App() {
    return (
        <FixedSizeList
           className='List'
           height={150}
           width={300}
           itemCount={1000}
           itemSize={30}
           useIsScrolling
        >
            {Row}
        </FixedSizeList>
    )
}
export default App;