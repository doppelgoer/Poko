import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateMemo from "./Components/CreateMemo";
import MemoList from "./Components/MemoList";
const headAddress = "http://localhost:3001";
function App() {
  const [memo, setMemo] = useState([]);
  const selectMemo = async function () {
    let selectAxios = await axios({
      method: "GET",
      url: `${headAddress}/getMemo`,
    });

    console.log("axios", selectAxios.data);
    setMemo(selectAxios.data);
    // console.log(memo);
    return selectAxios;
  }; //end test fun

  useEffect(() => {
    selectMemo();
  }, []);

  // let localMemo = JSON.parse(localStorage.getItem("memo"));
  // const [memoData, setMemoData] = useState(localMemo);

  // if (localMemo == null) {
  //   setMemoData([]);
  // }

  // localStorage.setItem("memo", JSON.stringify(memoData));

  return (
    <div className="mainpage">
      <center>
        <CreateMemo
          // memoData={memoData}
          // setMemoData={setMemoData}
          memo={memo}
          setMemo={setMemo}
        >
          {" "}
        </CreateMemo>
        {/* <button onClick={test}>hello</button> */}
        <h1> MEMOLIST </h1>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              component={() => <MemoList memos={memo} setMemo={setMemo} />}
            ></Route>
            {/* <Route
            path="/CreateMemo"
            exact
            component={() => (
              <CreateMemo memoData={memoData} setMemoData={setMemoData} />
            )}
          ></Route> */}
          </Switch>
        </Router>
      </center>
    </div>
  );
}

export default App;

// const [test, setTest] = useState({
//   title: "title",
//   content: "content",
//   array: [
//     <h1>h1tag</h1>,
//     "just text",
//     <input type="radio"></input>,
//     <div>divtag</div>,
//   ],
// });
// function settestfunc() {
//   setTest({
//     title: "update title",
//     content: "update content",
//     array: test.array,
//   });
// }
// const [hanatest, sethana] = useState({
//   number: "1",
// });
// function sethana1() {
//   sethana({
//     number: "2",
//   });
// }
// const numbers = [1, 2, 3, 4, 5];
// const numPlus1 = numbers.map((number) => <li>{number}</li>);
// const [kyePrac, asdf] = useState([
//   {
//     id: 0,
//     name: "hana",
//     age: "10",
//   },
//   {
//     id: 0,
//     name: "hana2",
//     age: "20",
//   },
//   {
//     id: 0,
//     name: "hana3",
//     age: "30",
//   },
// ]);

// const name = "react";

// // <div className="App">
//   <Header></Header>
//   <div>{name === "react" ? <h1>If test - True</h1> : <h1>False</h1>}</div>
//   <div> {name === "reaaact" ? <h1>True</h1> : null}</div>
//   <div> {name === "reaaaaact" && <h1> True</h1>}</div>
//   <Body
//     title={test.title}
//     updateTitle={settestfunc}
//     number={hanatest.number}
//     updateNum={sethana1}
//     array={test.array}
//     numbers={numbers}
//     numPlus1={numPlus1}
//     kyePrac={kyePrac}
//   ></Body>
//   {/* </div> */}
