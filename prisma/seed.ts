import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.post.upsert({
    where: {
      title: 'post testowy1',
    },
    update: {},
    create: {
      title: 'post testowy1',
      content: 'elo z testowego świata',
    },
  });

  const post2 = await prisma.post.upsert({
    where: {
      title: 'post testowy2',
    },
    update: {},
    create: {
      title: 'post testowy2',
      content: 'elo z testowego świata',
    },
  });

  console.log({ post2, post1 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
