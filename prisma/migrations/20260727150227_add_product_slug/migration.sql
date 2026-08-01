-- AlterTable
ALTER TABLE "Product" ADD COLUMN "slug" TEXT;

-- Backfill (no existing rows expected, but safe if there are)
UPDATE "Product" SET "slug" = "id" WHERE "slug" IS NULL;

-- Enforce NOT NULL now that every row has a value
ALTER TABLE "Product" ALTER COLUMN "slug" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");
