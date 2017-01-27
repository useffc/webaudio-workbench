import React, {Component} from "react"
import ReactDOM from "react-dom"
import Oscillator from "./Oscillator.jsx"

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let audio = new AudioContext
        return (
            <Oscillator audio={audio} />
        )
    }
}

ReactDOM.render((
    <App />
), document.getElementById("app"))
