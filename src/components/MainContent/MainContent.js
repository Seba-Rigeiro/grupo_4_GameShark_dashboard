import react from 'react';
import ContentRowTop from './ContentRowTop'
import ContentRowTotal from './ContentRowTotal'
import LastGame from './LastGame'
import GenreDB from './GenreDB'


function MainComponent(){
    return(
        
			<div id="content">
                <div className="container-fluid">
                    <ContentRowTop />
                    <div className="row">
                    <ContentRowTotal endpoint="http://localhost:3001/api/products" title="Total de juegos"/>
                    <ContentRowTotal endpoint="http://localhost:3001/api/users" title="Total de usuarios"/>
                    <ContentRowTotal endpoint="http://localhost:3001/api/platforms" title="Total de plataformas"/>
                    </div>
                    
                    <div className="row">
                        <LastGame/>
                        <div className="col-lg-6 mb-4">						
                            <div className="card shadow mb-4">
                                
                                <div className="card-header py-3">
                                    
                                    <h5 className="m-0 font-weight-bold text-gray-800">Generos</h5>
                                </div>
                            
                                <div className="card-body">
                                    <div className="row">
                                        <GenreDB />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default MainComponent;