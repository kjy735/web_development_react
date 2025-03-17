import Button from './Button';
import KpopList from './KpopList';

function Main({data, playList, setPlayList}) {
  return (
    <>
      <Button data={data} setPlayList={setPlayList} filterType="redvelvet">
        📌레드벨벳 노래 찾기
      </Button>
      <Button data={data} setPlayList={setPlayList} filterType="male">
        📌남자 아티스트 노래 찾기
      </Button>
      <Button data={data} setPlayList={setPlayList} filterType="female">
        📌 여자 아티스트 노래 찾기
      </Button>
      <KpopList playList={playList}/>
    </>
  )
}

export default Main;