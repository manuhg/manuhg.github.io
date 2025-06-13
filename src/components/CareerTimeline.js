import React from 'react';
import PropTypes from 'prop-types';
import CareerItem from './CareerItem';
import './CareerTimeline.css';

const CareerTimeline = ({ items }) => {
  const dateToNumeric = dateStr => {
    const [year, month] = dateStr.split('-').map(num => parseInt(num));
    return year * 100 + month; // Convert YYYY-MM to YYYYMM numeric format
  };

  const calculatePositions = () => {
    // Sort items by END date in descending order (most recent first)
    const sortedItems = [...items].sort((a, b) => {
      const endA = dateToNumeric(a.end);
      const endB = dateToNumeric(b.end);
      return endB - endA; // Descending order (most recent first)
    });

    // Get all dates and find min/max
    const allDates = items.flatMap(item => [dateToNumeric(item.start), dateToNumeric(item.end)]);

    const minDate = Math.min(...allDates);
    const maxDate = Math.max(...allDates);

    const minYear = Math.floor(minDate / 100);
    const minMonth = minDate % 100;
    const maxYear = Math.floor(maxDate / 100);
    const maxMonth = maxDate % 100;

    // Calculate total months between min and max dates
    const totalMonths = (maxYear - minYear) * 12 + (maxMonth - minMonth);

    // Calculate position and height for each item
    return sortedItems.map(item => {
      const start = new Date(item.start);
      const end = new Date(item.end);

      // Parse dates
      const startNum = dateToNumeric(item.start);
      const endNum = dateToNumeric(item.end);
      const startYear = Math.floor(startNum / 100);
      const startMonth = startNum % 100;
      const endYear = Math.floor(endNum / 100);
      const endMonth = endNum % 100;

      // Calculate months from END of timeline (to reverse the display)
      const startMonths = (maxYear - startYear) * 12 + (maxMonth - startMonth);
      const endMonths = (maxYear - endYear) * 12 + (maxMonth - endMonth);

      // Calculate position from top (5% to 95% of container height)
      const position = (startMonths / totalMonths) * 90 + 5;

      // Calculate height based on duration in months
      const durationMonths = startMonths - endMonths; // Reversed because we're counting from top
      const height = (durationMonths / totalMonths) * 90;

      return {
        ...item,
        position,
        height,
      };
    });
  };

  const positionedItems = calculatePositions();

  return (
    <div className="career-timeline-container">
      <div className="career-timeline">
        <div className="timeline-line" />
        {positionedItems.map((item, index) => <CareerItem key={index} {...item} />)}
      </div>
    </div>
  );
};

CareerTimeline.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['education', 'job']).isRequired,
    })
  ).isRequired,
};

export default CareerTimeline;
