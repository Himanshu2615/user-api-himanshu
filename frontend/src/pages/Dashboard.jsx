import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import UserModal from '../components/UserModal';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const { logout } = useAuth();

  const fetchUsers = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await api.get('/users');
      setUsers(res.data);
    } catch (err) {
      console.error('Error fetching users:', err);
      setError('Could not fetch users. Please make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Delete this user?')) {
      try {
        await api.delete(`/users/${id}`);
        setUsers(users.filter(u => u._id !== id));
      } catch (err) {
        alert('Error deleting user');
      }
    }
  };

  const handleSave = async (data) => {
    if (editingUser) {
      await api.put(`/users/${editingUser._id}`, data);
    } else {
      await api.post('/users/register', data);
    }
    fetchUsers();
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">User Management App</div>
        <button onClick={logout} className="btn btn-danger btn-sm">Logout</button>
      </nav>

      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2>User List</h2>
          <button onClick={() => { setEditingUser(null); setModalOpen(true); }} className="btn btn-primary">
            + Add New User
          </button>
        </div>

        {error && <div className="error-alert">{error}</div>}

        {loading ? (
          <p>Loading users...</p>
        ) : (
          <div className="card" style={{ padding: '0' }}>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>ID</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map(user => (
                    <tr key={user._id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td style={{ fontSize: '0.8rem', color: '#666' }}>{user._id}</td>
                      <td>
                        <button 
                          onClick={() => { setEditingUser(user); setModalOpen(true); }} 
                          className="btn btn-secondary btn-sm" 
                          style={{ marginRight: '5px' }}
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDelete(user._id)} 
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" style={{ textAlign: 'center' }}>No users found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <UserModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        onSave={handleSave} 
        editingUser={editingUser} 
      />
    </div>
  );
};

export default Dashboard;
