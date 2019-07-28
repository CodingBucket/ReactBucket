import React, { Component } from 'react'

class ClickCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1}
        })
    }

    render() {
        return (
            <div>
                <button>Clicked X times</button>
            </div>
        )
    }
}

export default ClickCounter
