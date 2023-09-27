import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from 'next/image';

export default function TimelineSection() {
  const timelineElements = [
    {
      date: 'November 18, 2023',
      title: 'Hackathon Announcement',
      description: 'The getlinked tech hackathon 1.0 is formally announced to the \
      general public and teams begin to get ready to register',
    },
    {
      date: 'November 18, 2023',
      title: 'Teams Registration begins',
      description: 'Interested teams can now show their interest in the getlinked\
      tech hackathon 1.0 2023 by proceeding to register',
    },
    {
      date: 'November 18, 2023',
      title: 'Teams Registration ends',
      description: 'Interested Particapants are no longer Allowed to register',
    },
    {
      date: 'November 18, 2023',
      title: 'Announcement of the accepted teams and ideas',
      description: 'All teams whom idea has been accepted into getlinked tech hackathon 1.0 \
      2023 are formally announced ',
    },
    {
      date: 'November 2012',
      title: 'Getlinked Hackathon 1.0 Oficially Begins',
      description: 'Accepted teams can now proceed to build their ground breaking skill driven solutions',
    },
    {
      date: 'November 2012',
      title: 'Demo Day',
      description: 'Teams get the opportunity to pitch their projets to judges. The winner of the hackathon\
       will alos be announced on this day',
    },
  
  ];

  return (
    <section id="" className="container intro-section py-20 text-center">
      <div className="intro-text">
        <h3 className="features-heading font-ClashBold text-white font-bold pt-10">Timeline</h3>
        <p>Here is the breakdown of the time we
 anticipate using for the upcoming event.</p>
      </div>
      <VerticalTimeline>
        {timelineElements.map((element, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work custom-timeline-element"
            iconStyle={{ color: '#ffffff;', fontSize: '20px', fontWeight:'bold' }}
            icon={<div className="number-icon">{index + 1}</div>}
          >
            <h3 className="vertical-timeline-element-title cus
            tom-timeline-element-title">{element.title}</h3>
            <p>{element.description}</p>
            <p style={{color: '#d434fe'}}>{element.date}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
