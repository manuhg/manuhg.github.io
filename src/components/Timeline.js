import React from 'react';
import '../css/Timeline.css';

const Timeline = () => {
  const timelineData = [
    {
      start: '2023-11',
      end: '2025-05',
      title: 'Masters in Computer Science',
      subtitle: 'University of Washington',
      type: 'education',
    },
    {
      start: '2023-10',
      end: '2024-12',
      title: 'Graduate Research Assistant',
      subtitle: 'University of Washington',
      type: 'job',
    },
    {
      start: '2023-01',
      end: '2023-07',
      title: 'Senior Software Engineer',
      subtitle: 'Tekion Corp',
      type: 'job',
    },
    {
      start: '2019-07',
      end: '2022-12',
      title: 'Product Engineer',
      subtitle: 'Udaan (Hiveloop Technology Pvt Ltd)',
      type: 'job',
    },
    {
      start: '2015-08',
      end: '2019-06',
      title: 'Bachelors in Computer Science',
      subtitle: 'Visvesvaraya Technological University',
      type: 'education',
    },
  ];

  const formatDate = dateStr => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  // Sort timeline data chronologically
  timelineData.sort((a, b) => new Date(a.start) - new Date(b.start));

  // Get all unique dates and calculate their positions
  const calculatePositions = () => {
    // Get unique dates
    const dates = timelineData.flatMap(d => [d.start, d.end]);
    const uniqueDates = [...new Set(dates)];
    uniqueDates.sort((a, b) => new Date(a) - new Date(b));

    // Calculate total duration
    const minDate = new Date(uniqueDates[0]);
    const maxDate = new Date(uniqueDates[uniqueDates.length - 1]);
    const totalDuration = maxDate.getTime() - minDate.getTime();

    // Create a map for O(1) lookups
    const positionMap = new Map();

    // Calculate positions with 5% margin at top and bottom
    uniqueDates.forEach(date => {
      const position = ((new Date(date).getTime() - minDate.getTime()) / totalDuration) * 90 + 5;
      positionMap.set(date, position);
    });

    return {
      dates: uniqueDates,
      getPosition: date => positionMap.get(date) || 0,
    };
  };

  const { dates, getPosition } = calculatePositions();

  return (
    <div className="timeline-container">
      <div className="timeline">
        {/* Render points for unique dates */}
        {dates.map((date, index) => (
          <div
            key={`point-${index}`}
            className="timeline-point"
            style={{ top: `${getPosition(date)}%` }}
          />
        ))}
        {/* Render timeline items */}
        {timelineData.map((data, index) => (
          <div
            key={`item-${index}`}
            className={`timeline-item ${data.type === 'job' ? 'right' : ''}`}
            style={{
              top: `${getPosition(data.start)}%`,
              height: `${getPosition(data.end) - getPosition(data.start)}%`,
            }}
          >
            <div className={`timeline-content ${data.type === 'education' ? 'left' : 'right'}`}>
              <div className="timeline-date">
                {formatDate(data.start)} - {formatDate(data.end)}
              </div>
              <h3 className="timeline-title">{data.title}</h3>
              <p className="timeline-subtitle">{data.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
