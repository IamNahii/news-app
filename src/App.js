import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TopHeadline></TopHeadline>
    </div>
  );
}

export default App;