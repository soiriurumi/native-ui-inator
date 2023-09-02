import * as esbuild from 'esbuild';
import {LogLevel} from 'esbuild';
import * as fs from 'fs';

const templatePath = 'src/TampermonkeyScriptTemplate.js';

async function buildProject(watch: boolean, logLevel: LogLevel) {
  let esbuildCtx = await esbuild.context({
    entryPoints: [
      "src/TampermonkeyScript.ts",
    ],
    plugins: [
      afterBuildProcessPlugin(),
    ],
    loader: {
      '.css': 'text',
    },
    bundle: true,
    // sourcemap: true,
    outfile: 'dist/TampermonkeyScript.js',
    logLevel: 'info',
    platform: 'browser',
    // minify: true,
  });
  if (!watch) {
    await esbuildCtx.rebuild();
    return;
  }
  await esbuildCtx.watch();
}

function afterBuildProcessPlugin(): esbuild.Plugin{
  return {
    name: 'after-build-process-plugin',
    setup(build) {
      const options = build.initialOptions;
      // options.write = false;
      if (!options.entryPoints) {
        throw new Error('No entry points');
      }
      if (options.entryPoints.length != 1) {
        throw new Error('Expected exactly one entry point');
      }
      const entryPoints = options.entryPoints as string[];
      const entryPoint = entryPoints[0];
      console.log(entryPoint);

      const outfile = options.outfile;
      if (!outfile) {
        throw new Error('No outfile');
      }

      // console.log(options);

      build.onEnd(result => {
        const outfileContent = fs.readFileSync(outfile, 'utf8');
        const templateContent = fs.readFileSync(templatePath, 'utf8');
        const scriptContent = templateContent.replace('// Your code here...', outfileContent);
        fs.writeFileSync(outfile, scriptContent);
      });
    }
  };
}

async function main() {
  let watch = false;
  let logLevel: LogLevel = 'info';
  for (let i = 0; i < process.argv.length; i++) {
    if (process.argv[i] == '--watch' || process.argv[i] == '-w') {
      watch = true;
    }
    if (process.argv[i] == 'log-level' || process.argv[i] == '-l') {
      if (i + 1 >= process.argv.length) {
        console.error('Log level not specified');
        return;
      }
      logLevel = process.argv[i + 1] as LogLevel;
    }
  }
  await buildProject(watch, logLevel);
}

main().then(
  () => {
    console.log('Build script loaded.');
  }
).catch(
  (err) => {
    console.error('Build script failed to load.');
    console.error(err);
  }
);
