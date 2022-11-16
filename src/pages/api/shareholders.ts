import prisma from '../../../lib/prisma';
import type { NextApiHandler } from 'next';

// This API endpoint will return all shareholders.
// You might need to uplift this to perform better and fullfil the business requirements.
const handler: NextApiHandler = async (req, res) => {
  try {
    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      return;
    }
    const { page, pageSize, orderBy, searchTerm, orderDirection } =
      req.query as {
        page: string;
        pageSize: string;
        orderBy: string;
        searchTerm: string;
        orderDirection: string;
      };

    const limit = pageSize ? parseInt(pageSize) : 10;

    const skip = page && pageSize ? parseInt(page) * parseInt(pageSize) : 1;

    const data = await prisma.$transaction([
      prisma.shareholder.count({
        where: searchTerm
          ? {
              firstName: {
                startsWith: searchTerm,
                mode: 'insensitive',
              },
            }
          : undefined,
      }),
      prisma.shareholder.findMany({
        skip,
        take: limit,
        orderBy:
          orderBy && orderDirection ? { [orderBy]: orderDirection } : undefined,
        where: searchTerm
          ? {
              firstName: {
                startsWith: searchTerm,
                mode: 'insensitive',
              },
            }
          : undefined,
      }),
    ]);
    if (!data.length || !data[0] || !data[1]) {
      throw new Error('Something went wrong');
    }

    const totalCount = data[0];
    const shareholders = data[1];

    const response = {
      shareholders,
      totalCount,
      cursor:
        shareholders.length === limit
          ? shareholders[shareholders.length - 1].id
          : undefined,
    };

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export default handler;
