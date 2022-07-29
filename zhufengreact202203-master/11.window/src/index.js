import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import FixedSizeListVertical from './fixed-size-list-vertical';
import FixedSizeListHorizontal from './fixed-size-list-horizontal';
import VariableSizeListVertical from './variable-size-list-vertical';
import VariableSizeListHorizontal from './variable-size-list-horizontal';
import FixedSizeGrid from './fixed-size-grid';
import VariableSizeGrid from './variable-size-grid';
import ScrollingToAListItem from './scrolling-to-a-list-item';
import ScrollingToAGridItem from './scrolling-to-a-grid-item';
ReactDOM.createRoot(document.getElementById('root'))
  .render(<ScrollingToAGridItem />);


  //下周日晚上8点从零实现react-window
//数据量很大的量，10万条 10万个DOM 页面会卡顿