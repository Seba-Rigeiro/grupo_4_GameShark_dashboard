import react from 'react';
import ContentRowTop from './ContentRowTop'
import ContentRowMovies from './ContentRowMovies'
import LastGame from './LastGame'
import GenreDB from './GenreDB'


function MainComponent(){
    return(
        
			<div id="content">
                <div className="container-fluid">
                    <ContentRowTop />
                    <ContentRowMovies />
                    <div className="row">
                        <LastGame />
                        <GenreDB />
                    </div>
                </div>
            </div>
        
    )
}

export default MainComponent;