import react from 'react';
import ContentRowTop from './ContentRowTop'
import ContentRowMovies from './ContentRowMovies'
import LastGame from './LastGame'
import GenreDB from './GenreDB'


function MainComponent(){
    return(
        
			<div id="content">

            {/* Content Row Top */}
            <div className="container-fluid">
                <ContentRowTop />

                <ContentRowMovies />
            
                
                
                <div className="row">
                    
                    <LastGame />

                    <GenreDB />

                    {/* Genres in DB */}
                    
                </div>
            </div>
            {/*End Content Row Top*/}
        </div>
        
    )
}

export default MainComponent;