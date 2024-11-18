import TopBar from "../../Shared/TopBar/TopBar";
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';


const Main = () => {
  return (
    <div>
      <TopBar />
      <Outlet />
      <Footer />
    </div>
  )
}
export default Main;