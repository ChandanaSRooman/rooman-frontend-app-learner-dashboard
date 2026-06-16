import { render, screen } from '@testing-library/react';
import { IntlProvider } from '@edx/frontend-platform/i18n';

import CourseCard from '.';

const namesMockComponents = [
  'CourseCardImage',
  'CourseCardMenu',
  'CourseCardActions',
  'CourseCardTitle',
  'CourseCardFavorite',
];

jest.mock('./components/CourseCardImage', () => jest.fn(() => <div>CourseCardImage</div>));
jest.mock('./components/CourseCardMenu', () => jest.fn(() => <div>CourseCardMenu</div>));
jest.mock('./components/CourseCardActions', () => jest.fn(() => <div>CourseCardActions</div>));
jest.mock('./components/CourseCardTitle', () => jest.fn(() => <div>CourseCardTitle</div>));
jest.mock('./components/CourseCardFavorite', () => jest.fn(() => <div>CourseCardFavorite</div>));

const cardId = 'test-card-id';

const renderCard = () => render(
  <IntlProvider locale="en"><CourseCard cardId={cardId} /></IntlProvider>,
);

describe('CourseCard component', () => {
  it('renders the image inside the vertical media wrapper', () => {
    renderCard();
    const cardImage = screen.getByText('CourseCardImage');
    expect(cardImage.parentElement).toHaveClass('course-card-media');
  });

  it('renders the clean set of courseCard child components', () => {
    renderCard();
    namesMockComponents.forEach((courseCardName) => {
      expect(screen.getByText(courseCardName)).toBeInTheDocument();
    });
  });

  it('omits the provider details and status banners for an uncluttered card', () => {
    renderCard();
    expect(screen.queryByText('CourseCardDetails')).not.toBeInTheDocument();
    expect(screen.queryByText('CourseCardBanners')).not.toBeInTheDocument();
  });
});
