import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * Factory function to create ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} /> )
  if(state) wrapper.setState(state)
  return wrapper
}


/**
 * Return ShallowWrapper containing node(s) with given data-test value.
 * @param {ShallowWrrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}


test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
});


test('renders increment button' ,() => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1)
});


test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1)
});


test('counter starts at 0' , () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0)
});


test('clicking INCREMENT button increments counter in display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  // find button and click on it
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  wrapper.update();

  //  find display of counter and test its value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);
});


test('clicking DECREMENT button decrements the counter in display', () => {
    const counter = 7
    const wrapper = setup(null, { counter });

    //  Find button and click on it
    const button = findByTestAttr(wrapper, 'decrement-button');
    button.simulate('click')
    wrapper.update()

    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(counter - 1)
})


test('clicking the decrement button prevents the count from going negative', () => {
  const counter = 0
  const wrapper = setup(null, { counter })

  // Find decrement button and click it
  const button = findByTestAttr(wrapper, 'decrement-button')
  button.simulate('click')
  wrapper.update()

  const counterDisplay = findByTestAttr(wrapper, 'error-message');
  expect(counterDisplay.text()).toContain('Error')

})