// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(["Pineapple", "Peach", "Apple", "Watermelon", "Melon", "Guava", "Banana", "Orange", "Grape", "Kiwi", "Blueberry", "Blackberry", "Pear", "Tangerine", "Plum", "Mango", "Date", "Cantaloupe", "Strawberry", "Coconut"])
}
