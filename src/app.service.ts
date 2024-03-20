import { Injectable } from '@nestjs/common';
import { Worker } from 'worker_threads';
import { WORKER_THREAD_FILE_PATH } from './worker/config';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getBlocking(cpuTimeMs: number) {
    const startTime = Date.now();
    while (Date.now() - startTime < cpuTimeMs) {}
  }

  async getWorker(cpuTimeMs: number) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(WORKER_THREAD_FILE_PATH, {
        workerData: {
          cpuTimeMs,
        },
      });
      worker.on('message', (message) => {
        console.log('main thread got message: ', message);
        resolve(message);
      });
      worker.on('error', (error) => {
        console.error('Worker throw new error: ', error);
        reject(error);
      });
      worker.on('exit', (exit) => {
        console.log('Worker exit with code: ', exit);
      });
    });
  }
}
