This is the core framework for testing a create react app. All dependencies, jest, and enzyme are installed configured and functioning.

Here is the setup for a baseline config to run Jest and Enzyme.

After running create-ract-app <project-name>,

1 - Run 'npm i ajv' to update all peer dependencies.

2 - Install and save jest-enzme, enzyme and enzyme-adapter-react-<react-version-number> to the develpoment environment with the command: 'npm i --save-dev jest-enzyme enzyme enzyme-adapter-react-16'

3 - Modify the test file (App.test.js) to be used with enzyme.  You do this by:
    a)  Remove ReactDom import
    b)  Replace it with Enzyme import and destructure shallow function : import Enzyme, { shallow } from 'enzyme';
    c)  Import import EnzymeAdapter from 'enzyme-adapter-react-16';
    d)  Configure new enzyme adapter : Enzyme.configure({ adapter: new EnzymeAdapter() })
    e)  Replace test function with shallow wrapper for rendering


The end result of the App.test.js file should look like this:

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('renders without crashing', () => {
  const wrapper = shallow(<App />)
});


Youre done!  Go Test!