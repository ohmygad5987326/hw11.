import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js'
const API_KEY = 'AIzaSyBEecjE_v8D5bC5nrfS3Xm-heojWG26L0w';

class App extends Component {
  constructor(props) {
    super(props);
    //只要有用class來建立類別物件都要有super&constructor
    this.state = {videos: []};
    YTSearch({key: API_KEY, term: 'ntue dtd'}, videos => this.setState({videos}));
  }
//執行YTSearch傳遞一個JavaScript物件內涵API_KEY以及要查詢的字串
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />,document.querySelector('.container'));
//利用ReactDOM.render方法，把物件渲染到選擇器所選擇的HTML<div>裡(此時生成Virtual DOM)
