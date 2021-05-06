import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Topbar from './components/Topbar'
import MainContent from './components/MainContent/MainContent'

function App() {
  return (

    <div id="wrapper">
		<Sidebar />
			<div id="content-wrapper" className="d-flex flex-column">
			  <Topbar />
			  <MainContent />


			{/* Footer */}
				<footer className="sticky-footer bg-white">
					<div className="container my-auto">
						<div className="copyright text-center my-auto">
							<span>Copyright &copy; Dashboard 2021</span>
						</div>
					</div>
				</footer>
			{/* End of Footer */}

			</div>
		{/* End of Content Wrapper */}

	</div>
  );
}

export default App;
