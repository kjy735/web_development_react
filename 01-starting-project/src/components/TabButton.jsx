// export default function TabButton({label}) {
//   return (
//     <li>
//       <button>{label}</button>
//     </li>
//   );
// }

// export default function TabButton(props) {
//   return (
//     <li>
//       <button>{props.label}</button>
//     </li>
//   );
// }
//---------------------------------------------------------- children
// props이용
// export default function TabButton(props) {
//   return(
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
// }

// 구조분해 이용
export default function TabButton({children, onSelect}) {


  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}