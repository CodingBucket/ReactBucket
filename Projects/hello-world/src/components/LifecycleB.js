import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Hasan'
        }
        console.log('LifecycleB Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null;
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    changeState = () => {
        this.setState({
            name: 'State changed'
        })
    }

    render() {
        console.log('LifecycleB render')
        return (
            <div>
                <div>LifecycleB</div>
                <button onClick={this.changeState}>Change State</button>
            </div>
        )
    }
}

export default LifecycleB
