import { Outlet, useLocation, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()
  return (
    <>
      <h1>Admin module</h1>
      <button type='button' onClick={() => navigate('/admin/about')}>to Admin Page</button>
      <Outlet/>
    </>
    );
}

export default App;