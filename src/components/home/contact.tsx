import {
  Mail,
  ArrowUpRight,
} from "lucide-react";

import {SiGithub} from "react-icons/si";
import {FaLinkedin} from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { myInfo } from "@/utils/data";

const contacts = [
  {
    title: "E-mail",
    value: myInfo.email,
    href: `mailto:${myInfo.email}`,
    icon: Mail,
  },
  {
    title: "GitHub",
    value: `@${myInfo.github.split("/").pop()}`,
    href: myInfo.github,
    icon: SiGithub,
  },
  {
    title: "LinkedIn",
    value: myInfo.linkedin.split("/").pop(),
    href: myInfo.linkedin,
    icon: FaLinkedin,
  },
];

export default function Contact() {
  return (
    <section className="container  mx-auto py-24 p-5" id="contato">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Vamos conversar?
        </h2>

        <p className="mt-3 text-muted-foreground">
          Estou sempre aberto a novas oportunidades e projetos.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
        {contacts.map(({ title, value, href, icon: Icon }) => (
          <Card
            key={title}
            className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <CardContent className="flex items-center gap-4 p-6">
              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                <Icon size={22} />
              </div>

              <div className="flex-1 overflow-hidden">
                <p className="text-sm text-muted-foreground">
                  {title}
                </p>

                <p className="truncate font-medium">
                  {value}
                </p>
              </div>

              <Button
                
                variant="ghost"
                size="icon"
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button size="lg">
          <a href={`mailto:${myInfo.email}`} target="_blank" rel="noopener noreferrer">
            Enviar e-mail
          </a>
        </Button>
      </div>
    </section>
  );
}