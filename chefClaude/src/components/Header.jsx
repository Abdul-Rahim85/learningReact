import logo from '../assets/chef-claude-icon.png';
import '../styles.css';

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Chef Claude" />
      <h1>Chef Claude</h1>
    </header>
  )
}