import { useQuery } from "@tanstack/react-query";
import styles from "./home.module.css";
import { getUser } from "../../services/user/user";
import { IconMapPin } from "@tabler/icons-react";
import photo from "../../assets/photo.jpg";
import { getLastGrades } from "../../services/grades/grade";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    isLoading,
    error,
    data: user,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  const {
    isLoading2,
    error2,
    data: grades,
  } = useQuery({
    queryKey: ["grades"],
    queryFn: getLastGrades,
  });

  if (isLoading || isLoading2) return <p>Cargando home...</p>;

  if (error || error2) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div>
        <h1>MI INFORMACION</h1>
        <div id={styles.up} className={styles.leftright}>
          <div className={styles.left}>
            <div className={styles.infoCard}>
              <div>
                <img alt="photo" src={photo} />
              </div>
              <div className={styles.info}>
                <h4>{user.name + " " + user.lastname}</h4>
                <p>{user.career}</p>
                <p>{user.sede}</p>
                <p>{user.code}</p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.subtitle}>
                <h3>Hoy, 25/10/2025</h3>
              </div>
              <div className={styles.dataSchedule}>
                <div className={styles.leftright}>
                  <div>
                    <h4>Programación orientada a objetos</h4>
                    <p>18:30 - 20:00</p>
                    <div className={styles.iconContainer}>
                      <IconMapPin
                        stroke={1.5}
                        size={15}
                        color="var(--primary-color)"
                      />
                      <span>A0206</span>
                    </div>
                  </div>
                  <div>
                  <Link to={`/horario`}>
                  
                    <button className="button-primary">Ver horario</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.subtitle}>
                <h3>Mi estado de cuenta</h3>
              </div>
              <div className={styles.dataAccount}>
                <div>
                  <h3>S/{user.account.total}</h3>
                  <p>Deuda total</p>
                </div>
                <div>
                  <p id="green">Cuotas pagadas: {user.account.paid}</p>
                  <p id="red">Cuotas vencidas: {user.account.expire}</p>
                </div>
                <div>
                <Link to={`/pagos`}>
                  <button className="button-primary">Ver estado</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
          <div >
              <div className={styles.subtitle}>
                <h3>Historial de calificaciones</h3>
              </div>
              {grades.map((grade) => (
              <div className={styles.dataSchedule} key={grade.id}>
                <div className={styles.leftright}>
                <div>
                  <h4>{grade.name}</h4>
                  <p id="primary-color">{grade.course.name}</p>
                  <p>Nota: {grade.grade}</p>
                </div>
                <div>
                  {grade.status.id === '1' && <div id="green-container"><p>{grade.status.name}</p></div>}
                  {grade.status.id === '2' && <div id="orange-container"><p>{grade.status.name}</p></div>}
                  {grade.status.id === '3' && <div id="red-container"><p>{grade.status.name}</p></div>}
                </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
