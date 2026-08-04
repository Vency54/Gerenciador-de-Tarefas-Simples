"use server";
import alterarTarefa, { getTarefas } from "@/type/Tarefas";
import { revalidatePath } from "next/cache";

export default async function alterar(id: string) {
  alterarTarefa(id);
  revalidatePath("/");
}
