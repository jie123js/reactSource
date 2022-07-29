import React, { useRef } from 'react';
import { FixedSizeList } from 'react-window';
import './scrolling-to-a-list-item.css'
function Row({ index, style, isScrolling }) {
    return (
        <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
            Row {index}
        </div>
    )
}
function App() {
    const listRef = useRef();
    const scrollToRow200 = ()=>{
        listRef.current.scrollToItem(200,'auto');
    }
    const scrollToRow250 = () => {
        listRef.current.scrollToItem(250,'smart');
    }
    const scrollToRow300 = () => {
        listRef.current.scrollToItem(300,'start');
    }
    return (
        <>
            <button onClick={scrollToRow200}>滚动到第200行</button>
            <button onClick={scrollToRow250}>滚动到第250行</button>
            <button onClick={scrollToRow300}>滚动到第300行</button>
            <FixedSizeList
                ref={listRef}
                className='List'
                height={150}
                width={300}
                itemCount={1000}
                itemSize={30}
            >
                {Row}
            </FixedSizeList>
            
        </>
    )
}
export default App;