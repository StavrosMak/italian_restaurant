
import MenuMeals from '../data/MenuMeals';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Menu.css';
const MenuCategories = [
    'All',
    'Pizza',
    'Pasta',
    'Risotto',
    'Appetizer',
    'Main Course',
    'Dessert'
];

export default function Menu() {
    const [displayFood, setDisplayFood] = useState([]);
    useEffect(() => {
        setDisplayFood(MenuMeals);
    }, [])
    const [selectedCategory, setSelectedCategory] = useState('All');
    const meals=displayFood.filter(
        meal => selectedCategory === 'All' || meal.category === selectedCategory
        );
    return (
        <div className="Menu" id='menu'>
            <div className="MenuHeader">
                <h2 className="MenuTitle">Menu</h2>
                <div className="MenuList">
                    <ul>
                        {MenuCategories.map((category, index) => (
                            <li className={selectedCategory === category ? "selected" : ""} key={index}>
                                <button onClick={() => { setSelectedCategory(category) }}>                                    {category}
                                </button>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
            <div className='meal-container'>
                {meals.map((meal, index) => (
                    <motion.div className='mealItem' key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}>
                        <div className='leftSide'>
                            <img src={meal.img} alt='' />
                        </div>
                        <div className='rightSide'>
                            <div className='mealHeader'>
                                <h4 className='mealTitle'>{meal.title}</h4>
                                <p className='mealPrice'>{meal.price} $</p>
                            </div>
                            <p className='mealInfo'>
                                {meal.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>

    )



}