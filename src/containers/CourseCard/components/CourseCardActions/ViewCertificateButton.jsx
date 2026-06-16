import React from 'react';
import PropTypes from 'prop-types';

import { useIntl } from '@edx/frontend-platform/i18n';

import { baseAppUrl } from 'data/services/lms/urls';
import { useCourseData } from 'hooks';
import ActionButton from './ActionButton';
import messages from './messages';

export const ViewCertificateButton = ({ cardId }) => {
  const { formatMessage } = useIntl();
  const courseData = useCourseData(cardId);
  const certUrl = baseAppUrl(courseData?.certificate?.certPreviewUrl || '');
  return (
    <ActionButton
      as="a"
      href={certUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {formatMessage(messages.viewCertificate)}
    </ActionButton>
  );
};
ViewCertificateButton.propTypes = {
  cardId: PropTypes.string.isRequired,
};
export default ViewCertificateButton;
