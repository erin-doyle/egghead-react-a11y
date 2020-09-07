import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { axe, toHaveNoViolations } from 'jest-axe';

import Login from '../Login';


expect.extend(toHaveNoViolations);
Enzyme.configure({ adapter: new Adapter() });

it('should not violate accessibility rules', async () => {
    const LoginPage = mount(
        <Login history={{ push: jest.fn() }} />
    );

    const results = await axe(LoginPage.getDOMNode());

    expect(results).toHaveNoViolations();
});
