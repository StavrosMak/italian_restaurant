import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from './components/Navbar/Navbar';
import SpecialiteSection from "./components/SpecialiteSection/SpecialiteSection";
import Parallax from "./components/Parallax/Parallax";
import Menu from "./components/MenuSection/Menu";
import EmployeesSection from "./components/EmployeesSection/EmployeesSection";
import RestaurantHourSection from "./components/RestaurantHoursSection/RestaurantHourSection";
import BookSection from "./components/BookSection/BookSection";
import './style.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <SpecialiteSection />
      <Parallax />
      <Menu />
      <EmployeesSection />
      <RestaurantHourSection />
      <BookSection />
    </div>
  );
}

export default App;
