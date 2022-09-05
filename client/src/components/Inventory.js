import { useState } from 'react';
import Image from '../img/gear.png';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Inventory = (props) => {

    const {inventoryProduct, setInventoryProduct} = props;

    const navigate = useNavigate();

    const [inventoryCpu, setInventoryCpu] = useState("");
    const [inventoryGpu, setInventoryGpu] = useState("");
    const [inventoryRam, setInventoryRam] = useState("");
    const [inventoryStorage, setInventoryStorage] = useState("");
    const [inventoryPsu, setInventoryPsu] = useState("");
    const [inventoryMotherboard, setInventoryMotherboard] = useState("");
    const [inventoryCooling, setInventoryCooling] = useState("");
    const [inventoryCase, setInventoryCase] = useState("");
    const [inventoryAccessories, setInventoryAccessories] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        const product = {
            inventoryCpu: "Ryzen 5 5600x",
            inventoryGpu : "RTX 3050",
            inventoryRam : "16gb ddr4 3200mhz",
            inventoryStorage : "SSD, 500gb m.2 nvme",
            inventoryPsu : "750w 80+ gold",
            inventoryMotherboard : "b550M",
            inventoryCooling : "Stock (air)",
            inventoryCase : "mATX case w/ 6 fans",
            inventoryAccessories : "vertical gpu riser cable"
        }

        console.log('===product', product)
        axios.post('http://localhost:8000/api/builds/inventory', product)
        .then((response) => {
            console.log(response);
            console.log(response.data);
            setInventoryProduct([product]);
            navigate("/builds/cart");
        })
        .catch((err) => {
            console.log(err.response.data);
        }); 
    }   
    
    return (
        <div>
            <h2 id='inventory-header'>Check out what we have in stock!</h2>
            <div className='inventory-container-2'>
                <div id='inventory-style-2'>
                    <h3 id='inventory-contact'>Mid-Tier Gaming Computer</h3>
                    <div className='inventory-product-wrapper'>
                        <img id='inventory-image' src={Image} alt="product"/>
                        <ul className='inventory-list'>
                            <li value={inventoryCpu} id='inventory-spec-list'>CPU: Ryzen 5 5600x</li>
                            <li value={inventoryGpu} id='inventory-spec-list'>GPU: RTX 3050</li>
                            <li value={inventoryRam} id='inventory-spec-list'>RAM: 16gb ddr4 3200mhz</li>
                            <li value={inventoryStorage} id='inventory-spec-list'>SSD: 500gb m.2 ssd nvme</li>
                            <li value={inventoryPsu} id='inventory-spec-list'>PSU: 750w 80+ gold</li>
                            <li value={inventoryMotherboard} id='inventory-spec-list'>Motherboard: b550M</li>
                            <li value={inventoryCooling} id='inventory-spec-list'>Cooler: Stock (air)</li>
                            <li value={inventoryCase} id='inventory-spec-list'>Case: mATX case w/ six fans</li>
                            <li value={inventoryAccessories} id='inventory-spec-list'>Accessories: vertical gpu riser cable</li>
                            <button onClick={submitHandler} id='add-to-cart'>Add to cart</button>
                        </ul>
                    </div>
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