import './App.css';
import Avatar from './components/avatar/Avatar';
import MyComponent from './components/first/MyComponent'
import Gallery from './components/gallery/Gallery';
import ImageProfile from './components/ImageProfile/ImageProfile';
import ToDo from './components/ToDo/ToDo';

function App() {
  return (
    <div className="App">
      <MyComponent />
      <Gallery />
      <ToDo/>
      <Avatar/>
      <ImageProfile/>
    </div>
  );
}

export default App;
