import React from 'react';
// = var React = require('react')
import ReactDOM from 'react-dom';
//就是到node_modules目錄尋找react.js與react-dom.js這兩個類別，再分別存到React與ReactDOM變數
import {Component} from 'react';
//在定義React元件的類別時，我們只需要React.Component這個類別，所以index.html程式之中的import可以使用{Component}直接取得Component類別
//大括號裡面的就是取得的部分類別，超過一個可以用逗號隔開

class HelloWorld extends Component {
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

ReactDOM.render(
    <HelloWorld />
  , document.querySelector('.container'));
