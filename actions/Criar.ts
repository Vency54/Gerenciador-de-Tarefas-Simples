"use server";
import { addTarefas } from "@/type/Tarefas";
import { revalidatePath } from "next/cache";

export default async function criarTarefa(prevState: any, formdata: FormData) {
  const nome = formdata.get("nome") as string;

  if (!nome) {
    return { message: "Escreva a tarefa!" };
  }

  const novaTarefa = {
    id: Date.now().toString(),
    nome,
    concluido: false,
  };
  await addTarefas(novaTarefa);
  revalidatePath("/");
  return { message: "Funcionou" };
}
