
import './RestaurantHourSection.css'


/* 
Working Hour

Lunch 11:30am – 2:30pm
Dinner 5:30am – 10pm
Sun. Brunch 10:30am – 2:30pm
Sun. Dinner 5:30pm – 10pm
Happy Hour
Mon-Fri 5pm – 7pm
*/
export default function RestaurantHourSection() {
    return (
        <div className="HourSection">
            <h2>Opening Hours</h2>
            <div className='line1'></div>
            <div className='line2'></div>
            <ul className='HourList'>
                <li>Lunch 11:30am – 2:30pm</li>
                <li>Dinner 5:30pm – 10pm</li>
                <li>Sun. Brunch 10:30am – 2:30pm</li>
                <li>Sun. Dinner 5:30pm – 10pm</li>
            </ul>
        </div>
    );
}
