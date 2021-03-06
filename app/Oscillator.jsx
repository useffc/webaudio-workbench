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

    componentDidUpdate() {
        console.log(this)
    }

    modifyVolume(event, volume) {
        this.setState({volume: volume})
    }

    modifyFrequency(event, frequency) {
        this.setState({frequency: frequency})
    }

    render() {
        let gainNode = this.props.audio.createGain()
        gainNode.gain.value = this.state.volume

        let osc = this.props.audio.createOscillator()
        osc.type = "square"
        osc.connect(this.props.audio.destination)
        osc.frequency.value = this.state.frequency

        let volumeSliderHandler = this.modifyVolume.bind(this)
        let frequencySliderHandler = this.modifyFrequency.bind(this)
        //osc.start()
        return (
            <div>
                volume
                <MuiThemeProvider>
                    <Slider axis="y" style={{height: "200px"}} onChange={volumeSliderHandler} value={this.state.volume} />
                </MuiThemeProvider>
                freq
                <MuiThemeProvider>
                    <Slider axis="y" style={{height: "200px"}} onChange={frequencySliderHandler} min={0} max={22050} value={this.state.frequency} />
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Oscillator
