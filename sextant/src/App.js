
import './App.css';
import Banner from './component/Banner';
import Exhibit from './component/Exhibit';


function App() {
  return (
    <div>
      <Banner />
      <main className="p-6 max-w-4xl mx-auto">
        <Exhibit title="User Stats">
          <p>Total users: 1,234</p>
        </Exhibit>

        <Exhibit title="System Health">
          <p>Everything is running smoothly! ✅</p>
        </Exhibit>
        </main>
    </div>
  );
}

export default App;
