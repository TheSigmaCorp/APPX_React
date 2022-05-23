import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Canvas from './components/canvas/Canvas';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Sidebar></Sidebar>
      <Canvas></Canvas>
    </div>
  );
}

export default App;
