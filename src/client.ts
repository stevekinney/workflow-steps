import { Connection, Client } from '@temporalio/client';
import { veryFancyComputation } from './workflows';
import { nanoid } from 'nanoid';

const connection = await Connection.connect();

const taskQueue = 'workflow-statuses';

const client = new Client({
  connection,
});

await client.workflow.start(veryFancyComputation, {
  args: [2],
  taskQueue,
  workflowId: `very-fancy-computation-${nanoid()}`,
});
