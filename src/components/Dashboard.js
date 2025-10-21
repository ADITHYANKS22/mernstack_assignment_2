import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewType, setViewType] = useState('table'); // 'table', 'card', or 'list'

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }

      const data = await response.json();
      setEmployees(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container page-container">
        <div className="loading-spinner">
          <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container page-container">
        <div className="error-message">
          <h3>Error Loading Data</h3>
          <p>{error}</p>
          <button className="btn btn-primary mt-3" onClick={fetchEmployees}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container page-container">
      <h1 className="page-title">Employee Dashboard</h1>

      {/* View Toggle Buttons */}
      <div className="view-toggle">
        <button 
          className={`btn ${viewType === 'table' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setViewType('table')}
        >
          Table View
        </button>
        <button 
          className={`btn ${viewType === 'card' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setViewType('card')}
        >
          Card View
        </button>
        <button 
          className={`btn ${viewType === 'list' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setViewType('list')}
        >
          List View
        </button>
      </div>

      {/* Table View */}
      {viewType === 'table' && (
        <div className="employee-table-container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Card View */}
      {viewType === 'card' && (
        <div className="row">
          {employees.map((employee) => (
            <div key={employee.id} className="col-md-6 col-lg-4 mb-3">
              <div className="employee-card card">
                <div className="card-header">
                  <span className="badge-id">ID: {employee.id}</span>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{employee.name}</h5>
                  <p className="card-text">
                    <strong>Email:</strong> {employee.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List View */}
      {viewType === 'list' && (
        <div className="employee-table-container">
          <ul className="list-group">
            {employees.map((employee) => (
              <li key={employee.id} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="badge-id me-3">#{employee.id}</span>
                    <strong>{employee.name}</strong>
                  </div>
                  <div className="text-muted">{employee.email}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dashboard;