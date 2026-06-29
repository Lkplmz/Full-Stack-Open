import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Total } from "./components/Total";

const App = () => {
  /// The original content for the exercise:

  /*
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  */

  /// However I decided will be better an dmore eficient refactorize it like this:
  const course = "Half Stack application development";
  const parts = [
    "Fundamentals of React",
    "Using props to pass data",
    "State of a component",
  ];
  const exercises = [10, 7, 14];

  return (
    <>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </>
  );
};

export default App;
