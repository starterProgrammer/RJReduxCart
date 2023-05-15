import { useSelector ,useDispatch } from "react-redux"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from '../store/cartSlice'

export const Cart = () => {

    const dispatch = useDispatch()

    const cart_products = useSelector(state => state.cart)

    const removeProduct = (product_id) => {
        console.log(product_id);
        dispatch(remove(product_id))
    }
    // Show Date
    const cards_item = cart_products.map((product) => {
        return (
            <div className="col-md-3" style={{ marginBottom: "10px" }}>
                <Card style={{ width: '18rem' }} key={product.id} className='h-100'>
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px', alignSelf: 'center' }} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            INR: {product.price}
                        </Card.Text>
                    </Card.Body>

                    <Card.Footer style={{ backgroundColor: 'white', borderTopColor: 'transparent' }}>
                        <Button variant="primary" onClick={() => removeProduct(product.id)}>Remove</Button>
                    </Card.Footer>
                </Card>
            </div>
        )
    })

    return (
        <>
            <h1>Card Component</h1>
            <div className="row">
                {cards_item}
            </div>
        </>



    )
}