//the main component that return app the index.
//importation of css file and the profile component
import './App.css';
import Profile from './profile/Profile';
//the arrow function
function App() {
  
  return (
    <div className="App">
      <header className="App-header"> 
        <Profile></Profile>
      </header>
    </div>
  );
}
//exportation of the app
export default App;
