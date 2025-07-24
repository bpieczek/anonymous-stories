# Anonymous Stories

[![Live Demo](https://img.shields.io/badge/Live_Demo-Online-green?style=for-the-badge)](https://anon-stories.onrender.com)
![SolidJS](https://img.shields.io/badge/SolidJS-2c4f7c?style=for-the-badge&logo=solid&logoColor=c8c9cb)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)

Anonymous Stories is a platform where users can share and read stories anonymously, providing a safe space for creative expression without revealing personal identities. Stories become permanent digital artifacts in our archive, preserving voices for future generations.

## Features

✨ **Anonymity Options**
Share stories completely anonymously or with a chosen username to build your digital legacy

🔒 **Permanent Archive**
All stories become permanent, unremovable parts of our digital heritage

🎲 **Random Discovery**
Find unexpected inspiration with our random story feature

🔍 **Advanced Search**
Find stories by title, author, content, or ID with our powerful search tools

📱 **Responsive Design**
Beautiful experience on all devices with mobile-first approach

🌈 **Immersive UI**
Enjoy elegant animations and thoughtful interactions throughout

## Technology Stack

### Frontend

- **SolidJS** - Reactive JavaScript framework
- **Vite** - Next-generation frontend tooling
- **SASS/SCSS** - Advanced styling with CSS preprocessor
- **Solid Router** - Client-side routing
- **Axios** - HTTP client for API requests

### Backend

- **Node.js** - JavaScript runtime environment
- **Express** - Web application framework
- **MongoDB (via Monk)** - NoSQL database
- **Yup** - Schema validation

### Deployment

- **Render** - Cloud platform for hosting
- **MongoDB Atlas** - Cloud database service

## Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB (or MongoDB Atlas account)
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/bpieczek/anonymous-stories.git
cd anonymous-stories
```

2. Install dependencies for both client and server:

```bash
cd Frontend && npm install
cd ../Backend && npm install
```

3. Create a `.env` file in the server directory:

```env
MONGO_URL=your_mongodb_connection_string
PORT=9090
```

4. Start the development servers:

```bash
# In server directory
npm run dev

# In client directory
npm run dev
```

5. Access the application at `http://localhost:5173`

## Contribution

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

**UI Design & Styling**: [dOnTaSkAbOuTmYnAmE](https://github.com/dOnTaSkAbOuTmYnAmE)
**Development**: [bpieczek](https://github.com/bpieczek)

---

**Experience anonymous storytelling at its finest**
👉 [Live Demo](https://anon-stories.onrender.com) 👈
