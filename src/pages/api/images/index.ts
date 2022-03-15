import type { NextApiRequest, NextApiResponse } from 'next'
import type {Paintings} from '../../../components/types/paintings';
import AWS from 'aws-sdk';
import Lambda from "aws-sdk/clients/lambda";
import {AWSError} from 'aws-sdk/lib/error';

const lambda = new AWS.Lambda({
  apiVersion: "latest",
  region: "us-east-1",
});

async function getAllImageUris() {
  const params = {
    FunctionName: "getAllPaintingUrls",
  };
  return new Promise ((resolve, reject) => {
    lambda.invoke(params, function(err: AWSError, data: Lambda.Types.InvocationResponse) {
      if (err) {
        reject(err);
      } else if (data) {
        resolve(data.Payload);
      }
    });
  });
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Paintings[]>
) {
  const images = getAllImageUris();
  images.then((data: any) => {
    let paintings : Paintings[] = JSON.parse(data).body;
    res.status(200).send(paintings);
    res.end();
  }).catch(() => {
    res.status(500).send([]);
    res.end();
  });
}
