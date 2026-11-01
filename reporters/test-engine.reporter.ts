import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import type {
  FullConfig,
  FullResult,
  Reporter,
  TestCase,
  TestResult
} from '@playwright/test/reporter';

type TestEngineEntry = {
  title: string;
  titlePath: string[];
  file: string;
  line: number;
  project: string;
  status: string;
  durationMs: number;
  retries: number;
  errors: string[];
};

export default class TestEngineReporter implements Reporter {
  private readonly reportPath = resolve('test-results/test-engine-report.json');
  private readonly tests: TestEngineEntry[] = [];
  private startedAt = '';

  onBegin(_config: FullConfig): void {
    this.startedAt = new Date().toISOString();
    this.tests.length = 0;
  }

  onTestEnd(test: TestCase, result: TestResult): void {
    this.tests.push({
      title: test.title,
      titlePath: test.titlePath(),
      file: test.location.file,
      line: test.location.line,
      project: test.parent.project()?.name || 'default',
      status: result.status,
      durationMs: result.duration,
      retries: result.retry,
      errors: result.errors.map((error) => error.message ?? error.value ?? 'Unknown error')
    });
  }

  async onEnd(result: FullResult): Promise<void> {
    await mkdir(dirname(this.reportPath), { recursive: true });
    await writeFile(
      this.reportPath,
      JSON.stringify(
        {
          startedAt: this.startedAt,
          finishedAt: new Date().toISOString(),
          status: result.status,
          durationMs: result.duration,
          total: this.tests.length,
          passed: this.tests.filter((test) => test.status === 'passed').length,
          failed: this.tests.filter((test) => test.status === 'failed').length,
          skipped: this.tests.filter((test) => test.status === 'skipped').length,
          tests: this.tests
        },
        null,
        2
      ),
      'utf8'
    );
  }
}
