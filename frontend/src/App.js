import './App.css';
import Main from './components/Main/Main';
import TopBar from './components/Main/TopBar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="h-screen w-full flex flex-col bg-[#1f1f24] ">
      <TopBar/>
      <Main/>
    </div>
  );
}


export default App;
