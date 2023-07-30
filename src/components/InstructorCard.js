import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function InstructorCard({instructor}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={instructor.profile_image.url} />
            <Card.Body>
                <Card.Title>{instructor.title}</Card.Title>
                <Card.Text>
                    {instructor.short_bio}
                </Card.Text>
                <Button variant="primary" href={`/instructor/${instructor.id}`}>Show</Button>
            </Card.Body>
        </Card>
    );
}

export default InstructorCard;