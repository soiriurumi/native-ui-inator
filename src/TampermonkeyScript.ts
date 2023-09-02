import {setNativeUI} from './SetNativeUI';

async function main() {
  // console.log('TampermonkeyScript.ts loaded');
  await setNativeUI({});
}

window.onload = () => {
  main().then(
    () => {
    }
  );
};