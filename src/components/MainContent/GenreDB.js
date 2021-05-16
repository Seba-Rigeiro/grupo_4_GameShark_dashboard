import react, { Component } from 'react';

class GenreDB extends Component {
    constructor() {
        super();
        this.state = {
            name: []
        }
    } 

    componentDidMount(){
        fetch("http://localhost:3001/api/categories")
            .then(res => res.json())
            .then(data => {this.setState({name: data.data})})
    }

    render() {
        return(
        <div className="col-lg-6 mb-4">
                {this.state.name && this.state.name.map(name =>

                    <div className="card bg-dark text-white shadow">
                    <div className="card-body">
                    {name.name}
                    </div>
                    </div>
                    
                )}
        </div>
        
        )}
       
}

export default GenreDB;