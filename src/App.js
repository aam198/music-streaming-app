import MusicList from "./components/MusicList";
import Header from "./components/Header";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";


import './styles/App.css';

const notify = () =>
  toast((t) => (
      <div
        className="notificationWrapper">
        <div className="iconWrapper">
        </div>
        <div className="contentWrapper">
          <h1>New version available</h1>
          <p>
            An improved version of VESSEL is now available, refresh to update.
          </p>
        </div>
        <div className="closeIcon" onClick={() => toast.dismiss(t.id)}>
          <MdOutlineClose />
        </div>
      </div>
    ),
    { id: "unique-notification", position: "bottom-center" }
  );

function App() {
  return (
    
   <div className="container mt-5 mb-3">
     <div>
        <button onClick={notify}>Notify</button>
        <Toaster /> 
      </div>

     <Header />
     <MusicList />
  
      
    </div>
  );
}

export default App;
