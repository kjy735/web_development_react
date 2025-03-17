import { useState } from 'react'
import './App.css'
import Main from './components/Main'

function App() {
  const data = [
    {
      title: "Psycho",
      artist: "Red Velvet",
      releaseDate: "2019.12.23",
      gender: "female",
    },
    {
      title: "Feel My Rhythm",
      artist: "Red Velvet",
      releaseDate: "2022.03.21",
      gender: "female",
    },
    {
      title: "Beatbox",
      artist: "NCT Dream",
      releaseDate: "2022.05.30",
      gender: "male",
    },
    {
      title: "Attention",
      artist: "New Jeans",
      releaseDate: "2022.08.01",
      gender: "female",
    },
    {
      title: "Rush Hour",
      artist: "Crush(feat. j-hope of BTS",
      releaseDate: "2022.09.22",
      gender: "male",
    },
  ];

  const [playlist, setPlayList] = useState(data);

  return (
    <>
      <h1>K-POP 플레이 리스트</h1>
      <Main data={data} playlist={playlist} setPlayList={setPlayList} />
    </>
  );
}

export default App;
