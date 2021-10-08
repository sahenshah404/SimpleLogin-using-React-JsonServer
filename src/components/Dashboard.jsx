import React from 'react';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';

function Dashboard(props) {

function logout() {
    props.acc({auth:false,userType:""})
}

return <div>
   {props.accType==="admin" ? <AdminDashboard/> : <UserDashboard/>}

<button onClick={logout}>Logout</button>
</div>
};

export default Dashboard;