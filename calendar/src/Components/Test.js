

function Test1(props) {
  function plusDataNum(){
    props.data1((props.data)+1);
  }
  function minusDataNum(){

    props.data1(props.data-1);
  }
  return(
    <div>{props.data}<br/>
    <button onClick={plusDataNum}>풀러스</button><br/>
    <button onClick={minusDataNum}>마이너스</button></div>
  )
}

export default Test1;