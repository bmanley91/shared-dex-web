import Home from './';
import React from 'react';

describe('Home Page', () => {
    it('should render without errors', () => {
        const page = Home();

        expect(page).toBeTruthy();
    });
});
