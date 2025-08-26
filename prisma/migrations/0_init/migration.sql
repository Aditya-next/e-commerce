-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "public"."signup" (
    "id" SERIAL NOT NULL,
    "firstname" VARCHAR(20),
    "lastname" VARCHAR(20),
    "email" VARCHAR(50) NOT NULL,
    "lastlogin" TIMESTAMP(6),

    CONSTRAINT "signup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "signup_email_key" ON "public"."signup"("email");

