/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-var-requires */
var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });