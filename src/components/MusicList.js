import Music from "./Music";

export default function App() {
  const musicList = [
    {
      name: "olanetsoft",
      title: "Bang Bang", 
      url: "https://res.cloudinary.com/demo/video/upload/dog.mp3",
      created_at:"2021-10-04T23:30:01.000Z",
    }
  ]

  return (
    <div className="row">
      {musicList.map((m, key) => (
        <Music musicList={m} index= {key} />
      ))}
    </div>
  );
}