// frontend/src/components/UploadForm.jsx
import React, { useState } from 'react';
import { ethers } from 'ethers';
import contractJson from '../contractABI.json';
import { storeFile, computeHash } from '../utils';

export default function UploadForm({ contractAddress }) {
  const [file, setFile]       = useState(null);
  const [cid, setCid]         = useState('');
  const [hexHash, setHexHash] = useState('');

  // Step 1: Upload to IPFS & compute hash
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert('Please select a file first');

    try {
      const newCid = await storeFile(file);
      setCid(newCid);
      const hash = await computeHash(file);
      const h = '0x' + hash;
      setHexHash(h);
      alert(`✅ Uploaded to IPFS.\nCID: ${newCid}`);
    } catch (err) {
      console.error(err);
      alert(`❌ IPFS upload failed: ${err.message}`);
    }
  };

  // Step 2: Store on‑chain via MetaMask
  const handleStoreOnChain = async () => {
    if (!cid || !hexHash) return alert('Upload first to get CID & hash');

    try {
      if (!window.ethereum) throw new Error('Install MetaMask');
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer   = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractJson.abi, signer);

      const tx = await contract.store(cid, hexHash);
      await tx.wait();
      alert('✅ File registered on-chain!');
    } catch (err) {
      console.error(err);
      // alert(`❌ On‑chain store failed: ${err.message}`);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <h2>Upload & Register</h2>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <button type="submit">1️⃣ Upload to IPFS</button>
      </form>
      {cid && (
        <div style={{ background: '#222', padding: 12, borderRadius: 8 }}>
          <table className="result-table">
  <thead>
    <tr>
      <th>Label</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CID</td>
      <td>{cid}</td>
    </tr>
    <tr>
      <td>Hash</td>
      <td>{hexHash}</td>
    </tr>
  </tbody>
</table>
          <button onClick={handleStoreOnChain}>
            2️⃣ Store on Chain (MetaMask)
          </button>
        </div>
      )}
    </div>
  );
}
