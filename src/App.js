import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Topbar from './components/Topbar'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'

function App() {
  return (

    <div id="wrapper">
		<Sidebar />
			<div id="content-wrapper" className="d-flex flex-column">
			  	<Topbar />
			  	<MainContent />
|				<Footer />
			</div>
	</div>
  );
}

export default App;
