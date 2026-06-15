import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { useIntl } from '@edx/frontend-platform/i18n';
import { IconButton, Icon } from '@openedx/paragon';
import { Bookmark, BookmarkBorder } from '@openedx/paragon/icons';

import messages from '../messages';

const STORAGE_KEY = 'rooman.dashboard.favorites';

const readFavorites = () => {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
};

/**
 * A lightweight favourite/heart toggle shown on the corner of a course card.
 * Persists to localStorage keyed by cardId so the choice survives reloads.
 * (The learner-home API has no favourites field, so this is client-only.)
 */
export const CourseCardFavorite = ({ cardId }) => {
  const { formatMessage } = useIntl();
  const [isFavorite, setIsFavorite] = useState(() => Boolean(readFavorites()[cardId]));

  const toggle = useCallback(() => {
    const favorites = readFavorites();
    if (favorites[cardId]) {
      delete favorites[cardId];
    } else {
      favorites[cardId] = true;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (e) { /* storage unavailable — keep in-memory state only */ }
    setIsFavorite(Boolean(favorites[cardId]));
  }, [cardId]);

  return (
    <IconButton
      src={isFavorite ? Bookmark : BookmarkBorder}
      iconAs={Icon}
      onClick={toggle}
      alt={formatMessage(isFavorite ? messages.unfavoriteAlt : messages.favoriteAlt)}
      className={`course-card-favorite${isFavorite ? ' is-favorite' : ''}`}
      data-testid="CourseCardFavorite"
    />
  );
};

CourseCardFavorite.propTypes = {
  cardId: PropTypes.string.isRequired,
};

export default CourseCardFavorite;
