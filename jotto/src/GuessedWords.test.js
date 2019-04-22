import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAttribute, checkProps } from '../test/testUtilities'
import GuessedWords from './GuessedWords'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const defaultProps = {
    guessedWords: [{guessedWord: 'train', letterMatchCount: 3}],
}

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<GuessedWords {...setupProps} /> )
}

test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps)
});

describe('if there are no words guessed', () => {
    let wrapper
    beforeEach(() => (
        wrapper = setup({guessedWords: []})
    )); 
    test('renders without error', ()=>{
        const component = findByTestAttribute(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    });
    test('renders instructions to guess a word', ()=>{
        const instructions = findByTestAttribute(wrapper, 'guess-instructions')
        expect(instructions.text().length).not.toBe(0)
    });
});

describe('if there are words guessed', () => {
    
});