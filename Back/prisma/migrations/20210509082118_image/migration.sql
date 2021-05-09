/*
  Warnings:

  - Added the required column `image` to the `Quiz` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Quiz" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL
);
INSERT INTO "new_Quiz" ("id", "name") SELECT "id", "name" FROM "Quiz";
DROP TABLE "Quiz";
ALTER TABLE "new_Quiz" RENAME TO "Quiz";
CREATE UNIQUE INDEX "Quiz.name_unique" ON "Quiz"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
