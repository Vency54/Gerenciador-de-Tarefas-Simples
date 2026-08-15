"use client";
import alterar from "@/actions/Alterar";

type Parametros = {
  id: string;
  concluido: boolean;
};

export default function CheckBox({ id, concluido }: Parametros) {
  return (
    <>
      <input
        type="checkbox"
        checked={concluido}
        onChange={() => alterar(id)}
        className="scale-150"
      />
    </>
  );
}
