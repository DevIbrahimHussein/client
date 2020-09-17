import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import ReactSpeedometer from "react-d3-speedometer"

class Home extends Component {

    constructor() {
        super();
        this.state = {
            response: 0,
            endpoint: "http://127.0.0.1:4001"
        };
    }

    componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("outgoing data", data => this.setState({ response: data.num }));
    }

    render() {
        const { response } = this.state;
        return (
            <div style={{ textAlign: "center" }}>
                <ReactSpeedometer
                    maxValue={140}
                    value={response}
                    needleColor="black"
                    startColor="orange"
                    segments={10}
                    endColor="red"
                    needleTransition={"easeElastic"}
                    ringWidth={30}
                    textColor={"red"}
                />
            </div>
        )
    }
}
export default Home;