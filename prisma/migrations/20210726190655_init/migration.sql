-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "review" VARCHAR(200) NOT NULL,
    "item_id" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" VARCHAR(200) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "posts" ADD FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE CASCADE ON UPDATE CASCADE;
