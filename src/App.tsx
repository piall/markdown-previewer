import { Editor } from './components';

import './App.scss';
import { Previewer } from './components/previewer';

function App() {
  return (
    <div id="App">
      <div className="row gx-0">
        <Editor className="col-md-6" />
        <Previewer className="col-md-6" id="previewer-wrapper" />
      </div>
    </div>
  );
}

export default App;
