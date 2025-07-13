import React from 'react';
import Aurora from '../components/Aurora'; // ✅ use correct path if Hero.jsx is also in /components
import { useNavigate } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      {/* Aurora Background with Custom Props */}
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      {/* Foreground Content */}
      <div className="hero-content">
        <h1 className="hero-title">🚀 Decentralized File Vault</h1>
        <div className="features">
          <div className="feature-box"><h1>🔐 End-to-End Encrypted Storage</h1> Your files are encrypted before they ever leave your device, ensuring only you — and those you authorize — can access them. This guarantees maximum privacy and protection from unauthorized access.</div>
          <div className="feature-box"><h1>🌐 IPFS + Blockchain Integration</h1>Files are stored on IPFS for decentralized access, while critical metadata like file hashes and CIDs are securely registered on the blockchain — enabling tamper-proof verification.</div>
          <div className="feature-box"><h1>📄 Instant File Verification</h1>Upload any file and instantly verify its authenticity by matching its hash with on-chain records. Detect even the slightest changes and ensure the file’s integrity.</div>
        </div>
        <button className="hero-button" onClick={() => navigate('/app')}>
          Try It Now
        </button>
        <div className="tech-marquee">
            <div className="marquee-content">
                <span>⚛️ React</span>
                <span>🎨 TailwindCSS</span>
                <span>🌈 Aurora Shader (OGL)</span>
                <span>🧠 AI-powered Analysis</span>
                <span>🗂️ IPFS</span>
                <span>🔐 NFT.Storage</span>
                <span>🛡️ End-to-End Encryption</span>
                <span>⛓️ Smart Contracts</span>
                <span>🚀 Vite</span>
                <span>🐳 Docker</span>
                <span>🧪 Ganache Local</span>
                <span>🕸️ MetaMask</span>
                <span>🌐 Blockchain</span>
            </div>
        </div>


      </div>
    </div>
  );
}
