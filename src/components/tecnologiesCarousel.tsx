import Icon from '@components/icon';

const icons = [
  'css3',
  'figma',
  'go',
  'html',
  'javascript',
  'mongodb',
  'nodejs',
  'postgresql',
  'python',
  'react',
  'tailwindcss',
  'typescript',
];

export default function TecnologiesCarousel() {
  return (
    <>
      {icons.map((icon, id) => (
        <Icon key={id} icon={icon} />
      ))}
    </>
  );
}
