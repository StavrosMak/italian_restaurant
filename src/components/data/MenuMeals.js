import pizza6 from '../../Images/pizza6.png';
import bruschettaImage from '../../Images/bruschetta.png';
import risottoImage from '../../Images/rissoto.png';
import chickenMarsalaImage from '../../Images/chickenMarsala.png';
import linguineImage from '../../Images/linguine.png';
import capreseImage from '../../Images/caprese.png';
import tiramisuImage from '../../Images/tiramisu.png';
import gnocchiImage from '../../Images/gnocchi.png';
import penneImage from '../../Images/penne.png';
const MenuMeals =  [
    {
        id: 1,
        title: 'Margherita Pizza',
        price: 10,
        desc: 'Fresh mozzarella, tomatoes, basil, olive oil',
        img: pizza6,
        category: 'Pizza'
    },
    {
        id: 2,
        title: 'Penne alla Vodka',
        price: 12,
        desc: 'Penne pasta in creamy tomato-vodka sauce',
        img: penneImage,
        category: 'Pasta',
    },
    {
        id: 3,
        title: 'Risotto ai Funghi',
        price: 14,
        desc: 'Creamy risotto with mixed mushrooms',
        img: risottoImage,
        category: 'Risotto'
    },
    {
        id: 4,
        title: 'Bruschetta al Pomodoro',
        price: 8,
        desc: 'Toasted bread topped with diced tomatoes, garlic, basil',
        img: bruschettaImage,
        category: 'Appetizer'
    },
    {
        id: 5,
        title: 'Gnocchi al Pomodoro',
        price: 14,
        desc: 'Homemade potato gnocchi with fresh tomato sauce',
        img: gnocchiImage,
        category: 'Pasta'
    },

    {
        id: 6,
        title: 'Tiramisu',
        price: 7,
        desc: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream',
        img: tiramisuImage,
        category: 'Dessert'
    },
    {
        id: 7,
        title: 'Caprese Salad',
        price: 9,
        desc: 'Fresh mozzarella, tomatoes, basil, balsamic glaze',
        img: capreseImage,
        category: 'Appetizer'
    },
    {
        id: 8,
        title: 'Linguine Frutti di Mare',
        price: 16,
        desc: 'Linguine pasta with a medley of fresh seafood in a light garlic and white wine sauce',
        img: linguineImage,
        category: 'Pasta'
    },

    {
        id: 9,
        title: 'Chicken Marsala',
        price: 16,
        desc: 'Chicken cooked in marsala wine sauce with mushrooms',
        img: chickenMarsalaImage,
        category: 'Main Course'
    },
];

export default MenuMeals;