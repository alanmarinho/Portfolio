import { useNavigate } from "react-router-dom";
import { Home, TriangleAlert } from "lucide-react";


export default function Page404() {
    const navigate = useNavigate();

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/30 p-6">
            <div className="w-full max-w-lg rounded-xl border bg-background p-8 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                    <TriangleAlert className="h-8 w-8 text-muted-foreground" />
                </div>

                <h1 className="text-5xl font-bold">404</h1>

                <h2 className="mt-2 text-2xl font-semibold">
                    Página não encontrada
                </h2>

                <p className="mt-3 text-muted-foreground">
                    A página que você tentou acessar não existe ou foi movida.
                </p>

                <button
                    onClick={() => navigate("/")}
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground transition hover:opacity-90"
                >
                    <Home className="h-4 w-4" />
                    Voltar para Home
                </button>
            </div>
        </div>
    );
}