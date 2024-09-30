import logo from '@assets/logo.svg';

export default function Logo() {
  return (
    <div onClick={() => console.log('click')} className="hover:cursor-pointer">
      <img src={logo} alt="Logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}
