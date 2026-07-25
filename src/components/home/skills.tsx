import { Badge } from "@components/ui/badge";
import { skills } from "@utils/data";
import { useNavigate } from "react-router-dom";

export default function Skills() {
    const navigate = useNavigate();
    return (
        <section className="mx-auto flex max-w-5xl flex-col items-center py-24 p-5" id="habilidades">
            <h2 className="text-center text-3xl font-bold">
                Minhas Habilidades
            </h2>
            <p className="mb-10 mt-2 text-muted-foreground">
                Principais tecnologias e ferramentas que utilizo no meu dia a dia como desenvolvedor.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
                {skills.map(({ name, icon: Icon }) => (
                    <Badge onClick={() => { navigate(`/projects?skill=${name}`); }} key={name} className="flex items-center gap-2 rounded-lg px-6 py-2 text-md font-medium">
                        <Icon className="text-base" />
                        <span className="text-md font-medium">{name}</span>
                    </Badge>
                ))}
            </div>
        </section>
    );
}