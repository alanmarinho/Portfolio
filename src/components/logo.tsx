import logo from '@assets/logo.svg';

export default function Logo() {
  return (
    <a href="/" className="hover:cursor-pointer">
      <img src={logo} alt="Logo" />
    </a>
  );
}
