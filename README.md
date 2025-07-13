Features
🔐 End-to-End Encrypted File Uploads

🌐 Decentralized Storage via IPFS (nft.storage)

⛓️ Smart Contract Verification with Ethereum (Ganache / MetaMask)

📄 Instant File Integrity Check using on-chain hash matching

🐳 Dockerized for deployment

🎨 Intuitive React Frontend with animated UI

🧠 Tech Stack
Layer	Technology
🌐 Frontend	React + Vite + Tailwind CSS
🔐 Web3 Auth	MetaMask
📦 Backend	Express.js + Node.js (optional)
📂 Storage	IPFS via Docker
📜 Contracts	Solidity + Ganache (local blockchain)
🧪 Testing	Truffle / Hardhat
🐳 Container	Docker + Docker Compose


secure-file-uploads/
│          
├── contracts/                 # Solidity smart contracts
│   └── contracts/FileVerifier.sol        # Contract for storing and verifying file hashes
│   └── hardhatconfig.js
│   └── artifacts/build-info
│
├── frontend/                  # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Aurora.jsx
│   │   │   └── Hero.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── Hero.css
│   └── vite.config.js
│
├── test/                      # Smart contract test files
│   └── fileVerifier.test.js
│      
├── README.md                  # You're here
└── package.json
└── .gitignore



 Start Local Blockchain (Ganache):
# Option 1: Run Ganache GUI
# Option 2: CLI
ganache-cli --accounts 10 --deterministic


 Deploy Smart Contract:
 cd contracts
# For Hardhat
npx hardhat compile
npx hardhat run scripts/deploy.js --network localhost
# For Truffle (if used)
truffle compile
truffle migrate --network development

 Run Docker IPFS
docker run --rm -d --name ipfs-node `
restart ipfs-node

 Run Frontend (Dev Mode)
cd frontend
npm install
npm run dev
