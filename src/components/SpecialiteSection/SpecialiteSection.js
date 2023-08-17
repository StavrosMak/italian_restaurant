import WovenImageList from "../WovenImageList/WovenImageList"
import './SpecialiteSection.css'
import pizza2 from '../../Images/gourme22.jpg';
import pizza3 from '../../Images/gourme3.jpg';
import pizza5 from '../../Images/gourme5.jpg';
import pizza6 from '../../Images/gourme6.jpg';
import pizza7 from '../../Images/gourme7.jpg';
import MenuMeals from "../data/MenuMeals";
 
import { useState, useEffect } from "react";



const specialties1 = [
    {
        img: pizza3,
        title: 'Delicious Pizza 1',
    },
    {
        img: pizza2,
        title: 'Tasty Pizza 2',
    },
    {
        img: pizza3,
        title: 'Savory Pizza 3',
    },

];

const specialties2 = [
    {
        img: pizza5,
        title: 'Delicious Pizza 1',
    },
    {
        img: pizza6,
        title: 'Tasty Pizza 2',
    },
    {
        img: pizza7,
        title: 'Savory Pizza 3',
    },
  
];






export default function SpecialiteSection() {
    const [isMobile, setIsMobile] = useState(false);
    const [specialFood, setSpecialFood] = useState([]);
    
    useEffect(() => {
        setSpecialFood(MenuMeals);
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check and event listener
        handleResize();
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);




    return (
        <div className="SpecialiteSection">

            <h2>Specialite</h2>
            <div className="SpecialiteSectionContent">
                {isMobile ? " " :
                    <div className="imageView"><WovenImageList specialties={specialties1} /></div>}
                <ul className="SpecialiteList">
                    {specialFood.slice(0,4).map((item, index) => (
                        <li key={index}>
                            <div className="Specialty">
                                <div className="SpecialiteHeader">
                                    <h3 className="mealTitle">{item.title}</h3>
                                    <p className="mealPrice">${item.price}</p>
                                </div>
                                <div className="mealInfo">
                                    {item.desc}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                {/* <ul className="SpecialiteList">
                         <li>
                            <div className="Specialty">
                                <div className="SpecialiteHeader">
                                    <h3 className="Title mealTitle">Italian Food</h3>
                                    <p className="Price mealPrice">$15</p>
                                </div>
                                <div className="Description mealInfo">
                                    Fresh tomatoes, basil, mozzarella, and handcrafted pasta.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="Specialty">
                                <div className="SpecialiteHeader">
                                    <h3 className="Title">Seafood Delights</h3>
                                    <p className="Price">$19</p>
                                </div>
                                <div className="Description">
                                    Succulent shrimp, tender scallops, and seasonal fish served with flavorful sauces.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="Specialty">
                                <div className="SpecialiteHeader">
                                    <h3 className="Title">Savory Steaks</h3>
                                    <p className="Price">$25</p>
                                </div>
                                <div className="Description">
                                    Prime cuts of beef, seasoned and grilled to your preference, served with chef's signature sauces.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="Specialty">
                                <div className="SpecialiteHeader">
                                    <h3 className="Title">Vegetarian Delights</h3>
                                    <p className="Price">$14</p>
                                </div>
                                <div className="Description">
                                    Locally sourced vegetables, grains, and plant-based proteins prepared in creative ways.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="Specialty">
                                <div className="SpecialiteHeader">
                                    <h3 className="Title">Decadent Desserts</h3>
                                    <p className="Price">$8</p>
                                </div>
                                <div className="Description">
                                    Rich chocolate, fresh fruits, and premium ingredients combined to create delightful desserts.
                                </div>
                            </div>
                        </li>
                    </ul> */}



                {isMobile ? " " : <div className="imageView">
                    <WovenImageList specialties={specialties2} />
                </div>}

            </div>
        </div>
    )



}