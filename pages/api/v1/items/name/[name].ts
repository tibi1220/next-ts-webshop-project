import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../../lib/prisma';

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;

  const result = await prisma.item.findMany({
    where: {
      name: {
        contains: query.name as string,
        mode: 'insensitive',
      },
    },

    include: {
      reviews: {
        select: {
          stars: true,
        },
      },
    },
  });

  res.status(200).json(result);
};

export default handle;
