import MusicList from "./components/MusicList";
import Header from "./components/Header";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";

import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading";
import './styles/App.css';
import { Helmet } from "react-helmet";

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

export default function App() {
  const { isLoading } = useAuth0();
  
    if(isLoading) {
      return <Loading />;
    }


  return (
    
   <div className="container mt-5 mb-3">
     <Helmet>
       <meta charSet="utf-8" />
       <script
              src="https://widget.Cloudinary.com/v2.0/global/all.js"
              type="text/javascript"
        ></script>
      </Helmet>
     <div>
        <button onClick={notify}>Notify</button>
        <Toaster /> 
      </div>

     <Header />
     <MusicList />
  
      
    </div>
  );
}

