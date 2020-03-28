import Home from './index.page';

describe('Home Page', () => {
    it('should render without error', () => {
        const page = Home();

        expect(page).toBeTruthy();
    });
});
