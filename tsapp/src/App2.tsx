import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`안녕, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} placeholder='이름을 입력하세요.' onChange={handleInput} />
      <input type="submit" value="제출"></input>
    </form>
  );
}

export default App;
