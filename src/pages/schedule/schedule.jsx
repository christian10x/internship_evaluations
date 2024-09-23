import { useQuery } from "@tanstack/react-query";
import Schedule from "../../components/schedule/schedule";
import { getSchedule } from "../../services/schedule/schedule";

const SchedulePage = () => {

    const {
        isLoading,
        error,
        data: schedule,
      } = useQuery({
        queryKey: ["schedule"],
        queryFn: getSchedule,
      });
    
      if (isLoading) return <p>Cargando horario...</p>;
    
      if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>MI HORARIO</h1>
            <div>
                <Schedule schedule={schedule}></Schedule>
            </div>
        </div>
    )
}

export default SchedulePage;