const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();



prisma.category.findMany({
    include: {
        news: true
    }
})

module.exports = prisma;

