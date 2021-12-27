export default function Title(props) {
  return (
    <div className="txtContainer">
      <div className="titleTxt">{props.title}</div>
      <div className="titleImg">
        <img src="https://demo.themexbd.com/rtl/shamim/wp-content/uploads/2021/08/bar.png"></img>
      </div>
      {props.children}
      {/* <div className="filterContainer">
        <ul className="productFilter">
          <li>ALL</li>
          <li>JAVASCRIPT</li>
          <li>REACT</li>
          <li>SVELT</li>
          <li>FLUTTER</li>
        </ul>
      </div> */}
    </div>
  );
}
