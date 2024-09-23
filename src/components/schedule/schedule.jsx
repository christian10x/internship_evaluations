import {
  Agenda,
  Day,
  Inject,
  Month,
  ScheduleComponent,
  Week,
  WorkWeek,
} from "@syncfusion/ej2-react-schedule";

const Schedule = ({ schedule }) => {
  return (
    <ScheduleComponent
      selectedDate={new Date(2024, 8, 23)}
      eventSettings={{
        dataSource: schedule,
      }}
      startHour="07:00"
      endHour="23:00"
    >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
};

export default Schedule;
