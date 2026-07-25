import { Briefcase, ArrowRight, ExternalLink } from "lucide-react";

import { Button } from "@components/ui/button";
import { Badge } from "@components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@components/ui/card";

import { experience, myInfo } from "@utils/data";

function formatDate(date: Date | null) {
  if (!date) return "Atual";

  return date.toLocaleDateString("pt-BR", {
    month: "short",
    year: "numeric",
  });
}

function formatPeriod(startDate: Date, endDate: Date | null) {
  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
}

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="container mx-auto max-w-5xl py-24 p-5"
    >
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Experiência Profissional
        </h2>

        <p className="mt-2 text-muted-foreground">
          Minha trajetória na área de desenvolvimento de software.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-5 top-0 h-full w-px bg-border" />

        <div className="space-y-8">
          {experience.map((exp) => (
            <div
              key={`${exp.company}-${exp.startDate}`}
              className="relative flex gap-6"
            >
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-background">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>

              <Card className="flex-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <CardHeader className="flex flex-col items-start justify-between gap-4 md:flex-row ">
                  <div className="">
                    <CardTitle>
                      {exp.title}
                    </CardTitle>

                    <div className="flex items-center gap-2">
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
                      >
                        {exp.company}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <span>{exp.remote ? "Remoto" : `${exp.location?.state}, ${exp.location?.country}`}</span>
                    </div>
                  </div>

                  <Badge variant="secondary">
                    {formatPeriod(exp.startDate, exp.endDate)}
                  </Badge>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {exp.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">

                    {exp.skills && exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <a href={myInfo.resume} target="_blank" rel="noopener noreferrer">
          <Button variant="outline">
            Ver currículo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </section>
  );
}