import { useState } from 'react';
import { Editor } from './components';
import { Previewer } from './components/previewer';

import './App.scss';

function App() {
  const [markdownSyntax, setMarkdownSyntax] = useState('');

  return (
    <div id="App">
      <div id="app-title-wrapper">
        <h2>Markdown Previewer</h2>
      </div>
      <div className="row gx-0">
        <Editor
          className="col-md-6"
          id="editor-wrapper"
          setMarkdownSyntax={setMarkdownSyntax}
          markdownSyntax={markdownSyntax}
        />
        <Previewer
          className="col-md-6"
          id="previewer-wrapper"
          markdownSyntax={markdownSyntax}
        />
      </div>
    </div>
  );
}

export default App;
