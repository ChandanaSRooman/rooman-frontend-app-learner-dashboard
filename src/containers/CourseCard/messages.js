import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  bannerAlt: {
    id: 'learner-dash.courseCard.bannerAlt',
    description: 'Course card banner alt-text',
    defaultMessage: 'Course thumbnail',
  },
  verifiedBanner: {
    id: 'learner-dash.courseCard.verifiedBanner',
    description: 'Course card verified banner',
    defaultMessage: 'Verified',
  },
  verifiedHoverDescription: {
    id: 'learner-dash.courseCard.verifiedHoverDescription',
    description: 'Course card verified hover description',
    defaultMessage: 'You\'re enrolled as a verified student',
  },
  verifiedBannerRibbonAlt: {
    id: 'learner-dash.courseCard.verifiedBannerRibbonAlt',
    description: 'Course card verified banner ribbon alt-text',
    defaultMessage: 'ID Verified Ribbon/Badge',
  },
  typeBadge: {
    id: 'learner-dash.courseCard.typeBadge',
    description: 'Small badge shown on the course card thumbnail labelling the item as a course',
    defaultMessage: 'Course',
  },
  favoriteAlt: {
    id: 'learner-dash.courseCard.favoriteAlt',
    description: 'Accessible label for the button that marks a course as a favourite',
    defaultMessage: 'Add to favourites',
  },
  unfavoriteAlt: {
    id: 'learner-dash.courseCard.unfavoriteAlt',
    description: 'Accessible label for the button that removes a course from favourites',
    defaultMessage: 'Remove from favourites',
  },
});

export default messages;
