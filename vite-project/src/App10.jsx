import './App.css';

// function App10() {
//   let drink = 0;  // 일반 변수 사용
  
//   const drinkWater = () => {
//     drink += 1;
//     console.log(`버튼 클릭 횟수 : ${drink}번`);
//   };

//   return (
//   <>
//     <p>
//       오늘은 물은 <strong> {drink} </strong> 잔을 충전했습니다!!
//     </p>
//     <br/><br/><br/>
//     <button onClick={drinkWater}>💧</button>
//   </>
//   );
// }


import { useState } from 'react';

function App10() {
  const [drink, setDrink] = useState(0);

  const drinkWater = () => {
    setDrink(drink + 1);
  };

    return (
  <>
    <p>
      오늘은 물은 <strong> {drink} </strong> 잔을 충전했습니다!!
    </p>
    <br/><br/><br/>
    <button onClick={drinkWater}>💧</button>
    {console.log(`버튼클릭 횟수 : ${drink}`)}
  </>
  );
}

export default App10;