
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
import { CORE_CONCEPTS } from "./data";

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.title}/>
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
        <section id="core-concepts">
          <h2>핵심 개념들 of React</h2>
          <ul>
            <CoreConcepts image={CORE_CONCEPTS[0].image}  title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
