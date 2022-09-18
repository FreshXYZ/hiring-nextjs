import prisma from '../../lib/prisma';
import type { NextApiHandler } from 'next';

// This API endpoint will return all shareholders.
// You might need to uplift this to perform better and fullfil the business requirements.
const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);

    return;
  }

  const shareholders = await prisma.shareholder.findMany();

  res.status(200).json(shareholders);
};

export default handler;
