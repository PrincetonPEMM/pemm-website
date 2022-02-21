import type { NextApiRequest, NextApiResponse } from 'next'
import type {Stories} from '../../../components/types/stories';
import AWS from 'aws-sdk';
import Lambda from "aws-sdk/clients/lambda";
import {AWSError} from 'aws-sdk/lib/error';

const lambda = new AWS.Lambda({
    apiVersion: "latest",
    region: "us-east-1",
  });
  
  async function getStoriesByCanonicalId(canonicalid: string) {
    const payloadObject: any = {"canonicalId": canonicalid};
    const params = {
      FunctionName: "getStoryDetailByCanonicalId",
      Payload: JSON.stringify(payloadObject)
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
  res: NextApiResponse<Stories>
) {
    const { canonicalid } = req.query;
    if (typeof(canonicalid) == "string") {
        const images = getStoriesByCanonicalId(canonicalid);
        images.then((data: any) => {
            let story : Stories = JSON.parse(data).body;
            res.status(200).send(story);
            res.end();
        }).catch(() => {
            res.status(500).send({});
            res.end();
        });
    } else {
        res.status(500).send({});
        res.end();
    }
}
