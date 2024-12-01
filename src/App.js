import './App.css';
import MyComponent from './components/first/MyComponent'
import Gallery from './components/gallery/Gallery';
import ToDo from './components/ToDo/ToDo';

function App() {
  return (
    <div className="App">
      <MyComponent />
      <Gallery />
      <ToDo/>
    </div>
  );
}

export default App;
