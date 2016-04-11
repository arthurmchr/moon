import 'babel-polyfill';

import './vendors/modernizr';
import './utils/raf';
import AppManager from './managers/AppManager';

AppManager.start();
