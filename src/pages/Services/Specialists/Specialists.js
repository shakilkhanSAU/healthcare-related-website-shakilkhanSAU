import React from 'react';
import { Row } from 'react-bootstrap';
import useSpecialist from '../../../hooks/useSpecialist';
import SingleSpecialist from './SingleSpecialist/SingleSpecialist';

const Specialists = () => {
    const { doctors } = useSpecialist();
    return (
        <Row xs={1} md={3} className="g-4">
            {
                doctors?.map(doctor => <SingleSpecialist
                    key={doctor?.key}
                    doctor={doctor}
                ></SingleSpecialist>)
            }
        </Row>
    );
};

export default Specialists;