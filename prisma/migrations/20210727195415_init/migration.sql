/*
  Warnings:

  - Made the column `seller` on table `items` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "items" ALTER COLUMN "seller" SET NOT NULL;
