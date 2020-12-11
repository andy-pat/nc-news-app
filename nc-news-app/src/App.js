import './App.css';
import Header from '../src/components/Header'
import { Router } from '@reach/router'
import Nav from './components/Nav'
import ArticlesList from './components/ArticlesList'
import Article from './components/Article';


function App() {
  return (
    <div className="App">
     <Header />
     <Nav />
     <Router>
      <ArticlesList path="/"/>
      <ArticlesList path="/topics/:topic_slug"/>
      <Article path="/article/:id"/>
     </Router>
     
    </div>
  );
}

export default App;
