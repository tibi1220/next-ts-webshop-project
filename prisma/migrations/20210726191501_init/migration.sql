/*
  Warnings:

  - You are about to alter the column `price` on the `items` table. The data in that column could be lost. The data in that column will be cast from `Decimal(6,2)` to `Real`.

*/
-- AlterTable
ALTER TABLE "items" ALTER COLUMN "price" SET DATA TYPE REAL;
