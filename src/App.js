import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Sidebar from './components/Sidebar/Sidebar'
=======
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
>>>>>>> 69c9b3a9bf0df568b47d65238b88a492e2be2dcb

function App() {
  return (

    <div id="wrapper">

		  <Sidebar />


		{/* Content Wrapper */}
		<div id="content-wrapper" className="d-flex flex-column">
			  <Topbar />

			{/* Main Content */}
			<div id="content">

				{/* Content Row Top */}
				<div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/* Content Row Movies*/}
					<div className="row">

						{/* Movies in Data Base */}
						<div className="col-md-4 mb-4">
							<div className="card border-left-primary shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Games in Data Base</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">21</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-film fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Total awards */}
						<div className="col-md-4 mb-4">
							<div className="card border-left-success shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Total awards</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">79</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-award fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Actors quantity */}
						<div className="col-md-4 mb-4">
							<div className="card border-left-warning shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Actors quantity
											</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">49</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-user fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* End movies in Data Base */}
					
	
					{/* Content Row Last Movie in Data Base */}
					<div className="row">
						{/* Last Movie in DB */}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Last game in Data Base</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src="images/mandalorian.jpg" alt=" Star Wars - Mandalorian "/>
									</div>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
								</div>
							</div>
						</div>
						{/* End content row last movie in Data Base */}

						{/* Genres in DB */}
						<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
								</div>
								<div className="card-body">
									<div className="row">
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Acción
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Animación
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Aventura
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Ciencia Ficción
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Comedia
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Documental
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Drama
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Fantasia
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Infantiles
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Musical
												</div>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*End Content Row Top*/}
			</div>
			{/* End of MainContent */}

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
