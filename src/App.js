import './App.css';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="h-full w-full flex flex-row bg-[#1f1f24] ">
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default App;
