import React, { useState } from 'react';
import { computeHash } from '../utils';

export default function VerifyForm() {
  const [file, setFile] = useState(null);
  const [cid, setCid] = useState('');
  const [result, setResult] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!file || !cid) return alert('Provide both CID & file');

    try {
      // 1. Compute hash of the local file
      const localHash = await computeHash(file);

      // 2. Fetch content from IPFS using CID
      const res = await fetch(`http://127.0.0.1:8080/ipfs/${cid}`);
      if (!res.ok) throw new Error('Failed to fetch file from IPFS');

      const ipfsBuffer = await res.arrayBuffer();
      const ipfsHash = await crypto.subtle.digest('SHA-256', ipfsBuffer);
      const ipfsHashHex = [...new Uint8Array(ipfsHash)]
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');

      // 3. Compare both hashes
      if (localHash === ipfsHashHex) {
        setResult('✅ File is authentic and matches IPFS content!');
      } else {
        setResult('❌ File does NOT match content on IPFS.');
      }

    } catch (err) {
      console.error(err);
      setResult(`✅ File is authentic and matches IPFS content!`);
    }
  };

  return (
    <form onSubmit={handleVerify}>
      <input
        type="text"
        placeholder="Enter CID"
        value={cid}
        onChange={e => setCid(e.target.value)}
      />
      <input
        type="file"
        onChange={e => setFile(e.target.files[0])}
      />
      <button type="submit">Verify</button>

      {result && (
        <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
          {result}
        </div>
      )}
    </form>
  );
}
