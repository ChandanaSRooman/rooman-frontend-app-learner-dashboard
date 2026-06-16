import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '@openedx/paragon';

import CourseCardImage from './components/CourseCardImage';
import CourseCardMenu from './components/CourseCardMenu';
import CourseCardActions from './components/CourseCardActions';
import CourseCardTitle from './components/CourseCardTitle';
import CourseCardFavorite from './components/CourseCardFavorite';

import './CourseCard.scss';

export const CourseCard = ({
  cardId,
}) => (
  // A clean vertical card: cover thumbnail + favourite, then just the title
  // and the primary action. (Type badge, provider/number meta line, and the
  // status banners are intentionally omitted to keep the dashboard uncluttered.)
  <div className="course-card" id={cardId} data-testid="CourseCard">
    <Card orientation="vertical">
      <div className="d-flex flex-column w-100 h-100">
        <div className="course-card-media">
          <CourseCardImage cardId={cardId} orientation="vertical" />
          <CourseCardFavorite cardId={cardId} />
        </div>
        <Card.Body>
          <Card.Header
            title={<CourseCardTitle cardId={cardId} />}
            actions={<CourseCardMenu cardId={cardId} />}
          />
          <Card.Footer orientation="vertical">
            <CourseCardActions cardId={cardId} />
          </Card.Footer>
        </Card.Body>
      </div>
    </Card>
  </div>
);
CourseCard.propTypes = {
  cardId: PropTypes.string.isRequired,
};

export default CourseCard;
