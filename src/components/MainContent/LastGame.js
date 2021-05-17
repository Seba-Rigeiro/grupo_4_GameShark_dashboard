import react, { Component } from 'react';

class LastGame extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        fetch("http://localhost:3001/api/products/lastAdded")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({data: data.data[0]})
            })

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
                                <h2>{this.state.data.name}</h2>
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={"http://localhost:3001/img/products/" +  this.state.data.image}/>
                                
                            </div>
                            <p>
                                {this.state.data.description}
                            </p>
                            <a className="btn btn-danger" target="_blank" rel="nofollow" href="">Ver detalles</a>
                        </div>
                    </div>
                </div>
)

    }
       
}

export default LastGame;





