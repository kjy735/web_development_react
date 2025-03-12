
// import Header from "./components/Header";
// import 이미지 변수명 from "경로";
// import reactImg from './assets/react-core-concepts.png';

// const reactDescriptionsKor = ['근본적인', '결정적인', '핵심적인'];
// const reactDescriptionsEng = ['Fundamental', 'Crucial', 'Core'];

// function getRandomInt(max) {
//   return Math.floor(Math.random() * (max)); // 얘의 return 값은 0~2의 int가 반환됨
//   // 어떻게? Math.random() * (max + 1) 얘의 범위가 0.xxxx ~ 2.xxxx이기 때문
// }

// function Header() {
//   const RandomIndexnum = getRandomInt(reactDescriptionsEng.length);

//   return (
//     <header>
//       <img src={reactImg} alt="Stylized atom" />
//       <h1>React 필수 요소 복습</h1>
//       <p>
//         {reactDescriptionsEng[RandomIndexnum]} React concepts you will need for almost any app you are
//         going to build!
//       </p>

//       <br />
//       대부분의 앱을 위해 당신이 필요로 할 {reactDescriptionsKor[RandomIndexnum]} React 개념 학습✏️
//     </header>   
//   );
// }

import Header2 from "./components/Header/Header2";

function CoreConcepts(props) {
  return (
    <li>
      {/* <img src="..." alt="" /> */}
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>

    
  )
}

function App() {
  return (
    <div>
      <Header2 />
      <main>
        <h2>핵심 개념들</h2>
        <ul>
          {/* <li>Components : 재사용이 가능하여 개발자가 조합하여 최적의 UI를 꾸밀 수 있음</li>
          <li>JSX : HTML적인 방식으로 JS내에 HTML 태그를 작성하여 시인성있게 작성 가능</li> */}
          <CoreConcepts title="Components" description='재사용이 가능하여 개발자가 조합하여 최적의 UI를 꾸밀 수 있음' />
          <CoreConcepts title="JSX" description='리액트 내부에서 자바스크립스와 HTML을 섞어서 사용하여 시인성을 올릴 수 있음' />
          <CoreConcepts title="Props" description='객체의 속성 및 속성값을 상위에서 하위로 전달할 수 있음' />
          <CoreConcepts title="State" description='상태의 변화를 감지하여 변화가 있을 때만 부분적으로 리렌더링을 사용할 수 있음' />
        </ul>
      </main>
    </div>
  );
}

export default App;
