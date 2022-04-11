import type { NextApiRequest, NextApiResponse } from 'next'
import type {Stories } from '../../../components/types/stories';
import AWS from 'aws-sdk';
import Lambda from "aws-sdk/clients/lambda";
import {AWSError} from 'aws-sdk/lib/error';

const lambda = new AWS.Lambda({
  apiVersion: "latest",
  region: "us-east-1",
});

async function getStoryList() {
  const params = {
    FunctionName: "getStoryList",
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
  res: NextApiResponse<string>
) {
  const stories_response = getStoryList();
  stories_response.then((data: any) => {
    res.status(200).send(data);
    res.end();
  }).catch(() => {
    res.status(500).send('');
    res.end();
  });
}
