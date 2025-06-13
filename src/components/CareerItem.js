import React from 'react';
import PropTypes from 'prop-types';
import './CareerItem.css';

const CareerItem = ({ start, end, title, subtitle, type, position, height }) => {
  const calculateDurationInMonths = () => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    return (
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth())
    );
  };

  const formatDate = dateStr => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const duration = calculateDurationInMonths();

  return (
    <div
      className={`career-item ${type === 'education' ? 'left' : 'right'}`}
      style={{
        top: `${position}%`,
        height: `${height}%`,
      }}
    >
      <div className="career-content">
        <div className="career-date">
          {formatDate(start)} - {formatDate(end)}
          <div className="career-duration">{duration} months</div>
        </div>
        <h3 className="career-title">{title}</h3>
        <p className="career-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

CareerItem.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['education', 'job']).isRequired,
  position: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default CareerItem;
