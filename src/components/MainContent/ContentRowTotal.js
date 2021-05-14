import react, { Component } from 'react';

class ContentRowTotal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: props.valor ,
            title: props.title ,
            data: null ,
            endpoint: props.endpoint 
        }
    }

    componentDidMount(){
        fetch(this.state.endpoint)
            .then(res => res.json())
            .then(data => {this.setState({data: data.meta.count})})
    }


    render() {
        return (
            <div className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{this.state.title}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    <h2>{this.state.data}</h2>
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

export default ContentRowTotal;