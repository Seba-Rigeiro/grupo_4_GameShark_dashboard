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
                    <ContentRowTotal endpoint="http://localhost:3001/api/products" title="Total de juegos" total="21"/>
                    <ContentRowTotal endpoint="http://localhost:3001/api/users" title="Total de usuarios" total="79"/>
                    <ContentRowTotal endpoint="http://localhost:3001/api/platforms" title="Total de plataformas" total="4"/>
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
                                        <GenreDB title="Fantasia"/>
                                        <GenreDB title="FPS"/>
                                        <GenreDB title="Horror"/>
                                        <GenreDB title="Point and Click"/>
                                        <GenreDB title="Aventura"/>
                                        <GenreDB title="MMORPG"/>
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