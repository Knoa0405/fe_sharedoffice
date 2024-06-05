'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Calendar from '@/components/calendar';
import Timeline from './_components/timeline';
import ScheduleAddIcon from '@/assets/icons/schedule-add-icon';

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const data = [
    {
      eventId: 1,
      memberId: 1,
      resId: 0,
      eventColor: '#FFD2D5',
      eventTitle: '제목',
      eventStartDate: '2024-05-30T10:00:00',
      eventEndDate: '2024-05-30T11:00:00',
      eventLocation: '장소',
      attendees: [
        {
          attendeesId: 2,
          attendeesCode: 1,
          memberId: 2,
          attendeesCategory: 0,
        },
        {
          attendeesId: 1,
          attendeesCode: 1,
          memberId: 1,
          attendeesCategory: 0,
        },
      ],
      createdAt: '2024-05-31T02:16:34.360712',
      updatedAt: '2024-05-31T02:16:34.360712',
    },
  ];

  return (
    <main className="flex h-full flex-col">
      <Header title="일정" />
      <section className="flex-1">
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
        />
        <Timeline data={data} />
      </section>
      <section className="sticky bottom-0">
        <div className="absolute -top-[135px] right-0 flex cursor-pointer">
          <ScheduleAddIcon />
        </div>
      </section>
    </main>
  );
}
