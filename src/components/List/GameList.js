import react, { Component } from 'react';

class GameList extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        fetch("http://localhost:3001/api/products")
            .then(res => res.json())
            .then(data => { this.setState({data: data.data})})
    }


    render() {
        return (
            <div className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="clo mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">listado de juegos</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    <p>{this.state.data && this.state.data.map((data) => <li>{data.name}</li>)}</p>
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-film fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            )}
       
}

export default GameList;