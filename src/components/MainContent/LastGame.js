import react, { Component } from 'react';

class LastGame extends Component {
    constructor() {
        super();
        this.state = {
            image: "" ,
            description: "",
            name: ""

        }
    }

    componentDidMount(){
        fetch("http://localhost:3001/api/products/lastAdded")
            .then(res => res.json())
            .then(data => this.setState({
                image: data.data[0].image
            }))

    }


    render() {
        return (
    <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Ultimo juego agregado</h5>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={this.state.image} alt={this.state.name}/>
                            </div>
                            <p>{this.state.description}</p>
                            <a className="btn btn-danger" target="_blank" rel="nofollow" href="">Ver detalles</a>
                        </div>
                    </div>
                </div>
)
    
    }
       
}

export default LastGame;





