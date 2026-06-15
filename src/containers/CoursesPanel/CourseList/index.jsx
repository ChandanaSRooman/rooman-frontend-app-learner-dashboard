import React from 'react';
import PropTypes from 'prop-types';

import { useIntl } from '@edx/frontend-platform/i18n';
import {
  ActiveCourseFilters,
} from 'containers/CourseFilterControls';
import CourseCard from 'containers/CourseCard';

import messages from './messages';

// Split the (already filtered + sorted) list into the dashboard groups.
// Each item is a transformed course object carrying its own `cardId`.
const groupCourses = (list) => {
  const inProgress = [];
  const notStarted = [];
  const archived = [];
  list.forEach((course) => {
    const isArchived = course?.courseRun?.isArchived || false;
    const hasStarted = course?.enrollment?.hasStarted || false;
    if (isArchived) {
      archived.push(course);
    } else if (hasStarted) {
      inProgress.push(course);
    } else {
      notStarted.push(course);
    }
  });
  return { inProgress, notStarted, archived };
};

const CourseSection = ({ title, courses }) => {
  if (!courses.length) { return null; }
  return (
    <section className="course-section">
      <div className="course-section-heading">
        <h2 className="course-section-title">{title}</h2>
        <span className="course-section-count">{courses.length}</span>
      </div>
      <div className="course-card-grid">
        {courses.map(({ cardId }) => (
          <CourseCard key={cardId} cardId={cardId} />
        ))}
      </div>
    </section>
  );
};
CourseSection.propTypes = {
  title: PropTypes.node.isRequired,
  courses: PropTypes.arrayOf(PropTypes.shape({ cardId: PropTypes.string })).isRequired,
};

export const CourseList = ({ courseListData }) => {
  const { formatMessage } = useIntl();
  const { fullList, visibleList, showFilters } = courseListData;

  // Group the complete filtered/sorted set (not the paginated page) so the
  // section headings and counts reflect group totals rather than per-page slices.
  const { inProgress, notStarted, archived } = groupCourses(fullList ?? visibleList ?? []);

  return (
    <>
      {showFilters && (
        <div id="course-list-active-filters-container">
          <ActiveCourseFilters />
        </div>
      )}
      <div className="d-flex flex-column flex-grow-1">
        <CourseSection title={formatMessage(messages.inProgressSection)} courses={inProgress} />
        <CourseSection title={formatMessage(messages.notStartedSection)} courses={notStarted} />
        <CourseSection title={formatMessage(messages.archivedSection)} courses={archived} />
      </div>
    </>
  );
};

export const courseListDataShape = PropTypes.shape({
  showFilters: PropTypes.bool.isRequired,
  visibleList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  fullList: PropTypes.arrayOf(PropTypes.shape()),
  numPages: PropTypes.number,
  setPageNumber: PropTypes.func,
});

CourseList.propTypes = {
  courseListData: courseListDataShape,
};

export default CourseList;
