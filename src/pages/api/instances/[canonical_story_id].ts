import type { NextApiRequest, NextApiResponse } from 'next'
import type {Instances} from '../../../components/types/instances';
import AWS from 'aws-sdk';
import Lambda from "aws-sdk/clients/lambda";
import {AWSError} from 'aws-sdk/lib/error';

const lambda = new AWS.Lambda({
    apiVersion: "latest",
    region: "us-east-1",
  });
  
  async function getStoryInstanceByCanonicalId(canonical_story_id: string) {
    const payloadObject: any = {"canonical_story_id": canonical_story_id};
    const params = {
      FunctionName: "getStoryInstanceByManuscript",
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
  res: NextApiResponse<Instances[] | any[]>
) {
    const { canonical_story_id } = req.query;
    if (typeof(canonical_story_id) == "string") {
        const instances = getStoryInstanceByCanonicalId(canonical_story_id);
        instances.then((data: any) => {
            let instances : Instances[] = JSON.parse(data).body;
            res.status(200).send(instances);
            res.end();
        }).catch((error: any) => {
            console.log("First error", error);
            res.status(500).send([error]);
            res.end();
        });
    } else {
        console.log("Second error");
        res.status(500).send([typeof(canonical_story_id)]);
        res.end();
    }
}
