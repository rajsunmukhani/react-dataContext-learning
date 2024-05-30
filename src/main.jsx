import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DataContext from './context/DataContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<DataContext>
  <App />
</DataContext>);
