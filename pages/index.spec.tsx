import React from 'react';
import { shallow } from 'enzyme';
import Home from './index.page';

describe('Home Page', () => {
    it('should render without error', () => {
        const page = shallow(<Home />);

        expect(page).toBeTruthy();
    });
});
