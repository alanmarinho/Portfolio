import { createContext, useContext, useState, type ReactNode } from 'react';

export type TExemplo = '1' | '2';

// ------------------------------------------

export type TTheme = 'light' | 'dark';

interface contextData {
    exemplo: () => Promise<void>;
    theme: TTheme;
    setTheme: (theme: TTheme) => void;
}
export const dataContext = createContext<contextData>({} as contextData);
export const useData = () => {
    return useContext(dataContext);
};

export const DataContext = ({ children }: { children: ReactNode }) => {
    const [estado, setEstado] = useState<TExemplo>('1');
    const [theme, setTheme] = useState<TTheme>('dark');

    const exemplo = async () => {
        try {
            console.log('Exemplo contexto', estado);
            setEstado(estado === '1' ? '2' : '1');

        } catch (err) {
            console.error('Erro ao executar exemplo:', err);
        }
    };

    const value = {
        exemplo,
        theme,
        setTheme,
    };
    return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};