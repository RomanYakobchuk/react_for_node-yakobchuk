import {useEffect, useState} from "react";


export const FunctionComponent = (props) => {

    console.log('constructor')

    const {ssss} = props

    const [state, setState] = useState({a: 0, b: 25});

    const inc = () => {
      setState({...state, a: state.a +1})
    }

    useEffect(() => {
        console.log('componentDidMount')
        return () => {
            console.log('componentWillUnmount')
        }
    }, [])

    useEffect(() => {
        console.log('componentDidUpdate')
    }, [props, state])

    return (
        <div>
            {console.log('render')}
            Hello from Function Component
            <div>A: {ssss}</div>
            <div>A: {state.a}</div>
            <div>B: {state.b}</div>

            <button onClick={() => inc()}>inc</button>
        </div>
    );
};


