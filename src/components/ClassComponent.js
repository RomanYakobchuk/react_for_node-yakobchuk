import {Component} from "react";

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 0,
            b: 25,
        }
        console.log('constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     if(prevState.a === 5){
    //         return 'Snapshot'
    //     }
    //     return null
    // }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        console.log('snapshot', snapshot);
    }

    inc() {
        this.setState(prev => ({a: prev.a + 1}))
    }

    render() {
        console.log('render')
        return (
            <div>
                Hello from Class Component
                <div>A: {this.props.ssss}</div>
                <div>A: {this.state.a}</div>
                <div>B: {this.state.b}</div>

                <button onClick={() => this.inc()}>inc</button>
            </div>
        )
    }
}

export {ClassComponent}