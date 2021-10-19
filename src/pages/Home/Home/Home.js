import React from 'react';
import Services from '../../Services/Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className="pb-5">
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;