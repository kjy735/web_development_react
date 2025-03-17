// props로 data, setPlayList를 전달받을 예정
import App from '../App.jsx';
import React from 'react';

function Button({data, setPlayList, filterType, children}) {
  const handleClick = () => {
      // 버튼의 내용에 따라 플레이리스트를 필터링
      let result = [...data];
    
      if(filterType === '📌레드벨벳 노래 찾기') {
        result = data.filter((song) => song.artist === "Red Velvet");
      }
      if(filterType === '📌남자 아티스트 노래 찾기') {
        result = data.filter((song) => song.gender === "male");
      }
      if(filterType === '📌 여자 아티스트 노래 찾기') {
        result = data.filter((song) => song.gender === "female");
      }
    
    setPlayList(result);
  };
  
  return(
    <button onClick={handleClick}>{children}</button>
  );
}

export default Button;