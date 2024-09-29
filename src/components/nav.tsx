import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>();
  const Anchors = () => {
    return (
      <>
        <a onClick={() => isOpen && setIsOpen(!isOpen)} href="#about">
          About
        </a>
        <a onClick={() => isOpen && setIsOpen(!isOpen)} href="#skills">
          Skills
        </a>
        <a onClick={() => isOpen && setIsOpen(!isOpen)} href="#projects">
          Projects
        </a>
        <a onClick={() => isOpen && setIsOpen(!isOpen)} href="#academics">
          Academics
        </a>
        <a onClick={() => isOpen && setIsOpen(!isOpen)} href="#contact">
          Contact
        </a>
      </>
    );
  };
  const hlandleOpen = () => {
    isOpen && setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="flex w-1/2 flex-row justify-end">
        <div className="hidden md:flex w-full justify-between">
          <Anchors />
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>{!isOpen ? <Menu color="#000" /> : <X color="#000" />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex basis-full items-center flex-col">
          <Anchors />
        </div>
      )}
    </>
  );
}
