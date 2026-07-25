import {
  Mail,
  MapPin,
} from "lucide-react";

import {SiGithub} from "react-icons/si";
import {FaLinkedin} from "react-icons/fa";
import {experience,IExperience,myInfo} from "@utils/data";


export default function Footer() {
  const currentExperience: IExperience[number] | undefined = experience.find((exp) => exp.current === true);
  return (
    <footer className="border-t bg-secondary/40">
      <div className="container mx-auto flex flex-col gap-10 px-6 py-10 md:flex-row md:justify-between">
        <div>
          <h3 className="text-2xl font-bold">Alan Marinho</h3>

          <p className="text-muted-foreground">
            Full Stack Developer
          </p>

          <div className="mt-4 space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {myInfo.location.state}, {myInfo.location.country}
            </div>

            <a
              href={myInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 transition-colors hover:text-primary"
            >
              <SiGithub className="h-4 w-4" />
              /alanmarinho
            </a>
          </div>
        </div>

        <div className="text-left md:text-right">
          {currentExperience ? (
          <h3 className="text-2xl font-semibold">
            {currentExperience.title} - <a className="text-primary hover:underline" href={currentExperience.companyUrl} target="_blank" rel="noopener noreferrer">{currentExperience.company}</a>
            <p className="text-sm text-muted-foreground">{currentExperience.remote ? "Remoto" : `${currentExperience.location?.state}/${currentExperience.location?.country}`}</p>
          </h3>
          ) : (
          <h3 className="text-2xl font-semibold">
            Open to Work!
          </h3>
          )}


          <div className="mt-4 space-y-2 text-sm">
            <a
              href={myInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start gap-2 transition-colors hover:text-primary md:justify-end"
            >
              <FaLinkedin className="h-4 w-4" />
              /{myInfo.linkedin.split("/").pop()}
            </a>

            <a
              href={`mailto:${myInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start gap-2 transition-colors hover:text-primary md:justify-end"
            >
              <Mail className="h-4 w-4" />
              {myInfo.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Alan Marinho. Created with ❤️ and lots of
        coffee.
      </div>
    </footer>
  );
}