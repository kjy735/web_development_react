import { useState } from "react";

function MyForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    alert(`welcome ${firstName} ${lastName}`);
    event.preventDefault();
  }

  // 나머지 부분을 전부 완성해서 MyForm3.jsx와 동일하게
  // 동장할 수 있도록 작성하시오

  // 단, handleChange를 정의하지 말고 연습삼아 
  // 각 input의 onChange 부분에 화살표 함수를 통해 정의

  return(
    <form onSubmit={handleSubmit}>
      <label>First Name </label>
      <input type="text" onChange={event => setFirstName(event.target.vlaue)} value={firstName} />
      <br />
      <label>Last Name </label>
      <input type="text" onChange={(event) => setLastName(event.target.vlaue)} value={lastName} />
      <br />
      <label>Email </label>
      <input type="email" onChange={(event) => setEmail(event.target.vlaue)} value={email} />
      <br />
      <input type="submit" value="제출" />
    </form>
  );
}

export default MyForm;