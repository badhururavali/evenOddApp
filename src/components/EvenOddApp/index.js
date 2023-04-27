import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, stateOfNum: 'Even'}

  changeNumber = () => {
    const num = parseInt(Math.random() * 100)
    if (num % 2 === 0) {
      this.setState({stateOfNum: 'Even'})
    } else {
      this.setState({stateOfNum: 'Odd'})
    }
    this.setState(prevState => ({count: prevState.count + num}))
  }

  render() {
    const {count, stateOfNum} = this.state
    return (
      <div className="bg-container">
        <div className="evenOddContainer">
          <h1 className="count-heading">Count {count}</h1>
          <p className="evenOdd"> Count is {stateOfNum}</p>
          <button type="button" className="button" onClick={this.changeNumber}>
            Increment
          </button>
          <p className="text">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
