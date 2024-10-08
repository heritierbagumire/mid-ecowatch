'use client'
import React, { useState } from 'react';

interface AdminProfileProps { }

interface AdminFormData {
  fullName: string;
  email: string;
  username: string;
  phone: string;
  bio: string;
  role: string;
  is2FAEnabled: boolean;
}

const AdminProfile: React.FC<AdminProfileProps> = () => {
  const [formData, setFormData] = useState<AdminFormData>({
    fullName: 'Heritier Bagumire',
    email: 'heritage250@gmail.com',
    username: 'adminUser',
    phone: '+2503456789',
    bio: 'A short bio here...',
    role: 'Admin',
    is2FAEnabled: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    // Add logic to handle form submission, e.g., API call
  };

  return (
    <div className="admin-profile-container">
      {/* Avatar Section */}
      <div className="avatar-section">
        <img src="/path/to/avatar.jpg" alt="Admin Avatar" className="avatar-image" />
        <button className="change-avatar-btn">Change Avatar</button>
      </div>

      {/* Admin Info Form */}
      <form className="admin-info-form" onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Role:
          <input
            type="text"
            name="role"
            value={formData.role}
            readOnly
          />
        </label>

        <label>
          Bio:
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </label>

        {/* Change Password */}
        <button type="button" className="change-password-btn">Change Password</button>

        {/* Two-Factor Authentication (2FA) */}
        <label>
          Two-Factor Authentication (2FA):
          <input
            type="checkbox"
            name="is2FAEnabled"
            checked={formData.is2FAEnabled}
            onChange={handleCheckboxChange}
          />
        </label>

        {/* Save/Update Button */}
        <button type="submit" className="save-changes-btn">Save Changes</button>
      </form>

      {/* Activity Logs */}
      <div className="activity-log">
        <h3>Recent Activity</h3>
        <ul>
          <li>Logged in at 10:30 AM</li>
          <li>Updated user permissions at 11:00 AM</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminProfile;
