import { render, screen } from '@testing-library/react';
import MainLayout from '@/layouts/MainLayout';

describe('MainLayout', () => {
  it('renders children content and updates the page title', () => {
    render(
      <MainLayout title="Test Page">
        <div>Test Content</div>
      </MainLayout>
    );

    // Check that the child content is rendered
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    // Verify that the page title is updated (document.title is set asynchronously by Next.js Head)
    expect(document.title).toBe('Test Page');
  });

  it('renders navigation links', () => {
    render(
      <MainLayout>
        <div>Test</div>
      </MainLayout>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
