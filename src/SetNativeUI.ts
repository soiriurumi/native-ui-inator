export const PLATFORMS = {
  WINDOWS10: 'WINDOWS10',
  MACOS: 'MACOS',
  LINUX: 'LINUX',
  ANDROID: 'ANDROID',
  IOS: 'IOS',
  UNKNOWN: 'unknown'
};

type Platform = [keyof typeof PLATFORMS] | typeof PLATFORMS[keyof typeof PLATFORMS];

const windows10CSS = import('./css/windows10.css');
const macosCSS = import('./css/macos.css');
const linuxCSS = import('./css/android.css');
const androidCSS = import('./css/android.css');
const iosCSS = import('./css/ios.css');

const NATIVE_UI_CSS_ID = 'native-ui-css';

function isIOS() {
  return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
}

function isAndroid() {
  return navigator.userAgent.includes('Android');

}


export function getPlatform(): typeof PLATFORMS[keyof typeof PLATFORMS] {

  try {
    const platform = navigator.platform;
    if (platform.startsWith('Win')) {
      return PLATFORMS.WINDOWS10;
    } else if (isAndroid()) {
      return PLATFORMS.ANDROID;
    } else if (isIOS()) {
      return PLATFORMS.IOS;
    } else if (platform.startsWith('Linux')) {
      return PLATFORMS.LINUX;
    } else if (platform.startsWith('Mac')) {
      return PLATFORMS.MACOS;
    }
    return PLATFORMS.UNKNOWN;
  } catch (e) {
    return PLATFORMS.UNKNOWN;
  }
}

interface NativeUIConfig {
  platform?: keyof typeof PLATFORMS | typeof PLATFORMS[keyof typeof PLATFORMS];
}

async function getPlatformCSSStr(platform: Platform): Promise<string> {
  switch (platform) {
    case PLATFORMS.WINDOWS10:
      return (await windows10CSS).default;
    case PLATFORMS.MACOS:
      return (await macosCSS).default;
    case PLATFORMS.LINUX:
      return (await linuxCSS).default;
    case PLATFORMS.ANDROID:
      return (await androidCSS).default;
    case PLATFORMS.IOS:
      return (await iosCSS).default;
    default:
      return '';
  }
}

async function addCSS(platform: Platform) {
  // console.log('Adding CSS for platform: ' + platform);
  const cssStr = await getPlatformCSSStr(platform);
  const style = document.createElement('style');
  style.textContent = cssStr;
  style.id = NATIVE_UI_CSS_ID;
  document.head.appendChild(style);
}

function removeOldCSS() {
  const oldNativeUICSS = document.getElementById(NATIVE_UI_CSS_ID);
  if (oldNativeUICSS) {
    oldNativeUICSS.remove();
  }
}

export async function setNativeUI(config?: NativeUIConfig) {
  removeOldCSS();
  if (!config) {
    config = {};
  }
  if (!config.platform) {
    config.platform = getPlatform();
  }
  await addCSS(config.platform);
}
