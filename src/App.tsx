import React from 'react';
import './App.scss';
import {Routes, Route, HashRouter} from 'react-router-dom';
import CocktailsContainer from './containers/CocktailsContainer/CocktailsContainer';
import {NotFoundComponent} from './components/NotFoundComponent/NotFoundComponent';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<CocktailsContainer />} />
                <Route path="/not-found" element={<NotFoundComponent/>} />
                <Route path="/:cocktailType" element={<CocktailsContainer />} />
                <Route path="*" element={<NotFoundComponent/>} />
            </Routes>
        </HashRouter>
    );
}

export default App;
