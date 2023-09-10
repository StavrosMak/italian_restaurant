import './EmployeesSection.css';
import EmployeeCard from './EmployeeCard';
export default function EmployeesSection() {

    return (
        <div className="EmployeesSection" id='about'>

            <div className="aboutUsText">
                <h2 className='aboutUsHeader'>From Family Kitchen to Your Table.</h2>

                <p className='aboutUsParagraph'>
                    Starting as a small family venture, our love for Italian cuisine has blossomed.
                    Today, we're proud to share our passion for authentic flavors with you.
                </p>

            </div>
            <div className="employeesProfile">
                <EmployeeCard />
            </div>


        </div>
    )
}
