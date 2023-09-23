import './HeroSection.css'
import { Link } from 'react-router-dom'




export default function HeroSection() {

    return (
        <div className='HeroSection' id='#'>
            <div className="banner-content">
                <h1 className='backgroundText'>La Piazza Italiana</h1>
                <h1>Taste our italian flavors</h1>
                <p>Don't miss this opportunity to save big on your favorite items. Limited time offer.</p>
                <Link className='main_div' to="#menu">
                    <button>Taste</button>
                </Link>
            </div>

        </div>
    )
}