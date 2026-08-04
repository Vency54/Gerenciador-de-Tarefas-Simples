export type Tarefa = {
  id: string;
  nome: string;
  concluido: boolean;
};

export let tarefa: Tarefa[] = [
  { id: "1", nome: "Estudar inglês", concluido: false },
  { id: "2", nome: "Treinar violão", concluido: false },
];

export async function getTarefas() {
  return [...tarefa];
}

export async function removerTarefa(id: string) {
  const indice = tarefa.findIndex((t) => t.id === id);

  if (indice !== -1) {
    tarefa.splice(indice, 1);
  }
}

export default async function alterarTarefa(id: string) {
  const tasks = await getTarefas();

  const tarefa = tasks.find((t) => t.id === id);

  if (tarefa) {
    tarefa.concluido = !tarefa.concluido;
  }
}

export async function addTarefas(task: Tarefa) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  tarefa = [...tarefa, task];
  return getTarefas();
}
