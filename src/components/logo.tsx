import logo from '@assets/logo.svg';

export default function Logo() {
  return (
    <div onClick={() => console.log('click')}>
      <img src={logo} alt="Logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}
