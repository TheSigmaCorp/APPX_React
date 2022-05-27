import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Canvas from './components/canvas/Canvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from './redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header></Header>
        <Sidebar></Sidebar>
        <Canvas></Canvas>
      </div>
    </Provider>
  );
}

export default App;
