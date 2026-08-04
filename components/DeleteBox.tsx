"use client";
import deletarTarefa from "@/actions/Deletar";

type Parametros = {
  id: string;
};

export default function DeleteBox({ id }: Parametros) {
  return (
    <>
      <button
        onClick={() => deletarTarefa(id)}
        className="btn btn-primary text-white border rounded-lg bg-red-500 p-2 my-2"
      >
        Deletar
      </button>
    </>
  );
}
