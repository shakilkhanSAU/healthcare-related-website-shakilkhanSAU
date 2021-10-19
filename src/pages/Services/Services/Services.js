
import { Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css'

const Services = () => {
    const { services } = useServices();
    return (
        <div className="container services px-4" id="services">
            <h2>Medical Services</h2>
            <hr />
            <div className="pt-3">
                <Row xs={1} md={3} className="g-5">
                    {
                        services.map(service => <ServiceCard
                            key={service.id}
                            service={service}
                        ></ServiceCard>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;