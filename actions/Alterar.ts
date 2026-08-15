"use server";
import alterarTarefa from "@/type/Tarefas";
import { revalidatePath } from "next/cache";

export default async function alterar(id: string) {
  await alterarTarefa(id);
  revalidatePath("/");
}
