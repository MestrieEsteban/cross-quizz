/*
  Warnings:

  - You are about to drop the `Stats` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `time` to the `UserQuiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correctResponse` to the `UserQuiz` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Stats";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserQuiz" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quizId" INTEGER NOT NULL,
    "time" TEXT NOT NULL,
    "correctResponse" INTEGER NOT NULL,
    "userId" INTEGER,
    FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_UserQuiz" ("id", "quizId", "userId") SELECT "id", "quizId", "userId" FROM "UserQuiz";
DROP TABLE "UserQuiz";
ALTER TABLE "new_UserQuiz" RENAME TO "UserQuiz";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
