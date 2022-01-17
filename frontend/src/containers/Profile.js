import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {API} from "../api/api";


export const Profile = (props) => {
    useEffect(() => {
        props.getCart();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h3 className="text-center">Профиль {props.user.username}</h3>
                    <hr/>
                    <div className="col-sm">
                        <h5 className='text-center'>UserName: {props.user.username}</h5>
                        <h5 className='text-center'>First Name: {props.user.first_name}</h5>
                        <h5 className='text-center'>Last Name: {props.user.last_name}</h5>
                        <h5 className='text-center'>Email: {props.user.email}</h5>
                    </div>
                    <hr/>
                </div>
            </div>
            {!props.cart?.products[0] ? <EmptyCart/> : <Cart cart={props.cart} getCart={props.getCart} />}
        </div>
    );
};

const EmptyCart = () => (
    <div className="row">
        <div className="col-md-6 offset-md-3">
            <h3 className="text-center">Корзина пуста</h3>
        </div>
    </div>
)

function round(value) {
        let precision = Math.pow(10, 2);
        return Math.round((parseFloat(value) * precision + 0.0000001)) / precision;
    }

const Cart = (props) => {
    const [products, setProducts] = useState(props.cart.products);

    const updateCount = (count, id) => {
        let index = products.findIndex(p => p.id === id);
        if (index >= 0) {
            let p = products[index];
            let newProduct = {...p, qty: count};
            let newProducts = [...products];
            newProducts[index] = newProduct;
            setProducts(newProducts);
        }
    }

    let total = round(products.reduce((acc, p) => acc + (p.qty * p.product.price), 0));

    return <>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h3>Корзина</h3>
                <div className="col-mb-12">
                    <table className="table">
                        <thead>
                        <th scope="col" >
                            <span style={{display: 'flex', justifyContent: 'flex-start'}}>Товар</span>
                        </th>
                        <th scope="col" >
                            <span style={{display: 'flex', justifyContent: 'flex-start'}}>Цена</span>
                        </th>
                        <th scope="col" >
                            <span style={{display: 'flex', justifyContent: 'center'}}>Количество</span>
                        </th>
                        </thead>
                        <tbody>
                        {products.map(product => <Product key={product.id} count={product.qty} product={product}
                                                          updateCount={updateCount} getCart={props.getCart}/>)}
                        </tbody>
                    </table>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <h5 style={{marginTop: '8px'}}><span >Итого: </span><span>{total}</span></h5>
                            </div>
                            <div className="col-sm" style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <button type="button" className="btn btn-outline-success">Купить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

const Product = ({product, count, updateCount, getCart}) => {

    const [countlimit, setCountlimit] = useState(1);
    const getCountLimit = async () => {
        if (product.product.qty_ticket > 10) {
            await setCountlimit(product.product.qty_ticket);
            console.log(countlimit);
        } else {
            await setCountlimit(10);
            console.log(countlimit);
        }
    }

    useEffect(() => {
        getCountLimit();
        console.log(countlimit)
    }, []);

    const increase = async () => {
        let result = await API.changeQty(count+1, product);
        updateCount(count + 1, product.id);
        if (result.status === 200) {
            getCart()
        }
    }
    const decrease = async () => {
        let result = await API.changeQty(count-1, product);
        updateCount(count - 1, product.id);
        if (result.status === 200) {
            getCart()
        }
    }

    const del = async () => {
        let result = await API.deleteProduct(product);
        if  (result.status === 204) {
            getCart();
        } else {
            console.log('Ошибка')
        }
    }

    //scope="row"

    return <tr key={product.id}>
        <td>{product.product.title}</td>
        <td>{round(product.product.price * product.qty)}</td>
        <td>
            <span style={{display: 'flex', justifyContent: 'flex-end'}}>
                <button type="button" className="btn btn-outline-info" disabled={count < 2} onClick={decrease}>-</button>
                <span style={{margin: '3px'}} className="btn btn-outline-secondary">{count}</span>
                <button type="button" className="btn btn-outline-info" disabled={count >= countlimit} onClick={increase}>+</button>
                <button style={{marginLeft: '3px', marginRight: '12px'}}
                        type="button" className="btn btn-outline-danger"
                        onClick={del}>Удалить</button>
            </span>
        </td>
    </tr>
}
