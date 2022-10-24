import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

const App = () => {
  return (
      <Routes>
        <div className="App">
          <Container>
            <Route exact path="/" component={ <BookList/> }/>
            <Route exact path="/add" component={ <AddBook/> }/>
          </Container>
        </div>
      </Routes>
    
  );
};

export default App;
