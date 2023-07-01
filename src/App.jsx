import Question1 from './Question1';
import Question2 from './Question2';

export default function App() {
  return (
    <div className='App'>
      <h1>Question 1</h1>
      <Question1 />
      <h1>Question 2 (handles caret jumping to the end)</h1>
      <Question2 />
    </div>
  );
}
