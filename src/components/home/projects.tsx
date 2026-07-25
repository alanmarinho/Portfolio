import { ArrowRight, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/utils/data";
import { SiGithub } from "react-icons/si";


export default function Projects() {
  return (
    <section className="container mx-auto py-24 p-5" id="projetos">
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Projetos em Destaque
        </h2>

        <p className="mt-2 text-muted-foreground">
          Alguns dos projetos que desenvolvi recentemente.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
        {projects.slice(0, 4).map((project) => {
          const Icon = project.icon;

          return (
            <Card
              key={project.name}
              className="group relative min-h-40 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Icon
                size={170}
                style={{ color: project.color }}
                className="pointer-events-none absolute -right-8 -top-8 opacity-15 blur-xs transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
              />

              <CardHeader className="relative z-10">
                <CardTitle>{project.name}</CardTitle>

                <CardDescription>
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4 gap-0 flex flex-col items-start justify-start space-y-2 md:flex-row md:space-x-4 md:space-y-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
                    >
                      Ver projeto
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {project.repositoryUrl && (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
                    >
                      <SiGithub className="h-3 w-3" />
                      Ver repositório
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-12 flex justify-center">
        <a href="https://github.com/alanmarinho" target="_blank" rel="noopener noreferrer">
          <Button onClick={() => { }} size="lg" className="hover:cursor-pointer">
            Ver mais projetos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </section>
  );
}