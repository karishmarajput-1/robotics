// Example: src/services/exampleUsage.js
// This file shows how to use the API in your React components

import { authAPI, jobAPI, contactAPI, setAuthToken } from './api';

// ============================================
// AUTHENTICATION EXAMPLES
// ============================================

export const loginUser = async (email, password) => {
  try {
    const response = await authAPI.login({ email, password });
    const { token, user } = response.data;
    
    // Store token (automatically stored in localStorage)
    setAuthToken(token);
    
    // Store user data in state/localStorage
    localStorage.setItem('user', JSON.stringify(user));
    
    return { success: true, user };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.message || 'Login failed' 
    };
  }
};

export const registerUser = async (name, email, password, phone) => {
  try {
    const response = await authAPI.register({ name, email, password, phone });
    return { success: true, message: response.data.message };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.message || 'Registration failed' 
    };
  }
};

export const logoutUser = () => {
  setAuthToken(null);
  localStorage.removeItem('user');
};

export const getUserProfile = async () => {
  try {
    const response = await authAPI.getProfile();
    return { success: true, user: response.data };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.message || 'Failed to get profile' 
    };
  }
};

// ============================================
// JOBS EXAMPLES
// ============================================

export const fetchAllJobs = async () => {
  try {
    const response = await jobAPI.getAll();
    return { success: true, jobs: response.data };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.message || 'Failed to fetch jobs' 
    };
  }
};

export const fetchJobById = async (jobId) => {
  try {
    const response = await jobAPI.getById(jobId);
    return { success: true, job: response.data };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.message || 'Failed to fetch job' 
    };
  }
};

export const createNewJob = async (jobData) => {
  // jobData = { title, description, location, salary, type, requirements }
  try {
    const response = await jobAPI.create(jobData);
    return { success: true, message: response.data.message, jobId: response.data.jobId };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.message || 'Failed to create job' 
    };
  }
};

export const updateJobListing = async (jobId, jobData) => {
  try {
    const response = await jobAPI.update(jobId, jobData);
    return { success: true, message: response.data.message };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.message || 'Failed to update job' 
    };
  }
};

export const deleteJobListing = async (jobId) => {
  try {
    const response = await jobAPI.delete(jobId);
    return { success: true, message: response.data.message };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.message || 'Failed to delete job' 
    };
  }
};

// ============================================
// CONTACT EXAMPLES
// ============================================

export const submitContactForm = async (name, email, subject, message) => {
  try {
    const response = await contactAPI.submit({ name, email, subject, message });
    return { success: true, message: response.data.message };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.message || 'Failed to submit contact' 
    };
  }
};

export const fetchAllContacts = async () => {
  try {
    const response = await contactAPI.getAll();
    return { success: true, contacts: response.data };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.message || 'Failed to fetch contacts' 
    };
  }
};

export const updateContactStatus = async (contactId, status) => {
  // status = 'new' | 'replied' | 'closed'
  try {
    const response = await contactAPI.updateStatus(contactId, status);
    return { success: true, message: response.data.message };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.message || 'Failed to update contact' 
    };
  }
};

// ============================================
// REACT COMPONENT EXAMPLES
// ============================================

/*

// Example 1: Login Component
import { useState } from 'react';
import { loginUser } from '../services/exampleUsage';

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await loginUser(email, password);
    
    if (result.success) {
      console.log('Login successful:', result.user);
      // Redirect to dashboard
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  };

  return (
    <form onSubmit={handleLogin}>
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email"
        disabled={loading}
      />
      <input 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password"
        type="password"
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </form>
  );
}


// Example 2: Jobs List Component
import { useState, useEffect } from 'react';
import { fetchAllJobs } from '../services/exampleUsage';

function JobsList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadJobs = async () => {
      const result = await fetchAllJobs();
      if (result.success) {
        setJobs(result.jobs);
      } else {
        setError(result.error);
      }
      setLoading(false);
    };

    loadJobs();
  }, []);

  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p style={{color: 'red'}}>{error}</p>;

  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.location} - {job.type}</p>
          <p>{job.description}</p>
          {job.salary && <p>Salary: {job.salary}</p>}
        </div>
      ))}
    </div>
  );
}


// Example 3: Contact Form Component
import { useState } from 'react';
import { submitContactForm } from '../services/exampleUsage';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await submitContactForm(
      formData.name,
      formData.email,
      formData.subject,
      formData.message
    );

    if (result.success) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus('Error: ' + result.error);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        placeholder="Name"
        required
      />
      <input 
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        placeholder="Email"
        type="email"
        required
      />
      <input 
        value={formData.subject}
        onChange={(e) => setFormData({...formData, subject: e.target.value})}
        placeholder="Subject"
        required
      />
      <textarea 
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        placeholder="Message"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send'}
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}

*/
