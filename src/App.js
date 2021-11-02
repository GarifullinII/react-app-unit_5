import './App.css';
import React from 'react';


function App() {
  
  const [st1, setSt1] = React.useState([]);
  let task1Value = React.useRef();

  const [st2, setSt2] = React.useState(0);

  const [st3, setSt3] = React.useState([]);

  const [st4, setSt4] = React.useState(0);

  const [st5, setSt5] = React.useState([]);

  const [st6, setSt6] = React.useState([]);


  function task1() {
    let inputValue = task1Value.current.value;

    let st1Value = [...st1, inputValue];

    setSt1(st1Value);

    task1Value.current.value = '';
  }

  function task2() {
    setSt2(st2 + 1);
  }

  function task3(event) {
    let inputValue = event.target.value;

    let st3Value = [...st3, inputValue];

    setSt3(st3Value);

    event.target.value = '';
  }

  function task4() {
    setSt4(st4 + 1);
  }

  function task5(event) {
    if(event.target.checked) {
      setSt5(event.target.value);
    } else {
      setSt5(0);
    }
  }

  function task6(event) {
    setSt6(event.target.value)
  }

  // function task7() {

  // }
  // function task8() {

  // }
  // function task9() {

  // }
  // function task10() {

  // }

  return (
    <div>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <input type="text" ref={task1Value}/>
        <button className="task-1" onClick={task1}>Push</button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3}/>
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5}/>
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      {/* <section>
        <h2>Task 7</h2>
        <div className="block-7"></div>
        <button className="task-7">Color</button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8"></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9"></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10"></input>
        <button className="task-10">Push</button>
        <div>Тут выводим - форма вывода любая!</div>
      </section> */}
    </div>
  );
}

export default App;
