"use server";
import { removerTarefa } from "@/type/Tarefas";
import { revalidatePath } from "next/cache";

export default async function deletarTarefa(id: string) {
  removerTarefa(id);
  revalidatePath("/");
}
