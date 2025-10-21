import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EmployeeForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Display form data in console (no backend submission required)
    console.log('Employee Form Data:', formData);
    alert('Employee form submitted successfully! Check console for data.');

    // Reset form
    setFormData({
      name: '',
      designation: '',
      location: '',
      salary: ''
    });
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="container page-container">
      <h1 className="page-title">Add Employee</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name *</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter employee name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="designation" className="form-label">Designation *</label>
            <select
              className="form-control"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
            >
              <option value="">Select designation</option>
              <option value="Manager">Manager</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Analyst">Analyst</option>
              <option value="Team Lead">Team Lead</option>
              <option value="HR">HR</option>
              <option value="Accountant">Accountant</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="location" className="form-label">Location *</label>
            <select
              className="form-control"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="">Select location</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Pune">Pune</option>
              <option value="Chennai">Chennai</option>
              <option value="Kolkata">Kolkata</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="salary" className="form-label">Salary *</label>
            <input
              type="number"
              className="form-control"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="Enter salary"
              min="0"
              required
            />
          </div>

          <div className="d-flex justify-content-center gap-3 mt-4">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeForm;