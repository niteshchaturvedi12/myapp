import './App.css';
import MyComponent from './components/first/MyComponent'
// import Gallery from './components/gallery/Gallery';
// import { Profile } from './components/gallery/Gallery';
import Profile from './components/profile/profile';

function App() {
  return (
    <div className="App">
      <MyComponent />
      {/* <Gallery /> */}
      <Profile />
    </div>
  );
}

export default App;
