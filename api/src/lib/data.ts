import fs from 'fs';
import util from 'util';
import * as path from 'path';
import * as helper from './helpers';
import { IncomingMessage, ServerResponse } from 'http';

async function readFile(base: string): Promise<{ payload?: object }> {
  try {
    return { payload: helper.parseJsonToObject(await util.promisify(fs.readFile)(base, 'utf-8')) };
  } catch (error) {
    throw new Error(helper.getErrorMessage(error));
  }
}

export function readData(fileName: string) {
  const baseFile: string = `${path.resolve('.data')}/${fileName}.json`;
  return async function (req: IncomingMessage, res: ServerResponse) {
    try {
      const { payload } = await readFile(baseFile);
      res.setHeader('Content-Type', 'application/json').end(JSON.stringify(payload));
    } catch (error) {
      console.log(error);
      res.statusCode = 500;
      res.end();
    }
  };
}
