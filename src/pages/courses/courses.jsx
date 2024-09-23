import { useQuery } from "@tanstack/react-query";
import styles from "./courses.module.css";
import { getCourses } from "../../services/course/course";
import { Link } from "react-router-dom";
import CircularProgressBar from "../../components/circle-progress-bar/circle-progress-bar";
import { useState } from "react";
import { IconArrowRight } from "@tabler/icons-react";

const Courses = () => {
  const [isHovered, setIsHovered] = useState(null);

  const {
    isLoading,
    error,
    data: courses,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  if (isLoading) return <p>Cargando cursos...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.courses}>
      <div>
        <h1>MIS CURSOS</h1>
      </div>
      <div className={styles.cardsContainer}>
        {courses.map((course) => (
          <div
            className={styles.card}
            key={course.id}
            onMouseEnter={() => setIsHovered(course.id)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div>
              <h3>{course.name}</h3>
              <p>Docente: {course.teacher}</p>
              <p>Sección: {course.section}</p>
            </div>
            <div className={styles.bottom}>
              <Link to={`/cursos/${course.id}`}>
                <div className={styles.seeCourse}>
                  <span>Ver curso</span>
                  <IconArrowRight
                    className={styles.icon}
                    stroke={1.5}
                    size={20}
                  />
                </div>
              </Link>
              <CircularProgressBar
                value={course.grade}
                text={course.grade + "NF"}
                size={50}
                color={
                  isHovered === course.id ? "#FFFF" : "var(--primary-color)"
                }
              />
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default Courses;
