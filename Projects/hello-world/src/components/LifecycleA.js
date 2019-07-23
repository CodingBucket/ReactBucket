import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Hasan'
        }
        console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                LifecycleA
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
