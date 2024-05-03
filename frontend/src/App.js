import './App.css';
import Main from './components/Main/Main';
import TopBar from './components/Main/TopBar';


function App() {
  return (
    <div className="h-screen w-full flex flex-col bg-[#1f1f24] ">
      <TopBar page={'generate'}/>
      <Main/>
    </div>
  );
}


export default App;
