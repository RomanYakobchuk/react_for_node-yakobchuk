import './App.css';
import {Users, Posts, Comments} from "./components";



function App() {
  return (
      <div>
          <div className={'users_posts'}>
            <Users/>
            <Posts/>
          </div>
          <Comments/>
      </div>
  );
}

export default App;
