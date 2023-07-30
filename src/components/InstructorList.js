import './App.css';
import {useEffect, useState} from "react";
import {axiosClient} from "./api/axiosDefaults";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import InstructorCard from "./InstructorCard";

function InstructorList({title, query}) {
    const [instructors, setInstructors] = useState({results: []});
    useEffect(() => {
        const handleMount = async () => {
            try {
                const instructors = await axiosClient.get('/instructors?{query}');
                setInstructors(instructors);
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, []);
    return (
        <Container>
            {title && <Row><h1>{title}</h1></Row>}
            <Row>
                {instructors.results.map((instructor) => (
                    <Col md={4}>
                        <InstructorCard instructor={instructor} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default InstructorList;
