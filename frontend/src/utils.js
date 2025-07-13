// frontend/src/utils.js
import { create } from 'ipfs-http-client';

const client = create({ url: 'http://127.0.0.1:5001/api/v0' });

export async function storeFile(file) {
  const { cid } = await client.add(file);
  return cid.toString();
}

export async function computeHash(file) {
  const buffer     = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
  return [...new Uint8Array(hashBuffer)]
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}
