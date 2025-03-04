import { useContext } from "react";
// 제가 매번 작성하기 귀찮아서 import react form 'react'가 있을수도 있음
import AuthContext from "./AuthContext";

function MyComponent() {
  const authContext = useContext(AuthContext);

  return(
    <>
      Welcome {authContext}🤗
    </>
  );
}

export default MyComponent;