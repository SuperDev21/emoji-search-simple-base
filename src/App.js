import React from "react";
import "./App.css";
import Line from "./components/Line";
import emojis from "./emojis.json";
import Search from "./components/Search/Search";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {emojis: emojis, searchValue: ""}
    this.copyEmojis = emojis  // comment déclarer un constente dans le constructor
  }

  clickToFilter = (kind) =>{
    // console.log('bonjour', kind)
    const newEmogis = [...emojis]
    if (kind === "All"){
      // console.log('bonjour je suis dans All')
      this.setState({emojis: emojis})
    }
    if (kind === "Animals"){
      // console.log('bonjour je suis dans Animals') 
      this.setState({emojis: newEmogis.filter(elem => elem.keywords.includes("animal"))})
    }
    if (kind === "People"){
      this.setState({emojis: newEmogis.filter(elem => elem.keywords.includes("people"))})
    }
 
  }


  handelChange = (e) =>{
    let newEmojis = [...emojis]
    this.setState({searchValue: e.target.value,
      emojis: newEmojis.filter((elem) =>  elem.keywords.includes(this.state.searchValue))})
    // console.log(e.target.value)
  }

  filltersearch = (e) =>{
    let newEmojis = [...emojis]
    if(e.key === "Enter")
    this.setState({emojis: newEmojis.filter((elem) =>  elem.keywords.includes(this.state.searchValue))})
  }

  render(){
  return (
    
    <div className="container">
      <h1 className="titre">  My Emoji search </h1>
      <div className='containerBtn'>
        <button onClick={() => this.clickToFilter("All")} >All</button>
        <button onClick={() => this.clickToFilter("Animals")}>Animals</button>
        <button onClick={() => this.clickToFilter('People')} >People</button>
      </div>
      <Search handelChange={this.handelChange} emojis={this.state.emojis} value={this.state.searchValue} filltersearch={this.filltersearch}/>
      <Line emojis={this.state.emojis}/>
    </div>
  );
}
}
export default App;
