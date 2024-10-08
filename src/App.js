import './App.css'
import MainDash from '../src/components/MainDash/MainDash'
import Sidebar from '../src/components/Sidebar'
import RightSide from '../src/components/RigtSide/RightSide'

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;