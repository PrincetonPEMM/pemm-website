import type { NextApiRequest, NextApiResponse } from 'next'
import type { Manuscripts } from '../../../components/types/manuscripts';
import AWS from 'aws-sdk';
import Lambda from "aws-sdk/clients/lambda";
import { AWSError } from 'aws-sdk/lib/error';

const lambda = new AWS.Lambda({
  apiVersion: "latest",
  region: "us-east-1",
});

async function getManuscriptsByManuscriptId(manuscriptid: string) {
  const payloadObject: any = { "manuscriptId": manuscriptid };
  const params = {
    FunctionName: "getManuscriptDetailByManuscriptId",
    Payload: JSON.stringify(payloadObject)
  };
  return new Promise((resolve, reject) => {
    lambda.invoke(params, function (err: AWSError, data: Lambda.Types.InvocationResponse) {
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
  const { manuscriptId } = req.query;
  if (typeof (manuscriptId) == "string") {
    const manuscripts = getManuscriptsByManuscriptId(manuscriptId);
    manuscripts.then((data: any) => {
      let manuscript: Manuscripts = JSON.parse(data).body;
      res.status(200).send([manuscript]);
      res.end();
    }).catch(() => {
      res.status(500).send([]);
      res.end();
    });
  } else {
    res.status(500).send([]);
    res.end();
  }
}
