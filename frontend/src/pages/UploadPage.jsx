import React from 'react';
import UploadForm from '../components/UploadForm';
import VerifyForm from '../components/VerifyForm';
import '../App.css'; // Your main app style

const CONTRACT_ADDRESS = "0x3f613A02e9DB91060eEe7321062a4AaE44beD5f7";

export default function UploadPage() {
  return (
    <div className="app-container">
      <h1 className="title">🔐 Secure File Upload</h1>
      <div className="card">
        <UploadForm contractAddress={CONTRACT_ADDRESS} />
      </div>
      <div className="card">
        <VerifyForm contractAddress={CONTRACT_ADDRESS} />
      </div>
    </div>
  );
}
