import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import About from 'pages/About';

function App() {
  return (
    <Fragment>
      <About type='child' children={{}} />
    </Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
