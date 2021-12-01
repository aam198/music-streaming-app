import ReactAudioPlayer from "react-audio-player";
import moment from "moment";

export default function Music({ musicList, index }){

  return(
    <div className="col-md-4">
      <div className="card p-4 mb-3 shadow-sm" key={index}>
        <div className="d-flex justify-content-between">
        <div className="d-flex flex-row align-items-center">
                <div className="icon">
                  {" "}
                  <i className="bx bxl-mailchimp"></i>{" "}
                </div>
                <div className="ms-2 c-details">
                  <h5 className="mb-0">{musicList.name}</h5>{" "}
                  <span>{moment(musicList.created_at).format("MMMM Do YYYY")}</span>
                </div>
              </div>
              <div className="badge">
                {" "}
                <span role="img" aria-label="">
                  Hot 🔥
                </span>{" "}
              </div>
            </div>
            <div className="mt-4">
              <h4 className="heading">{musicList.title}</h4>
              <div className="mt-3 mx-auto">
                <ReactAudioPlayer src={`${musicList.url}`} controls />
              </div>
            </div>
          </div>
        </div>
      );
    }