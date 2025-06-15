import React, { useState } from 'react';

export default function HostelChangeForm() {
  const [formData, setFormData] = useState({
    name: '',
    Reg: '',
    course: '',
    currentHostel: '',
    desiredHostel: '',
    reason: '',
    contact: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can replace the above with API call logic
    alert('Application Submitted!');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Hostel Change Application Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          required
          style={styles.input}
        />

        <label>Registration Number</label>
        <input
          type="text"
          name="Reg"
          value={formData.Reg}
          onChange={handleChange}
          placeholder="Your Reg number"
          required
          style={styles.input}
        />

        <label>Course & Year</label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="e.g., B.Tech CSE, 2nd Year"
          required
          style={styles.input}
        />

        <label>Current Hostel</label>
        <input
          type="text"
          name="currentHostel"
          value={formData.currentHostel}
          onChange={handleChange}
          placeholder="e.g., Hostel A, Room 101"
          required
          style={styles.input}
        />

        <label>Desired Hostel</label>
        <input
          type="text"
          name="desiredHostel"
          value={formData.desiredHostel}
          onChange={handleChange}
          placeholder="e.g., Hostel B"
          required
          style={styles.input}
        />

        <label>Reason for Change</label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          placeholder="Explain your reason..."
          required
          rows="4"
          style={styles.textarea}
        ></textarea>

        <label>Contact Number</label>
        <input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="e.g., 9876543210"
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Submit Application</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '8px 0 16px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    margin: '8px 0 16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    resize: 'vertical'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};
