
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


export const Navigation = () => {

    const cart_products = useSelector(state => state.cart)

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand>Product Redux App</Navbar.Brand>

                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link to="/" as={Link}>Products</Nav.Link>
                    </Nav>

                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Nav.Link to="/card" as={Link}>My bag {cart_products.length}</Nav.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}