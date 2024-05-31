import React from 'react';

import  './Header.css';

function HomeLoader() {
    return (
        <div className='loaderContainer'>
            <div className='loader'>
                <div className="logo nav-left">
                <img src='/Icons/tv.png' className="logo" alt='Loading...' />
                <p className='loaderText' style={{ color:'black' }}>MovieBox</p>
                </div>
        
            </div>
        </div>
    );
}

export default HomeLoader;