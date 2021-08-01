/*
  Warnings:

  - Added the required column `stars` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "stars" SMALLINT NOT NULL;
