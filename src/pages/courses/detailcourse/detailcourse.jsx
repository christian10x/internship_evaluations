import { useParams } from "react-router-dom";
import { getCourseDetail } from "../../../services/course/course";
import { useQuery } from "@tanstack/react-query";
import styles from "./detailcourse.module.css";
import Apexchart from "../../../components/apexchart/apexchart";

const Detailcourse = () => {
  const { id } = useParams();

  const {
    isLoading,
    error,
    data: course,
  } = useQuery({
    queryKey: ["course", id],
    queryFn: () => getCourseDetail(id),
  });

  if (isLoading) return <p>Cargando detalles del curso...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.detail}>
      <div className={styles.title}>
        <h1>{course.info.name}</h1>
        <p>En curso</p>
      </div>
      <div className={styles.detailContainers}>
        <div>
          <h3>Información del curso</h3>
          <div className={styles.infoContainer}>
            <div className={styles.info}>
              <p>Docente: {course.info.teacher}</p>
              <p>Aula: {course.info.classroom}</p>
            </div>
            <div className={styles.info}>
              <p>Modalidad: {course.info.modality}</p>
              <p>Creditos: {course.info.credits}</p>
            </div>
            <div className={styles.info}>
              <p>Horario:</p>
              {course.info.schedule.map((schedule, index) => (
                <p key={index}>
                  {schedule.day}: {schedule.time}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.detailContainers}>
        <div className={styles.leftright}>
          <div className={styles.left}>
            <h3>Mis calificaciones</h3>
            <div className="gradesContainer">
            <div className={styles.formula}>
              <p>Formula: {course.grades.formula}</p>
            </div>
            <div className={styles.leftright && styles.gradesContainer}>
              <div className={styles.grades}>
                <div>
                  <p>Practica Calificada 1:</p>
                  <p>Practica Calificada 2:</p>
                  <p>Practica Calificada 3:</p>
                  <p>Examen Final:</p>
                </div>
                <div>
                  <p>{course.grades.pc1}</p>
                  <p>{course.grades.pc2}</p>
                  <p>{course.grades.pc3}</p>
                  <p>{course.grades.ef}</p>
                </div>
              </div>
              <div>
                <div className={styles.finalGrade}>
                  <div>
                    <h2>{course.grades.final_grade}</h2>
                  </div>
                  <div>
                    <p>NOTA FINAL</p>
                    <p>{course.grades.status}</p>
                  </div>
                </div>
              </div>
            </div>

            </div>
          </div>

          <div className={styles.right}>
            <h3>Mi asistencia</h3>
            <div>
              <div>
                <Apexchart attendance={course.attendance}></Apexchart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailcourse;
