import {Forms, FormsForm} from "./components";

import './App.css'

function App() {

    return (
        <div>
            <div className="flex">
                <FormsForm/>
                {/*<DogsForm/>*/}
            </div>
            <hr/>
            <div className="flex">
                <Forms/>
                {/*<Dogs/>*/}
            </div>
        </div>
    );
}

export default App;
