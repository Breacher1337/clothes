import formatDate from '@/utils/formatDate';

describe('formatDate utility', () => {
  it('should format a date correctly', () => {
    const date = new Date('2025-01-01T00:00:00Z');
    const formatted = formatDate(date);
    expect(typeof formatted).toBe('string');
    // Check that the formatted date contains the year 2025
    expect(formatted).toContain('2025');
  });
});
