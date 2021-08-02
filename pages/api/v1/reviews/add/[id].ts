import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../../lib/prisma';

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('aaaaa', req.body);

  const result = await prisma.review.create({
    data: { ...req.body, itemId: parseInt(req.query.id as string) },
  });

  res.status(201).json(result);
};

export default handle;
