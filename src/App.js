import {FunctionComponent} from "./components";
import {useState} from "react";


const App = () => {
    
    const [flag, setFlag] = useState(true);



    return (
        <div>
            <div>
                {flag && <FunctionComponent ssss={'MyProps'}/>}
            </div>
            <button onClick={() => setFlag(prev => !prev)}>Hide</button>
        </div>
    );
};

export default App;