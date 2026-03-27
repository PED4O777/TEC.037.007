export interface Livro {
    id: number;
    título: string;
    autor: string;
    ano: number;
    disponivel: boolean;
    categoria?: string
}