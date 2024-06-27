import { useState } from "react";
import styles from "./Accordion.module.css";

function Accordion() {
  const data = [
    {
      id: "1",
      question: "How React Works? How Virtual DOM works in React?",
      answer:
        "React works on Virtual DOM. When a state changes in a component, it runs a diffing algorithm. This identifies that what has been changed in the virtual DOM. The next step is reconciliation which updates the DOM with diff result.",
    },
    {
      id: "2",
      question: "What is JSX?",
      answer:
        "JSX stands for JavaScript XML. It is a syntax extension of JavaScript, and it comes with the full power of JavaScript. JSX create React “elements”. You will see the syntax of JSX wrapped in curly braces. After compilation JSX expressions become the regular JavaScript objects which means you are allowed to use JSX inside if statements and for loops, assign it to a variable, accept it as an argument and return it from functions. ",
    },
    {
      id: "3",
      question: "What is ReactDOM, and what is the Difference Between ReactDOM and React?",
      answer:
        "Earlier ReactDOM was part of React but later React and ReactDOM were split into two different libraries. Basically, ReactDOM works like glue between React and the DOM. We can use it for one single thing: mounting with ReactDOM.",
    },
    {
      id: "4",
      question: "Difference Between a Class Component and a Functional Component?",
      answer:
        "In the class component, you can use additional features such as local state and lifecycle hooks. Adding more into it, to enable your component and to have direct access to our store and thus to holds state. When the component just receives props and renders them to the page. It Is called a ‘stateless component’ for which pure function can be used.",
    },
    {
      id: "5",
      question: "What is the Difference Between State and Props?",
      answer:
        "When a component mounts in a React app, the state data structure starts with the default value. Across time, it is mutated, mostly as a result of user events. Props which is the shorthand for properties are a Component configuration. Basically, props work like an argument that defines how components talk to each other. Props are immutable and as far as components are receiving them is concerned.",
    },
  ];

  const [isSelected, setIsSelected] = useState(false);

  function toggle(index) {
    if (isSelected === index) {
      return setIsSelected(false);
    }

    setIsSelected(index);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.accordion}>
        <h1 className={styles.heading}>Most Asked React Questions</h1>
        {data.map((item, index) => (
          <div key={item.id} className={styles.item} onClick={() => toggle(index)}>
            <div className={styles.title}>
              <h2>{item.question}</h2>
              <span>{isSelected === index ? "-" : "+"}</span>
            </div>
            <div className={isSelected === index ? `${styles.content} ${styles.show}` : `${styles.content}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
