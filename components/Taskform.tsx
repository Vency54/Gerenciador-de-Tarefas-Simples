"use client";
import criarTarefa from "@/actions/Criar";
import { useActionState } from "react";

const estadoInicial = {
  message: "",
};

export default function Botao() {
  const [estado, formAction, pendente] = useActionState(
    criarTarefa,
    estadoInicial,
  );

  return (
    <div>
      <form action={formAction} className="flex  items-center gap-2 mb-2">
        <input
          type="text"
          placeholder="Escreva a Tarefa"
          name="nome"
          className="border rounded-lg  px-3 py-1 h-9 w-83 gap-2 "
        />
        <p className="text-red-500">{estado.message}</p>
        <button
          className="btn btn-primary text-white border bg-black p-2 my-2 h-10"
          disabled={pendente}
        >
          {pendente ? "Adicionando..." : "Adicionar Tarefa"}
        </button>
      </form>
    </div>
  );
}
