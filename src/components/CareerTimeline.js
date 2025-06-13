import React from 'react';
import CareerItem from './CareerItem';
import './CareerTimeline.css';

const CareerTimeline = ({ items }) => {
  // Convert date string to numeric format for easy comparison
  const dateToNumeric = dateStr => {
    const [year, month] = dateStr.split('-').map(num => parseInt(num));
    return year * 100 + month;
  };

  const calculatePositions = () => {
    // Sort items by END date in descending order (most recent first)
    const sortedItems = [...items].sort((a, b) => {
      const endA = dateToNumeric(a.end);
      const endB = dateToNumeric(b.end);
      return endB - endA;
    });

    // Fixed timeline range: July 2015 to July 2025
    const minYear = 2015;
    const minMonth = 7;
    const maxYear = 2025;
    const maxMonth = 7;

    // Calculate total months in timeline
    const totalMonths = (maxYear - minYear) * 12 + (maxMonth - minMonth);

    // Generate 6-month points from July 2015 to July 2025
    const timelinePoints = [];
    let currentYear = minYear;
    let currentMonth = minMonth;

    while (currentYear < maxYear || (currentYear === maxYear && currentMonth <= maxMonth)) {
      const monthsFromStart = (currentYear - minYear) * 12 + (currentMonth - minMonth);
      const position = (monthsFromStart / totalMonths) * 100;

      timelinePoints.push({
        year: currentYear,
        month: currentMonth,
        position,
      });

      currentMonth += 6;
      if (currentMonth > 12) {
        currentYear++;
        currentMonth = currentMonth - 12;
      }
    }

    // Helper function to snap to previous 6-month point (floor)
    const snapToPreviousPoint = (year, month) => {
      let snapMonth, snapYear;

      if (month <= 1) {
        snapMonth = 7;
        snapYear = year - 1;
      } else if (month <= 7) {
        snapMonth = 1;
        snapYear = year;
      } else {
        snapMonth = 7;
        snapYear = year;
      }

      // Calculate position for this snapped point
      const monthsFromStart = (snapYear - minYear) * 12 + (snapMonth - minMonth);
      return (monthsFromStart / totalMonths) * 100;
    };

    // Helper function to snap to next 6-month point (ceil)
    const snapToNextPoint = (year, month) => {
      let snapMonth, snapYear;

      if (month < 1) {
        snapMonth = 1;
        snapYear = year;
      } else if (month < 7) {
        snapMonth = 7;
        snapYear = year;
      } else if (month <= 7) {
        snapMonth = 7;
        snapYear = year;
      } else {
        snapMonth = 1;
        snapYear = year + 1;
      }

      // Calculate position for this snapped point
      const monthsFromStart = (snapYear - minYear) * 12 + (snapMonth - minMonth);
      return (monthsFromStart / totalMonths) * 100;
    };

    // Helper function to calculate exact position for any month
    const calculateExactPosition = (year, month) => {
      const monthsFromStart = (year - minYear) * 12 + (month - minMonth);
      return (monthsFromStart / totalMonths) * 100;
    };

    // Calculate position and height for each item
    const positionedItems = sortedItems.map(item => {
      const startNum = dateToNumeric(item.start);
      const endNum = dateToNumeric(item.end);
      const startYear = Math.floor(startNum / 100);
      const startMonth = startNum % 100;
      const endYear = Math.floor(endNum / 100);
      const endMonth = endNum % 100;

      // Use exact month positions for precise alignment
      const startPosition = calculateExactPosition(startYear, startMonth);
      const endPosition = calculateExactPosition(endYear, endMonth);

      return {
        ...item,
        position: startPosition,
        height: Math.abs(endPosition - startPosition),
      };
    });

    return {
      items: positionedItems,
      points: timelinePoints,
    };
  };

  const { items: positionedItems, points: timelinePoints } = calculatePositions();

  return (
    <div className="career-timeline-container">
      <div className="career-timeline">
        <div className="timeline-line" />
        {/* Render timeline points every 6 months */}
        {timelinePoints.map((point, index) => (
          <div
            key={`point-${index}`}
            className="timeline-point"
            style={{
              top: `${point.position}%`,
              left: '50%',
              transform: 'translateX(-50%)',
              position: 'absolute',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#fff',
              border: '1px solid #0066cc',
              zIndex: 2,
            }}
          />
        ))}

        {/* Render career items */}
        {positionedItems.map((item, index) => <CareerItem key={index} {...item} />)}
      </div>
    </div>
  );
};

export default CareerTimeline;
