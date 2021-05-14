import react, { Component } from 'react';

class GenreDB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    componentDidMount(){
        fetch("http://localhost:3001/api/categories")
            .then(res => res.json())
            .then(data => console.log(data))
    }


    render() {
        return(<div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    
                </div>
            </div>
        </div>
        
        )}
       
}

export default GenreDB;