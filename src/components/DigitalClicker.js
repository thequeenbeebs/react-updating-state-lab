import React from 'react'

class DigitalClicker extends React.Component {
    constructor() {
        super();
        this.state = {
            timesClicked: 0
        }
    }

    updateClicker = () => {
        let updatedState = {
            timesClicked: this.state.timesClicked + 1
        }
        this.setState(updatedState)

    }

    render() {
        return (
            <button onClick={() => this.updateClicker()}>
                {this.state.timesClicked}
            </button>
        )
    }
}

export default DigitalClicker;
