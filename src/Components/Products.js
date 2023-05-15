import { useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { add } from '../store/cartSlice'
import { getProducts } from '../store/productSlice'


export const Products = () => {

    // use Dispatch 
    const dispatch = useDispatch()
    const { data: products } = useSelector(state => state.products)
    // Fetch Data
    useEffect(() => {
        dispatch(getProducts())
    }, [])

    // Dispatch an add action 
    const addToCart = (product) => {
        dispatch(add(product))
    }

    // Show Date
    const cards_item = products.map((product) => {
        return (
            <div className="col-md-3" style={{ marginBottom: "10px" }} key={product.id}>
                <Card style={{ width: '18rem' }} className='h-100'>
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px', alignSelf: 'center' }} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            INR: {product.price}
                        </Card.Text>
                    </Card.Body>

                    <Card.Footer style={{ backgroundColor: 'white', borderTopColor: 'transparent' }}>
                        <Button variant="primary" onClick={() => addToCart(product)}>Add To Card</Button>
                    </Card.Footer>
                </Card>
            </div>
        )
    })


    return (
        <>
            <h1>Product Dashboard</h1>
            <div className="row">
                {cards_item}
            </div>
        </>

    )
}