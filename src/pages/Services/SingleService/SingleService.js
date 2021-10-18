import React from 'react';
import { useParams } from 'react-router';

const SingleService = () => {
    const { serviceId } = useParams();
    return (
        <div className="container py-4">
            <h3>this is service no {serviceId}</h3>
        </div>
    );
};

export default SingleService;