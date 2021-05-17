import react from 'react';
import Topbar from '../components/Topbar'
import MainContent from '../components/MainContent/MainContent'
import Footer from '../components/Footer/Footer'

function Index () {
    return (
        
        <div id="content-wrapper" className="d-flex flex-column">
            <Topbar />
            <MainContent />
|			<Footer />
        </div>
        
    )
}

export default Index;