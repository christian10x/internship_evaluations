import { Agenda, Day, Inject, Month, ScheduleComponent, Week, WorkWeek } from "@syncfusion/ej2-react-schedule";

const Schedule = () => {
    const data = [
        {
          Id: 1,
          Subject: 'Meeting',
          StartTime: new Date(2023, 1, 15, 10, 0),
          EndTime: new Date(2023, 1, 15, 12, 30),
        },
      ];
      return (
        <ScheduleComponent
        
          selectedDate={new Date(2023, 1, 15)}
          eventSettings={{
            dataSource: data,
          }}
        >
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      );
}

export default Schedule;