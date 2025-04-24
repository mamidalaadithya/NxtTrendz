import {Navigate, Outlet, useLocation} from 'react-router-dom'
import Cookie from 'js-cookie'

const ProtectedRoute = () => {
  const token = Cookie.get('jwt_token')
  const location = useLocation()

  if (token === undefined) {
    return <Navigate to="/login" state={{from: location}} replace />
  }
  return <Outlet />
}

export default ProtectedRoute
