-- CreateTable
CREATE TABLE "Quizzes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "work_time" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Passages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "quiz_id" TEXT NOT NULL,
    CONSTRAINT "Passages_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "Quizzes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GroupQuestions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "image" TEXT,
    "type" TEXT,
    "summary_title" TEXT,
    "summary_content" TEXT,
    "passage_id" TEXT NOT NULL,
    CONSTRAINT "GroupQuestions_passage_id_fkey" FOREIGN KEY ("passage_id") REFERENCES "Passages" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Questions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "question_name" TEXT,
    "option_a" TEXT,
    "option_b" TEXT,
    "option_c" TEXT,
    "option_d" TEXT,
    "group_question_id" TEXT NOT NULL,
    CONSTRAINT "Questions_group_question_id_fkey" FOREIGN KEY ("group_question_id") REFERENCES "GroupQuestions" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Answers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "answer_name" TEXT NOT NULL,
    "question_id" TEXT NOT NULL,
    CONSTRAINT "Answers_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Questions" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Answers_question_id_key" ON "Answers"("question_id");
