import { getTarefas } from "@/type/Tarefas";
import CheckBox from "./checkbox";
import DeleteBox from "./DeleteBox";

export default async function Tasklist() {
  const task = await getTarefas();

  return (
    <div>
      <ul>
        {task.map((tarefas) => (
          <li key={tarefas.id} className="mb-2">
            {tarefas.concluido === false ? (
              <div className="max-w-md flex items-center justify-between border rounded-lg px-2 py-2">
                <span className="flex-1">{tarefas.nome}</span>

                <div className="flex items-center gap-2">
                  <CheckBox id={tarefas.id} concluido={tarefas.concluido} />
                  <DeleteBox id={tarefas.id} />
                </div>
              </div>
            ) : (
              <div className="max-w-md flex items-center bg-green-500 justify-between border rounded-lg px-2 py-2">
                <span className="flex-1">{tarefas.nome}</span>

                <div className="flex items-center gap-2">
                  <CheckBox id={tarefas.id} concluido={tarefas.concluido} />
                  <DeleteBox id={tarefas.id} />
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
