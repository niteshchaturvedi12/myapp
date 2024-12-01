import './App.css';
import Avatar from './components/avatar/Avatar';
import MyComponent from './components/first/MyComponent'
import Gallery from './components/gallery/Gallery';
import ToDo from './components/ToDo/ToDo';

function App() {
  return (
    <div className="App">
      <MyComponent />
      <Gallery />
      <ToDo/>
      <Avatar/>
    </div>
  );
}

export default App;
