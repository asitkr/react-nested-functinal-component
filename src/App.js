import './App.css';

//Nasted Fuctional Component

function GrandChild(props) {
  return(
    <div>
      <h1>Grand Child Name: { props.userDatas.grandChildName }</h1>
    </div>
  )
}

function Child(props) {
  return(
    <div>
      <h1>Child Name: { props.userDatas.childName }</h1>
      <GrandChild userDatas={ props.userDatas } />
    </div>
  )
}

function Parent(props) {
  return(
    <div>
      <h1>Parent Name: { props.userDatas.parentName }</h1>
      <Child userDatas={ props.userDatas } />
    </div>
  )
}

function Wife(props) {
  return(
    <div>
      <h1>Wife Name: { props.userDatas.wifeName }</h1>
      <Parent userDatas={ props.userDatas } />
    </div>
  )
}

function Name(props) {
  return(
    <div>
      <h1>Name: { props.userDatas.name }</h1>
      <Wife userDatas={ props.userDatas } />
    </div>
  )
}

function App() {

  const userDatas = {
    name: "Amitab Bachchan",
    wifeName: "Jaya Bachchan",
    parentName: "Harivansh Rai Bachchan",
    childName: "Abhishek Bachchan",
    grandChildName: "Aaradhya Bachchan",
  }

  //simply we can create nested function component inise it
  function Header() {
    return(<h1>Header Nested Component</h1>)
  }

  return (
    <div className="App">
      <h1>Information Data</h1>
      <Name userDatas={ userDatas } />

      <hr />
      {/* 1st way to call the nested funtional component */}
      <Header />

      {/* 2nd way to call the nested funtional component */}
      {Header()}
    </div>
  );
}

export default App;
