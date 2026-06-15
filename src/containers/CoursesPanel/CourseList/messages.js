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
  completedSection: {
    id: 'learner-dash.courseList.section.completed',
    description: 'Heading for the group of courses that are archived/completed',
    defaultMessage: 'Completed',
  },
});

export default messages;
