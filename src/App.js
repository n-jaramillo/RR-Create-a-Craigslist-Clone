// Import data
import Sidebar from './Sidebar'
import Searchbar from './Searchbar';
import Directory from './Directory';
import Gallery from './Gallery'

// Import components
import './App.css';

function App() {
  return (
    <div>
      <div style={{width: "25%", float: "left"}}>
        <Sidebar />
      </div>
      <div style={{width: "75%", float: "right"}}>
        <Searchbar />
        <Directory />
        <Gallery />
      </div>
    </div>
  )
}

export default App;
