// import React from 'react'
import { Link } from 'react-router-dom'
export default function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Welcome to the homepage</p>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/logout">Logout</Link>
      <Link to="/forgot-password">Forgot Password</Link>
      <Link to="/reset-password">Reset Password</Link>
      <Link to="/verify-email">Verify Email</Link>
      <Link to="/change-password">Change Password</Link>
      <Link to="/verify-email">Verify Email</Link>
      <Link to="/change-password">Change Password</Link>
      <Link to="/forgot-password">Forgot Password</Link>
      <Link to="/reset-password">Reset Password</Link>
    </div>
  )
}
