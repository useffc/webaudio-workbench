import React, {Component} from "react"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Slider from "material-ui/slider"

class Oscillator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            volume: 0.025,
            frequency: 440.01
        }
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <Slider axis="y" style={{height: "200px"}} onChange={volumeSliderHandler} value={this.state.volume} />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <Slider axis="y" style={{height: "200px"}} onChange={frequencySliderHandler} min={0} max={22050} value={this.state.frequency} />
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Oscillator
