import {getPlatform, PLATFORMS, setNativeUI} from './SetNativeUI';


async function main() {

  const selector = document.getElementById('platformSelector') as HTMLSelectElement;
  const platforms = Object.keys(PLATFORMS);
  const currPlatform = getPlatform();
  await setNativeUI({platform: currPlatform});
  for (const platform of platforms) {
    const option = document.createElement('option');
    option.value = platform;
    if (platform === currPlatform) {
      option.selected = true;
      option.text = platform + ' (current)';
    } else {
      option.text = platform;
    }

    selector.appendChild(option);
  }

  selector.onchange = async () => {
    console.log('Platform changed to ' + selector.value + '. Setting native UI...');
    const platform = selector.value as keyof typeof PLATFORMS;
    await setNativeUI({platform});
  };

  console.log('You are on: ' + getPlatform());

  console.log(navigator);
}


window.onload = () => {
  console.log('Window loaded');

  console.log('crossOriginIsolated: ' + window.crossOriginIsolated);
  main().then(
    () => {
      console.log('Main finished');
    }
  );
};
