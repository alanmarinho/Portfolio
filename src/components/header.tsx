import Logo from '@components/logo';
import Nav from '@components/nav';

export default function header() {
  return (
    <header className="flex sticky flex-wrap drop-shadow w-full p-6 bg-white mx-auto z-[20] top-0 items-center justify-between">
      <Logo />
      <Nav />
    </header>
  );
}
