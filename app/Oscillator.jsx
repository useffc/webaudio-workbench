import React, {Component} from "react"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Slider from "material-ui/slider"

class Oscillator extends React.Component {
    constructor(props) {
        super(props)
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
