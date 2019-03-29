/* eslint-env browser */
/* eslint import/no-extraneous-dependencies: ["error"] */

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;

global.fetch = require('jest-fetch-mock');

global.window = Object.create(window);

module.exports = {
  // browser: true,
  // testURL: 'http://coolsitebro.com'
};
