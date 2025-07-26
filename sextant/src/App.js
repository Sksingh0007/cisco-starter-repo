
import './App.css';
import Banner from './component/Banner';
import Exhibit from './component/Exhibit';
import IpAddress from './component/IpAddress';


function App() {
  return (
    <div>
      <Banner />
      <main className="p-6 max-w-4xl mx-auto">
        <Exhibit title="Your Public IPv4 Address">
          <IpAddress version="v4" />
        </Exhibit>

        <Exhibit title="Your Public IPv6 Address">
          <IpAddress version="v6" />
        </Exhibit>
      </main>
    </div>
  );
}

export default App;
