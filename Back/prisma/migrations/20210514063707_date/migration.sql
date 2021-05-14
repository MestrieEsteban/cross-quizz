-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserQuiz" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quizId" INTEGER NOT NULL,
    "time" TEXT NOT NULL,
    "correctResponse" INTEGER NOT NULL,
    "userId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_UserQuiz" ("id", "quizId", "time", "correctResponse", "userId") SELECT "id", "quizId", "time", "correctResponse", "userId" FROM "UserQuiz";
DROP TABLE "UserQuiz";
ALTER TABLE "new_UserQuiz" RENAME TO "UserQuiz";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
