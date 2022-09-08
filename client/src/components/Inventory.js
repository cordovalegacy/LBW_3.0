import { useState } from 'react';
import Image from '../img/gear.png';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Inventory = (props) => {

    const {product} = props;

    const {inventoryProduct, setInventoryProduct} = props;

    const navigate = useNavigate();

    // const [inventoryCpu, setInventoryCpu] = useState("");
    // const [inventoryGpu, setInventoryGpu] = useState("");
    // const [inventoryRam, setInventoryRam] = useState("");
    // const [inventoryStorage, setInventoryStorage] = useState("");
    // const [inventoryPsu, setInventoryPsu] = useState("");
    // const [inventoryMotherboard, setInventoryMotherboard] = useState("");
    // const [inventoryCooling, setInventoryCooling] = useState("");
    // const [inventoryCase, setInventoryCase] = useState("");
    // const [inventoryAccessories, setInventoryAccessories] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        const product = {
            cpu: "Ryzen 5 5600x",
            gpu : "RTX 3050",
            ram : "16gb ddr4 3200mhz",
            storage : "SSD, 500gb m.2 nvme",
            psu : "750w 80+ gold",
            motherboard : "b550M",
            cooling : "Stock (air)",
            case : "mATX case w/ 6 fans",
            accessories : "vertical gpu riser cable",
            theme: "green and black",
            budget: "1200",
            fullName: "Starter",
            special: "Inventory - Pre-Build",
            email: "N/A",
            phoneNumber: 0,
        }

        console.log('===product', product)
        axios.post('http://localhost:8000/api/builds/inventory', product)
        .then((response) => {
            console.log(response);
            console.log(response.data);
            setInventoryProduct([...inventoryProduct, response.data]);
            navigate("/builds/cart");
        })
        .catch((err) => {
            console.log(err.response.data);
        }); 
    }   
    
    return (
            <div className='inventory-container-3'>
            <h2 id='inventory-header'>Check out what we have in stock!</h2>
                <div id='inventory-style-3'>
                        <div className='inventory-product-wrapper'>
                            <h3 id='inventory-contact'>Mid-Tier Gaming Computer</h3>
                            <h2 id='inventory-soon'>Coming Soon! Post-Project</h2>
                            <img id='inventory-image' src={Image} alt="product"/>
                            {product.map((parts, index) => {
                                return (
                                    <div>
                                    <div className='inventory-list' key={1}>
                                        <li id='inventory-spec-list'>{parts.cpu}</li>
                                    </div>
                                    <div className='inventory-list' key={2}>
                                        <li id='inventory-spec-list'>{parts.gpu}</li>
                                    </div>
                                    <div className='inventory-list' key={3}>
                                        <li id='inventory-spec-list'>{parts.ram}</li>
                                    </div>
                                    <div className='inventory-list' key={4}>
                                        <li id='inventory-spec-list'>{parts.storage}</li>
                                    </div>
                                    <div className='inventory-list' key={5}>
                                        <li id='inventory-spec-list'>{parts.cooling}</li>
                                    </div>
                                    <div className='inventory-list' key={6}>
                                        <li id='inventory-spec-list'>{parts.motherboard}</li>
                                    </div>
                                    <div className='inventory-list' key={7}>
                                        <li id='inventory-spec-list'>{parts.psu}</li>
                                    </div>
                                    <div className='inventory-list' key={8}>
                                        <li id='inventory-spec-list'>{parts.case}</li>
                                    </div>
                                    <div className='inventory-list' key={9}>
                                        <li id='inventory-spec-list'>{parts.accessories}</li>
                                    </div>
                                    <div className='inventory-list' key={10}>
                                        <li id='inventory-spec-list'>{parts.budget}</li>
                                    </div>
                                    </div>
                                )
                            })}
                            <button onClick={submitHandler} id='add-to-cart'>Add to cart</button>
                            </div>
                            
                        </div>
            <div className='inventory-container-2'>
                <div id='inventory-style-1'>
                    <h3 id='inventory-disclosure'>Disclosure</h3>
                    <p id='inventory-disclosure-info'>All systems come with an <span id='red'>inactive</span> version of Windows 10</p>
                    <p id='inventory-disclosure-info'>All systems come with <span id='red'>Windows OS</span></p>
                    <p id='inventory-disclosure-info'>Systems come with a 15 day moneyback guarantee <span id='red'>IF</span> computer is fully returned with no signs of user damage such as <span id='red'>liquid damage, cracked parts,</span> or <span id='red'>abuse</span>. </p>
                </div>
                <div id='inventory-style-1'>
                    <h3 id='inventory-educate'>Not sure what you're looking at?</h3>
                    <p id='inventory-educate-info'>CPU (computer processing unit) is like the <span id='red'>brain</span> of the computer. These are important for tasks like streaming, gaming, or content creation.</p>
                    <p id='inventory-educate-info'>GPU (graphics processing unit) is like the <span id='red'>brawn</span> of the computer. These are important for tasks like high performance gaming, and video editing.</p>
                </div>
            </div>
        </div>
    )
}


export default Inventory;