import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for styling

type ToastType = 'success' | 'error' | 'info' | 'warning';
const Toaster: React.FC<{ message: string; type?: ToastType }> = ({ message, type }) => {
    toast[type || 'success'](message, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        // Customize other toast options as needed
      });
    
      return null; // Empty component to avoid rendering issues
    };
export default Toaster;
