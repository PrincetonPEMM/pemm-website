import type { NextApiRequest, NextApiResponse } from 'next'
import type {Images} from '../../../components/types/images';
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
  res: NextApiResponse<Images>
) {
  const images = getAllImageUris();
  images.then((data) => {
    let imagesObject : Images = JSON.parse(data).body;
    res.status(200).json(imagesObject);
  }).catch((error) => {
    res.status(200).json({imageUris: error});
  });
}
