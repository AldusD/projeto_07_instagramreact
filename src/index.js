import ReactDOM from 'react-dom';

import NavBar from './navbar.js';
import Corpo from './corpo.js';
import FundoMobile from './fundo-nobile.js';

function App() {
    return (
        <div>   
            <NavBar />
            <Corpo />
            <FundoMobile />
        </div> 
    );
}

ReactDOM.render(<App />, document.querySelector('.root'));