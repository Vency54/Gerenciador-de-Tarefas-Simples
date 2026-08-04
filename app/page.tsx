import Taskform from "@/components/Taskform";
import Tasklist from "@/components/Tasklist";

export default function Home() {
  return (
    <div>
      <header>
        <h1 className="text-black"> Gerenciador de Tarefas</h1>
      </header>
      <main>
        <Taskform />
        <Tasklist />
      </main>
    </div>
  );
}
