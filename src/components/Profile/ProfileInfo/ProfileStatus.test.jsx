import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';


describe('Profile Status Component', ()=>{
    test('status from props should be in state', ()=>{
        const component = create(<ProfileStatus status="der hund i kisulik"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("der hund i kisulik");
    });

    test('status creation <input> should be displayed', ()=>{
        const component = create(<ProfileStatus status="der hund i kisulik"/>);
        const root = component.root;
        expect(()=>{
            let input = root.findByType('input')
        }).toThrow();
    });

    test('status creation <span> should be displayed', ()=>{
        const component = create(<ProfileStatus status="der hund i kisulik"/>);
        const root = component.root;
        let span = root.findByType('span')
        expect(span).not.toBeNull();
    });

    test('status creation <span> should contain correct status', ()=>{
        const component = create(<ProfileStatus status="der hund i kisulik"/>);
        const root = component.root;
        let span = root.findByType('span')
        expect(span.children[0]).toBe("der hund i kisulik");
    });

    test('<input> should be displayed in editMode instead of <span>', ()=>{
        const component = create(<ProfileStatus status="der hund i kisulik"/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe("der hund i kisulik");
    });

    test('callback should be called', ()=>{
        const mockCallBack = jest.fn();
        const component = create(<ProfileStatus status="der hund i kisulik" updateUserStatus={mockCallBack}/>);
        const instance = component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
});