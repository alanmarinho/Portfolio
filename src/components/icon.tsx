import { useState, useEffect } from 'react';

interface iconsProps {
  icon: string;
}

export default function Icon({ icon }: iconsProps) {
  const [iconSrc, setIconSrc] = useState<string | null>(null);
  const defaultImage = 'logo';

  useEffect(() => {
    async function loadIcon() {
      try {
        const iconModule = await import(`@assets/icons/${icon}.svg`);
        setIconSrc(iconModule.default);
      } catch (error) {
        console.error(`Error loading icon: ${icon}`, error);
        const fallbackIconModule = await import(`@assets/logo.svg`);
        setIconSrc(fallbackIconModule.default);
      }
    }

    loadIcon();
  }, [icon]);

  if (iconSrc === null) {
    return (
      <>
        <img src={'@assets/logo.svg'} alt={`${icon} icon`} className="w-7" />;
      </>
    );
  }

  return (
    <>
      <img src={iconSrc} alt={`${icon} icon`} className="w-7" />
    </>
  );
}
