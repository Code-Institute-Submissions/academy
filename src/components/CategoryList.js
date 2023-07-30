import {useEffect, useState} from "react";
import {axiosClient} from "../api/axiosDefaults";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import CategoryCard from "./CategoryCard";

function CategoryList({title, query}) {
    const [categories, setCategories] = useState({results: []});
    useEffect(() => {
        const handleMount = async () => {
            try {
                const categories = await axiosClient.get('/categories?{query}');
                setCategories(categories);
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
                {categories.results.map((category) => (
                    <Col md={4}>
                        <CategoryCard category={category} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CategoryList;
