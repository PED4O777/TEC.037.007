import { biblioteca } from "./database";
import { buscarlivroPorId } from "./actions";

const meuLivro = buscarlivroPorId(1);
console.log(meuLivro?.título);