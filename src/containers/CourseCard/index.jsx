import React from 'react';
import PropTypes from 'prop-types';

import { useIntl } from '@edx/frontend-platform/i18n';
import { Card } from '@openedx/paragon';

import CourseCardBanners from './components/CourseCardBanners';
import CourseCardImage from './components/CourseCardImage';
import CourseCardMenu from './components/CourseCardMenu';
import CourseCardActions from './components/CourseCardActions';
import CourseCardDetails from './components/CourseCardDetails';
import CourseCardTitle from './components/CourseCardTitle';
import CourseCardFavorite from './components/CourseCardFavorite';

import messages from './messages';
import './CourseCard.scss';

export const CourseCard = ({
  cardId,
}) => {
  const { formatMessage } = useIntl();
  // Always render as a vertical card so cards tile into a responsive grid
  // (DeepLearning.AI-style), regardless of viewport width.
  return (
    <div className="course-card" id={cardId} data-testid="CourseCard">
      <Card orientation="vertical">
        <div className="d-flex flex-column w-100 h-100">
          <div className="course-card-media">
            <CourseCardImage cardId={cardId} orientation="vertical" />
            <span className="course-card-type-badge">{formatMessage(messages.typeBadge)}</span>
            <CourseCardFavorite cardId={cardId} />
          </div>
          <Card.Body>
            <Card.Section className="course-card-provider pb-0">
              <CourseCardDetails cardId={cardId} />
            </Card.Section>
            <Card.Header
              title={<CourseCardTitle cardId={cardId} />}
              actions={<CourseCardMenu cardId={cardId} />}
            />
            <Card.Footer orientation="vertical">
              <CourseCardActions cardId={cardId} />
            </Card.Footer>
          </Card.Body>
          <CourseCardBanners cardId={cardId} />
        </div>
      </Card>
    </div>
  );
};
CourseCard.propTypes = {
  cardId: PropTypes.string.isRequired,
};

export default CourseCard;
