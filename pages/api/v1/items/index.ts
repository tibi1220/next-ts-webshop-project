import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await prisma.item.findMany({
    orderBy: {
      id: 'asc',
    },
  });

  res.status(200).json(result);
};

export default handle;
