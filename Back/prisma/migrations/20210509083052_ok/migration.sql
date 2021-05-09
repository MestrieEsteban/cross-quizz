-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Quiz" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT
);
INSERT INTO "new_Quiz" ("id", "name", "image") SELECT "id", "name", "image" FROM "Quiz";
DROP TABLE "Quiz";
ALTER TABLE "new_Quiz" RENAME TO "Quiz";
CREATE UNIQUE INDEX "Quiz.name_unique" ON "Quiz"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
