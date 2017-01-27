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
            <MuiThemeProvider>
                <Slider />
            </MuiThemeProvider>
        )
    }
}

export default Oscillator
