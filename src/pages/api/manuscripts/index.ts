import type { NextApiRequest, NextApiResponse } from 'next'
import type {Manuscripts} from '../../../components/types/manuscripts';
import AWS from 'aws-sdk';
import Lambda from "aws-sdk/clients/lambda";
import {AWSError} from 'aws-sdk/lib/error';

const lambda = new AWS.Lambda({
  apiVersion: "latest",
  region: "us-east-1",
});

async function getManuscriptList() {
  const params = {
    FunctionName: "getManuscriptList",
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
  res: NextApiResponse<Manuscripts[]>
) {
  const manuscripts_response = getManuscriptList();
  manuscripts_response.then((data: any) => {
    let manuscripts : Manuscripts[] = JSON.parse(data).body;
    res.status(200).send(manuscripts);
    res.end();
  }).catch(() => {
    res.status(500).send([]);
    res.end();
  });
}
