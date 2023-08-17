import profileImg from '../../Images/profil.jpg';
// import profileImg2 from '../../Images/photoProfil2.jpg';
import profileImg2 from '../../Images/photoProfil22.png';
import './EmployeesSection.css'
export default function EmployeeCard() {
    return (
        <div className="EmployeeCard">
            <div className="profileImg">
                <img src={profileImg2} alt='..' />
            </div>
            <div className='profileInfo'>
                <h4>John K.</h4>
                <span>Owner - Chef</span>
                <p>Driven by a deep love for Italian cooking,
                    I want to share the essence of Italian cuisine.
                </p>
            </div>

        </div>
    )
}