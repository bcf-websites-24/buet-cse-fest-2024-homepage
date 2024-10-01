-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "registrationLink" TEXT,
    "ruleBookLink" TEXT,
    "discordLink" TEXT,
    "kaggleLink" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimeLine" (
    "id" TEXT NOT NULL,
    "event" TEXT,
    "location" TEXT,
    "date" TEXT,
    "eventId" TEXT,

    CONSTRAINT "TimeLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PrizeMoney" (
    "id" TEXT NOT NULL,
    "label" TEXT,
    "prize" TEXT,
    "eventId" TEXT,

    CONSTRAINT "PrizeMoney_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TimeLine" ADD CONSTRAINT "TimeLine_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrizeMoney" ADD CONSTRAINT "PrizeMoney_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;
