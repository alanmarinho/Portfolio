import { Button } from "@base-ui/react";
import Contact from "@components/home/contact";
import Experience from "@components/home/experience";
import Projects from "@components/home/projects";
import Skills from "@components/home/skills";
import Sobre from "@components/home/sobre";
import Start from "@components/home/start";
import { useNavigate } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Start />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}