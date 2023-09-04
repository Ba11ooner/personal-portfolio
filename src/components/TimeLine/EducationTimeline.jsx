import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import HIT from "./HITwh";

export default function NoOppositeContent() {
    return (
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}
        >
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color={"success"}/>
                    <TimelineConnector />
                </TimelineSeparator>
                <div style={{
    marginLeft: "20px"
}}/>
                <HIT/>
            </TimelineItem>
        </Timeline>
    );
}
