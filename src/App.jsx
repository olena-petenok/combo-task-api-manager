import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { DOCUMENT_TITLE } from './constants/strings.js';

import Page from './components/Page/Page';

function App() {
  useEffect(() => { document.title = DOCUMENT_TITLE; });

  return ( <Page /> );
}

export default App;
