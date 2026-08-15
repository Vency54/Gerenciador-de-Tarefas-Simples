import { prisma } from "@/lib/prisma";

export type Tarefa = {
  id: string;
  nome: string;
  concluido: boolean;
};

//retorna todas as tarefas
export async function getTarefas() {
  return await prisma.tarefas.findMany({
    orderBy: { id: "asc" },
  });
}

export async function removerTarefa(id: string) {
  await prisma.tarefas.delete({ where: { id: id } });
}

export default async function alterarTarefa(id: string) {
  const tarefa = await prisma.tarefas.findUnique({
    where: { id: id },
  });

  if (tarefa) {
    await prisma.tarefas.update({
      where: { id: id },
      data: { concluido: !tarefa.concluido },
    });
  }
}

export async function addTarefas(task: Tarefa) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  await prisma.tarefas.create({
    data: {
      id: task.id,
      nome: task.nome,
      concluido: task.concluido,
    },
  });
  return getTarefas();
}
