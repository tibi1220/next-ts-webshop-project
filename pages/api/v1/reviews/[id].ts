import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await prisma.review.findMany({
    where: {
      itemId: parseInt(req.query.id as string),
    },
  });

  res.json(result);
};

export default handle;
