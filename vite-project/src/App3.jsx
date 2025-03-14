// firstName 과 lastName이라는 상태를 만들기 위해서 코드를 작성해보겠습니다 .md파일을 참조하여 작성하고
// 후에 풀이하고 적용

// import React, {useState} from 'react';

// 하나하나 작성
// const [firstName, setFirstName] = useState('Junho');    // setter정의!
// const [lastName, setLastName] = useState('Bong');

// setFirstName('Captain');
// setLastName('America');

/**
 * 혹은 여러개의 const를 작성해서 속성마다 정의하는 것이 아니라 객체의 형태로 정의할 수도 있음
 */
// 객체 형태
// const [name, setName] = useState({
//   firstName : 'Junho',
//   lastName : 'Bong',
// });

// setName을 사용하게 될 경우의 차이점이 있습니다.
// setName({firstName : 'Captain', lastName : 'America'}); // 객체의 형태로!

// 즉 name과 setName을 통해서 useState의 매개변수가 객체형태로 고정되어 있으므로,
// setName의 argument 또한 객체가 들어가야함
// 이상의 이유로 lastName만 수정하고 싶어도 전부 다 바꿔줘야하거나
// 초기값을 동일하게 집어넣어줘야함
// 그럼 하나씩만 수정하는 방법은?

// 객체의 부분 업데이트를 위한 방법 :
// spread : ES2018 객체 스프레드 구문을 이용 name 상태 객체를 복제하고, fristName의 값을 '이등병'으로 업데이트 한다면

// setName({... name, firstName: '이등병'});


// import {useState} from 'react';
// function App3() {
//   const [name, setName] = useState({
//     firstName : '크리스',
//     lastName = '에반스',
//   });
  
//   return(<div>안녕 {name.firstName} {name.lastName} </div>);
// }

// export default App3
