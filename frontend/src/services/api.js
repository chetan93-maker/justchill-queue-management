const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080').replace(/\/$/, '')

async function request(path, options = {}) {
  const token = localStorage.getItem('justchill_token')
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...(options.headers || {}) },
  })
  if (!response.ok) {
    const body = await response.json().catch(() => ({}))
    const error = new Error(body.message || `Request failed with status ${response.status}`)
    error.status = response.status
    throw error
  }
  return response.status === 204 ? null : response.json()
}
const json = (method, body) => ({ method, body: JSON.stringify(body) })
export const api = {
  login: (payload) => request('/api/auth/login', json('POST', payload)),
  register: (payload) => request('/api/auth/register', json('POST', payload)),
  hospitals: (query = '') => request(`/api/hospitals${query ? `?search=${encodeURIComponent(query)}` : ''}`),
  hospital: (id) => request(`/api/hospitals/${id}`),
  doctors: (query = '') => request(`/api/doctors${query ? `?search=${encodeURIComponent(query)}` : ''}`),
  doctor: (id) => request(`/api/doctors/${id}`),
  availability: (id, date) => request(`/api/doctors/${id}/availability${date ? `?date=${date}` : ''}`),
  book: (payload) => request('/api/tickets/book', json('POST', payload)),
  ticket: (id) => request(`/api/tickets/${id}`),
  queueStatus: (id) => request(`/api/queue/${id}/status`),
  nextPatient: (id) => request(`/api/queue/${id}/next`, json('POST', {})),
  cancelTicket: (id) => request(`/api/tickets/${id}/cancel`, json('POST', {})),
  completeTicket: (id) => request(`/api/tickets/${id}/complete`, json('POST', {})),
}
