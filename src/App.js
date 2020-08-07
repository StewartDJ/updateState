import React, {Component} from 'react'

class App extends Component {
  state = {
    count: 0
  }
 
  countUp = () => {

    const inputValue = parseInt(document.getElementById("input").value);

    this.setState(
      {count: this.state.count + inputValue}
    )
  }

  countDown = () => {
    const inputValue = parseInt(document.getElementById("input").value);
    this.setState(
      {count: this.state.count - inputValue}
     
    )
  }

plusOne = () => {
    this.setState(
      {count: this.state.count + 1}
     
    )
  }

  minusOne = () => {
    this.setState(
      {count: this.state.count + 1}
     
    )
  }






  render () {
    
return (
        <div className='App'>
        <center>
        <p>The current state is:</p>
        <h4>{this.state.count}</h4>
        <form onSubmit={this.handleSubmit}>
        <p>Add A Number Below </p>
        <input type="text"  id="input" value={this.state.value} onChange={this.handleChange} required/>
        </form>
      <br/>
        <button onClick={this.countDown}>Count Down</button>
        <button onClick={this.countUp}>Count Up</button>   
        <button onClick={this.plusOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>   
       
       
        </center>
      </div>
    )
}
}
export default App