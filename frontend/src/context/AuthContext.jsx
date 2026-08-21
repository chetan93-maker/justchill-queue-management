import { createContext, useContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'

const AuthContext = createContext(null)
function getStoredUser() { try { return JSON.parse(localStorage.getItem('justchill_user') || 'null') } catch { return null } }
export function AuthProvider({ children }) {
  const [user, setUser] = useState(getStoredUser)
  const navigate = useNavigate()
  const signIn = async (credentials) => {
    const response = await api.login(credentials)
    const nextUser = response.user || response
    if (response.token || response.accessToken) localStorage.setItem('justchill_token', response.token || response.accessToken)
    localStorage.setItem('justchill_user', JSON.stringify(nextUser)); setUser(nextUser)
    navigate(`/${String(nextUser.role || 'PATIENT').toLowerCase()}/dashboard`)
  }
  const signUp = (payload) => api.register(payload)
  const signOut = () => { localStorage.removeItem('justchill_token'); localStorage.removeItem('justchill_user'); setUser(null); navigate('/login') }
  const value = useMemo(() => ({ user, signIn, signUp, signOut }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export function useAuth() { return useContext(AuthContext) }
export function ProtectedRoute({ role, children }) {
  const { user } = useAuth(); const navigate = useNavigate()
  if (!user) { navigate('/login'); return null }
  if (role && String(user.role || '').toUpperCase() !== role) { navigate('/404'); return null }
  return children
}
