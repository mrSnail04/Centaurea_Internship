import React from 'react';


export const Profile = (props) => {
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
            {!props.cart.final_price? <NoProduct/> : <Product user={props.cart}/>}
        </div>

    );
};

const NoProduct = () => (
    <div className="row">
        <div className="col-md-6 offset-md-3">
            <h3 className="text-center">Корзина пуста</h3>
        </div>
    </div>
)

const Product = (props) => (<>
    <div className="row">
        <div className="col-md-6 offset-md-3">
            <h3>Корзина</h3>
            <div className="col-mb-12">
                <table className="table">
                    <thead>
                    <th scope="col">Номер</th>
                    <th scope="col">Сумма</th>
                    <th scope="col">Товар</th>
                    <th scope="col">Количество</th>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">{props.user.id}</th>
                        <td scope="row">{props.user.final_price}</td>
                        <td scope="row">
                            <ul>
                                <li>{props.user.products[0].product.title} </li>
                            </ul>
                        </td>
                        <td scope="row">
                            <div className="input-group">
                                <input type="number" className="form-control" min="0" max="10" placeholder="Qty"
                                       aria-label="Количество"/>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</>)
