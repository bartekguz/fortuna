import './App.css';
import Particles from 'react-particles-js';
import React, { useState } from 'react';
import CouponLink from './components/CouponLink/CouponLink';
import MatchesTable from './components/MatchesTable/MatchesTable';

const particlesOptions = {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 500
            }
        }
    }
}

function App() {

    const [input, setInput] = useState('');
    const [tableUrl, setTableUrl] = useState('');

    const onInputChange = (event) => {
        setInput(event.target.value);
    }

    const onButtonSubmit = () => {
        setTableUrl(input)
    }

    return (
        <div className="App">
            <Particles
                className="particles"
                params={particlesOptions}
            />
            <CouponLink
                onInputChange={onInputChange}
                onButtonSubmit={onButtonSubmit}
            />
            <MatchesTable tableUrl={tableUrl}/>
            {/*<ResultsTable/>*/}
        </div>
    );
}

export default App;
