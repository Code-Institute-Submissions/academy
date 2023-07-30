import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CategoryCard({category}) {
    return (
        <Card style={{ width: '18rem' }}>
            <div>
                <i className={category.icon_class}></i>
            </div>
            <Card.Body>
                <Card.Title>{category.title}</Card.Title>
                <Card.Text>
                    {category.description}
                </Card.Text>
                <Button variant="primary" href={`/instructor/${category.id}`}>Show</Button>
            </Card.Body>
        </Card>
    );
}

export default CategoryCard;