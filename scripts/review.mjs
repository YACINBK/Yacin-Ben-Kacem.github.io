import { spawn } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const args = process.argv.slice(2);
const buildOnly = args.includes('--build-only');

function runScript(scriptArgs, label) {
    return new Promise((resolveRun, rejectRun) => {
        const child = spawn(npmCommand, scriptArgs, {
            cwd: repoRoot,
            stdio: 'inherit',
            env: {
                ...process.env,
                ASTRO_TELEMETRY_DISABLED: '1',
            },
        });

        child.on('exit', (code) => {
            if (code === 0) {
                resolveRun();
                return;
            }

            rejectRun(new Error(`${label} failed with exit code ${code ?? 'unknown'}`));
        });

        child.on('error', rejectRun);
    });
}

function printReviewInfo() {
    console.log('');
    console.log('Review build ready.');
    console.log('Local URL: http://127.0.0.1:4173/portfolio/');
    console.log(`Checklist: ${resolve(repoRoot, 'docs', 'REVIEW_CHECKLIST.md')}`);
    console.log(`Feedback template: ${resolve(repoRoot, 'docs', 'REVIEW_FEEDBACK_TEMPLATE.md')}`);
    console.log('');
    console.log('Recommended mobile widths: 390px, 375px, 430px, 768px');
    console.log('Press Ctrl+C to stop the local review server.');
    console.log('');
}

async function main() {
    await runScript(['run', 'build'], 'Build');

    if (buildOnly) {
        console.log('');
        console.log('Build complete. Start the review server with `npm.cmd run review`.');
        return;
    }

    printReviewInfo();

    const preview = spawn(npmCommand, ['run', 'preview', '--', '--host', '127.0.0.1', '--port', '4173'], {
        cwd: repoRoot,
        stdio: 'inherit',
        env: {
            ...process.env,
            ASTRO_TELEMETRY_DISABLED: '1',
        },
    });

    const shutdown = () => {
        if (!preview.killed) {
            preview.kill('SIGINT');
        }
    };

    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);

    preview.on('exit', (code) => {
        process.exit(code ?? 0);
    });

    preview.on('error', (error) => {
        console.error(error);
        process.exit(1);
    });
}

main().catch((error) => {
    console.error(error.message);
    process.exit(1);
});
