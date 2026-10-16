import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function App() {
  let heading = React.createElement(
    'h1',
    { id: 'myh1', className: 'title' },
    'This is my H1 tag'
  );
  let parent = React.createElement(
    'div',
    { className: 'parent' },[ React.createElement('div', { className: 'child' }, [
      heading,
      React.createElement('h2', {}, 'second child'),
    ]), React.createElement('div', { className: 'child' }, [
      heading,
      React.createElement('h2', {}, 'second child'),
    ])]
   
  );

  return parent;
}

export default App;
