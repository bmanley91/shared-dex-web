import Home from './index';

describe('Home Page', () => {
    it('should render without error', () => {
        const page = Home();

        expect(page).toBeTruthy();
    });
});
