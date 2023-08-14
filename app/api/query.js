import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const users = await prisma.user.findMany(); // Substitua 'user' pelo nome da tabela que você quer consultar
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar o banco de dados.' });
  }
}
