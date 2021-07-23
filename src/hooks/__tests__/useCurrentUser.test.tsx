import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useCurrentUser from '../useCurrentUser';
import UserContextProvider from '../../context/UserContext';
import localStorageMock from '../../tests/__mocks__/localStorage';

describe('useCurrentUser', () => {
  beforeAll(() => {
    Object.defineProperty(global, 'localStorage', {
      value: localStorageMock,
    });
  });
  test('returns the user and login method', () => {
    type Props = {
      children: React.ReactNode
    }
    const wrapper = ({ children }: Props) => (
      <UserContextProvider>{children}</UserContextProvider>
    );
    const { result } = renderHook(() => useCurrentUser(), { wrapper });
    expect(result.current.currentUser).toBeNull();
    expect(result.current.login).toBeDefined();
  });
});
