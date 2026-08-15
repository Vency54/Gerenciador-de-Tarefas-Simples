-- CreateTable
CREATE TABLE "Tarefas" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "concluido" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Tarefas_pkey" PRIMARY KEY ("id")
);
