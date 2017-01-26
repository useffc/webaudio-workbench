import React, {Component} from "react"
import ReactDOM from "react-dom"
import Oscillator from "./Oscillator.jsx"

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Oscillator />
        )
    }
}

ReactDOM.render((
    <App />
), document.getElementById("app"))
