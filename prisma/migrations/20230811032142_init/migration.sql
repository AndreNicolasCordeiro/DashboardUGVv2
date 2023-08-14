/*
  Warnings:

  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('PROFESSOR', 'ADMIN', 'ALUNO', 'COORDENADOR');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "color" TEXT,
ALTER COLUMN "name" SET NOT NULL;

-- CreateTable
CREATE TABLE "Calendar" (
    "id_calendario" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Calendar_pkey" PRIMARY KEY ("id_calendario")
);

-- CreateTable
CREATE TABLE "UserCurse" (
    "id" SERIAL NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "cursoId" INTEGER NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "UserCurse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Curse" (
    "id_curse" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Curse_pkey" PRIMARY KEY ("id_curse")
);

-- CreateTable
CREATE TABLE "evaluations" (
    "id" SERIAL NOT NULL,
    "nota" DOUBLE PRECISION NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "cursoId" INTEGER NOT NULL,

    CONSTRAINT "evaluations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserCurse" ADD CONSTRAINT "UserCurse_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCurse" ADD CONSTRAINT "UserCurse_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curse"("id_curse") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "UserCurse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curse"("id_curse") ON DELETE RESTRICT ON UPDATE CASCADE;
