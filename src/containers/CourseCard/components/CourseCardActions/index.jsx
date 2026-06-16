import React from 'react';
import PropTypes from 'prop-types';

import { ActionRow } from '@openedx/paragon';

import { useCourseData, useEntitlementInfo } from 'hooks';

import CourseCardActionSlot from 'plugin-slots/CourseCardActionSlot';
import SelectSessionButton from './SelectSessionButton';
import BeginCourseButton from './BeginCourseButton';
import ResumeButton from './ResumeButton';
import ViewCourseButton from './ViewCourseButton';
import ViewCertificateButton from './ViewCertificateButton';

export const CourseCardActions = ({ cardId }) => {
  const cardData = useCourseData(cardId);
  const hasStarted = cardData.enrollment.hasStarted || false;
  const { isEntitlement, isFulfilled } = useEntitlementInfo(cardData);
  const isArchived = cardData.courseRun.isArchived || false;
  // Once the course is complete and the certificate is ready, the primary
  // action becomes "View certificate" instead of Resume / View Course.
  const certificate = cardData.certificate || {};
  const showCertificate = Boolean(certificate.isDownloadable && certificate.certPreviewUrl);

  return (
    <ActionRow data-test-id="CourseCardActions">
      <CourseCardActionSlot cardId={cardId} />
      {showCertificate ? (
        <ViewCertificateButton cardId={cardId} />
      ) : (
        <>
          {isEntitlement && (isFulfilled
            ? <ViewCourseButton cardId={cardId} />
            : <SelectSessionButton cardId={cardId} />
          )}
          {(isArchived && !isEntitlement) && (
            <ViewCourseButton cardId={cardId} />
          )}
          {!(isArchived || isEntitlement) && (hasStarted
            ? <ResumeButton cardId={cardId} />
            : <BeginCourseButton cardId={cardId} />
          )}
        </>
      )}
    </ActionRow>
  );
};
CourseCardActions.propTypes = {
  cardId: PropTypes.string.isRequired,
};

export default CourseCardActions;
