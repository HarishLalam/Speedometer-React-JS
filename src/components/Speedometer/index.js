import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onClickAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(lastSpeed => ({speed: lastSpeed.speed + 10}))
    }
  }

  onClickApplyBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(lastSpeed => ({speed: lastSpeed.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speed-bg-container">
        <h1 className="speed-title">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speed-img"
        />
        <div className="speed-action">
          <h1 className="present-speed">Speed is {speed}mph</h1>
          <p className="speed-limits">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="speed-buttons">
            <button
              className="accelerate-button"
              type="button"
              onClick={this.onClickAccelerate}
            >
              Accelerate
            </button>
            <button
              className="break-button"
              type="button"
              onClick={this.onClickApplyBreak}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
