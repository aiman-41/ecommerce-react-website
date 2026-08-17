import { useState } from 'react';
import './App.css'
import { Route, Routes, Link } from 'react-router-dom';

function HomePage() {
  return (
    <div><h1>Home Page</h1>
      <p>You are not logged in. Go to the login page to sign in.</p>
    </div>
  );
}

function ProfilePage() {
  return (
    <div>
      <h1>Profile</h1>
      <p>Name: [name will go here]</p>
      <p>Here you oculd show more user info from the context.</p>
    </div>
  );
}

function AboutPage() {
  return <h1>About Page</h1>
}
function LoginPage() {
  const [name, setName] = useState("");
  const [user, setUser] = useState({ name: "", isAuth: false });

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    setUser({ name: name, isAuth: true });
  }
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}
function App() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
      <div>Footer</div>
    </div>
  )
}


export default App;
