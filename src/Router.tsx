import React from 'react';  
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages';
import { RouterLayout } from './common/RouterLayout';
export const AppRouter: React.FC = () => {
    return(
        <Routes>
            <Route path='/' element={<RouterLayout/>}>
                <Route path='/' element={<HomePage/>}/>
            </Route>
        </Routes>
    )
}