import './Dashboard.css';
import { Outlet, Link } from 'react-router-dom';
import DashboardTopBar from './Dashboard-top-bar/DashboardTopBar';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <DashboardTopBar />
      <div className="row">
        <div className='col-md-3'>
          <aside>
            <ul>
              <Link style={{textDecoration: 'none', color: 'black'}} to={"dashboard-home"}>
                <li>Dashboard</li>
              </Link>
              <Link style={{textDecoration: 'none', color: 'black'}} to={"all-products"}>
                <li>All Products</li>
              </Link>
              <Link style={{textDecoration: 'none', color: 'black'}} to={"add-products"}>
                <li>Add Products</li>
              </Link>
            </ul>
          </aside>
        </div>
        <div className='col-md-8'>
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard;