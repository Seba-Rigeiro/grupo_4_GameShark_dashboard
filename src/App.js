import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Index from './containers/Index'
import Juegos from './containers/Juegos'
import Usuarios from './containers/usuarios'
import {Switch , Route} from 'react-router-dom'

function App() {
  return (

    <div id="wrapper">
		<Sidebar />
		<Switch>
            <Route exact path="/">
				<Index />
            </Route>
			<Route exact path="/juegos">
				<Juegos />
			</Route>
			<Route exact path="/usuarios">
				<Usuarios />
			</Route>
        </Switch>
			
	</div>
  );
}

export default App;
