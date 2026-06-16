import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  inProgressSection: {
    id: 'learner-dash.courseList.section.inProgress',
    description: 'Heading for the group of courses the learner has started but not finished',
    defaultMessage: 'In progress',
  },
  notStartedSection: {
    id: 'learner-dash.courseList.section.notStarted',
    description: 'Heading for the group of enrolled courses the learner has not started yet',
    defaultMessage: 'Not started',
  },
  archivedSection: {
    id: 'learner-dash.courseList.section.archived',
    description: 'Heading for the group of courses whose run has ended (archived)',
    defaultMessage: 'Archived',
  },
  scrollLeft: {
    id: 'learner-dash.courseList.scrollLeft',
    description: 'Accessible label for the button that scrolls a course row left',
    defaultMessage: 'Scroll left',
  },
  scrollRight: {
    id: 'learner-dash.courseList.scrollRight',
    description: 'Accessible label for the button that scrolls a course row right',
    defaultMessage: 'Scroll right',
  },
});

export default messages;
