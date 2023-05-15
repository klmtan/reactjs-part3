import Counter from "./Counter";
import { SubjectList } from "./SubjectList";
import TempConverter from "./TempConverter";
const cmsc = [
  { code: "CMSC 100", desc: "Web Programming" },
  { code: "CMSC 23", desc: "Mobile Development" },
];
function App() {
  return (
    <div className="App">
      Hello World
      <Counter val={0} />
      <SubjectList list={cmsc} />
      <TempConverter />
    </div>
  );
}

export default App;
