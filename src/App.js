import MusicList from "./components/MusicList";
import Header from "./components/Header";

import './styles/App.css';

function App() {
  return (

   <div className="container mt-5 mb-3">
     <Header />
     <MusicList />
   </div>
  );
}

export default App;
