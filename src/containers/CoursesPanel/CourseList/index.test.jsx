import { render, screen } from '@testing-library/react';
import { IntlProvider } from '@edx/frontend-platform/i18n';

import CourseList from '.';

jest.mock('containers/CourseCard', () => jest.fn(() => <div>CourseCard</div>));
jest.mock('containers/CourseFilterControls', () => ({
  ActiveCourseFilters: jest.fn(() => <div>ActiveCourseFilters</div>),
}));

describe('CourseList', () => {
  const defaultCourseListData = {
    filterOptions: {},
    numPages: 1,
    setPageNumber: jest.fn().mockName('setPageNumber'),
    showFilters: false,
    fullList: [],
    visibleList: [],
  };

  const renderList = (courseListData = defaultCourseListData) => (
    render(<IntlProvider locale="en"><CourseList courseListData={courseListData} /></IntlProvider>)
  );

  describe('no courses or filters', () => {
    it('should not render related components', () => {
      renderList();
      expect(screen.queryByText('ActiveCourseFilters')).toBeNull();
      expect(screen.queryByText('CourseCard')).toBeNull();
    });
  });

  describe('with filters', () => {
    it('should render filter component', () => {
      renderList({ ...defaultCourseListData, showFilters: true });
      expect(screen.getByText('ActiveCourseFilters')).toBeInTheDocument();
    });
  });

  describe('with multiple courses', () => {
    it('renders a CourseCard per course, grouped into sections', () => {
      const fullList = [{ cardId: 'foo' }, { cardId: 'bar' }, { cardId: 'baz' }];
      renderList({ ...defaultCourseListData, fullList, visibleList: fullList });
      expect(screen.getAllByText('CourseCard')).toHaveLength(fullList.length);
    });

    it('groups by status into the matching section headings', () => {
      const fullList = [
        { cardId: 'a', enrollment: { hasStarted: true }, courseRun: { isArchived: false } },
        { cardId: 'b', enrollment: { hasStarted: false }, courseRun: { isArchived: false } },
        { cardId: 'c', enrollment: { hasStarted: true }, courseRun: { isArchived: true } },
      ];
      renderList({ ...defaultCourseListData, fullList, visibleList: fullList });
      expect(screen.getByText('In progress')).toBeInTheDocument();
      expect(screen.getByText('Not started')).toBeInTheDocument();
      expect(screen.getByText('Archived')).toBeInTheDocument();
      expect(screen.getAllByText('CourseCard')).toHaveLength(fullList.length);
    });
  });
});
