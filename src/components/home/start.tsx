import { useEffect, useRef, useState } from "react";
import Sobre from "./sobre";

export default function Start() {
  const [entradaBlur, setEntradaBlur] = useState(18);
  const [scrollBlur, setScrollBlur] = useState(0);

  const [introOpacity, setIntroOpacity] = useState(1);
  const [sobreOpacity, setSobreOpacity] = useState(0);

  const [mostrarIntro, setMostrarIntro] = useState(true);

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    window.scrollTo({
      top: 0,
      behavior: "instant" as ScrollBehavior,
    });

    const t = setTimeout(() => {
      setEntradaBlur(0);
    }, 200);

    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    function handleScroll() {
      const progress = Math.min(window.scrollY / 300, 1);

      setScrollBlur(progress * 10);
      setIntroOpacity(1 - progress);
      setSobreOpacity(progress);

      if (progress >= 1) {
        window.removeEventListener("scroll", handleScroll);

        setMostrarIntro(false);

        requestAnimationFrame(() => {
          window.scrollTo({
            top: 0,
            behavior: "instant" as ScrollBehavior,
          });
        });
      }
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative">
      {mostrarIntro ? (
        <div className="sticky top-14 h-[calc(100dvh-56px)] overflow-hidden">
          <div
            className="absolute inset-0 flex items-center justify-center bg-background"
            style={{
              filter: `blur(${entradaBlur + scrollBlur}px)`,
              opacity: introOpacity,
            }}
          >
            <h1 className="text-center text-5xl font-light">
              Olá, me chamo <span className="font-bold">Alan</span>
            </h1>
          </div>

          <div
            className="absolute inset-0"
            style={{ opacity: sobreOpacity }}
          >
            <Sobre />
          </div>
        </div>
      ) : (
        <Sobre />
      )}

      {mostrarIntro && <div className="h-dvh" />}
    </section>
  );
}