import './App.css';
import Header from '../src/components/Header'
import { Router } from '@reach/router'
import Home from './components/Home'
import Nav from './components/Nav'
import ArticlesList from './components/ArticlesList'


function App() {
  return (
    <div className="App">
     <Header />
     <Nav />
     <ArticlesList />
     
    </div>
  );
}

export default App;
