import { renderHook, act } from '@testing-library/react-hooks';
import useDebounce from '@/hooks/useDebounce';

jest.useFakeTimers();

describe('useDebounce hook', () => {
  it('should update debounced value after the delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'initial', delay: 500 },
      }
    );

    // Initial value should be 'initial'
    expect(result.current).toBe('initial');

    // Update the hook's value
    rerender({ value: 'changed', delay: 500 });
    // Immediately after, the value should still be 'initial'
    expect(result.current).toBe('initial');

    // Fast-forward time by 500ms
    act(() => {
      jest.advanceTimersByTime(500);
    });

    // Now the debounced value should update
    expect(result.current).toBe('changed');
  });
});
