const { PrismaClient } = require('@prisma/client');
const data = require('./data.json');

const prisma = new PrismaClient();

async function main() {
  await prisma.shareholder.createMany({
    data: data.map((d) => ({
      email: d.email,
      firstName: d.first_name,
      heldSince: d.held_since,
      lastName: d.last_name,
      postalCode: d.postal_code?.toString(),
      shareCount: d.share_count,
    })),
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
