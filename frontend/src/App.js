import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutScreen from './screens.js/AboutScreen';
import BlogDetailsScreen from './screens.js/BlogDetailsScreen';
import CreateScreen from './screens.js/CreateScreen';
import HomeScreen from './screens.js/HomeScreen';
import UpdatePostScreen from './screens.js/UpdatePostScreen';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <main className="container">
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/about" component={AboutScreen} />
            <Route path="/create" component={CreateScreen} />
            <Route path="/blog/:id" component={BlogDetailsScreen} />
            <Route path="/update/:id" component={UpdatePostScreen} />
          </Switch>
        </main> 
        <Footer />
      </BrowserRouter>
  );
}

export default App;
