import { useEffect, useState } from "react";
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import Gear from '../img/gear.png';

const Cart = (props) => {

    const {orderList, setOrderList} = props;

    const navigate = useNavigate();

    console.log(orderList);

    useEffect(() => {
        axios.get('http://localhost:8000/api/builds')
        .then((res) => {
            console.log(res.data);
            setOrderList(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

    const deleteFilter = (idFromBelow) => {
        console.log('====idFromBelow', idFromBelow)
        axios.delete(`http://localhost:8000/api/builds/${idFromBelow}`)
        .then((res) => {
            console.log(res.data);
            setOrderList(orderList.filter((order, index) => order._id !== idFromBelow));
        })
        .catch((err) => console.log(err))
    };

    return(
        <div className="cart-container">
            <h3 id="cart-header">Your Cart</h3>
        <div>
            <div>
                <Link to='/builds/custom'>Build Another</Link>
                <table>
                    <tbody>
                        {
                        orderList.map((order, index) => (
                            <div className="cart-card" key={index}>
                            <tr>
                                <div className="cart-column">
                                    <div id="cart-center">
                                        <thead id="cart-custom">{order.fullName}'s PC</thead>
                                        <img id="cart-gear" src={Gear} alt="gear" />
                                        <p id="cart-custom">Custom</p>
                                    </div>
                                    <div>
                                        <button id='cart-btn-remove' onClick={()=> deleteFilter(order._id)}>Remove From Cart</button>
                                        <button id='cart-btn-edit' onClick={()=> navigate(`/builds/edit/${order._id}`)}>Edit</button>
                                    </div>
                                </div>
                            <td>
                                <ul className="cart-column-2">
                                    <li id="cart-list">CPU:  {order.cpu}</li>
                                    <li id="cart-list">GPU:  {order.gpu}</li>
                                    <li id="cart-list">RAM:  {order.ram}</li>
                                    <li id="cart-list">Storage:  {order.storage}</li>
                                    <li id="cart-list">Cooling:  {order.cooling}</li>
                                    <li id="cart-list">Theme:  {order.theme}</li>
                                    <li id="cart-list">Special:  {order.special}</li>
                                </ul>
                                <button id="cart-btn-checkout" onClick={() => navigate(`/builds/checkout/${order._id}`)}>Checkout</button>
                            </td>
                            </tr>
                            </div>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )}

    export default Cart;