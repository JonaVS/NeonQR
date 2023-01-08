import { isIOS, isIOS13, isIPad13, isMacOs } from 'react-device-detect';

export const isAppleDevice = (isIOS || isIOS13 || isIPad13 || isMacOs) && true 