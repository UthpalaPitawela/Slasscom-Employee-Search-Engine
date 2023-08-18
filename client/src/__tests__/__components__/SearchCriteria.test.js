import React from 'react';
import { render, fireEvent,waitFor  } from '@testing-library/react';
import SearchCriteria from '../../components/Search/SearchCriteria';

test('Button click calls handleSelectCriteria',async  () => {
  const mockHandleClick = jest.fn();

  const { getByText } = render(
    <SearchCriteria handleSelectCriteria={mockHandleClick} />
  );

  const button = getByText('Specialization');
  fireEvent.click(button);

  await waitFor(() => {
    expect(mockHandleClick).toHaveBeenCalledWith('specialization');
  })
});
