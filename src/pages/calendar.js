// src/pages/CalendarPage.js
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Función para calcular todos los miércoles desde una fecha inicial
    const generateWednesdayEvents = (startDate, endDate) => {
      let current = new Date(startDate);
      const wednesdays = [];

      // Avanza hasta el primer miércoles
      while (current.getDay() !== 3) {
        current.setDate(current.getDate() + 1);
      }

      // Agrega dos eventos cada miércoles hasta la fecha final
      while (current <= endDate) {
        wednesdays.push({
          title: 'Diseño y Desarrollo de Juegos Interactivos I',
          start: new Date(current.setHours(10, 15)),
          end: new Date(current.setHours(11, 45)),
          allDay: false,
        });

        current.setHours(0, 0, 0, 0);

        wednesdays.push({
          title: 'Teoría de Lenguajes de Programación y Métodos de Traducción II',
          start: new Date(current.setHours(20, 15)),
          end: new Date(current.setHours(22, 30)),
          allDay: false,
        });

        current.setDate(current.getDate() + 7);
      }

      return wednesdays;
    };

    // Función para calcular todos los jueves desde una fecha inicial
    const generateThursdayEvents = (startDate, endDate) => {
      let current = new Date(startDate);
      const thursdays = [];

      // Avanza hasta el primer jueves
      while (current.getDay() !== 4) {
        current.setDate(current.getDate() + 1);
      }

      // Agrega eventos para todos los jueves
      while (current <= endDate) {
        thursdays.push({
          title: 'Diseño y Desarrollo de Juegos Interactivos I',
          start: new Date(current.setHours(10, 15)), 
          end: new Date(current.setHours(11, 45)),
          allDay: false,
        });

        current.setHours(0, 0, 0, 0);

        current.setDate(current.getDate() + 7);
      }

      return thursdays;
    };


    // Función para calcular todos los viernes desde una fecha inicial
    const generateFridayEvents = (startDate, endDate) => {
        let current = new Date(startDate);
        const fridays = [];
  
        // Avanza hasta el primer viernes
        while (current.getDay() !== 5) {
          current.setDate(current.getDate() + 1);
        }
  
        // Agrega eventos para todos los viernes
        while (current <= endDate) {
          fridays.push({
            title: 'Inteligencia de Negocios',
            start: new Date(current.setHours(10, 15)), 
            end: new Date(current.setHours(11, 45)),
            allDay: false,
          });
  
          current.setHours(0, 0, 0, 0);

          fridays.push({
            title: 'Inteligencia de Negocios',
            start: new Date(current.setHours(12, 0)), 
            end: new Date(current.setHours(13, 30)),
            allDay: false,
          });
  
          current.setDate(current.getDate() + 7);
        }
  
        return fridays;
      };

      // Función para calcular todos los sábados desde una fecha inicial
    const generateSaturdayEvents = (startDate, endDate) => {
        let current = new Date(startDate);
        const saturdays = [];
  
        // Avanza hasta el primer sábado
        while (current.getDay() !== 6) {  // El día 6 corresponde al sábado
          current.setDate(current.getDate() + 1);
        }
  
        // Agrega eventos para todos los sábados
        while (current <= endDate) {
            saturdays.push({
            title: 'Programación de Interfaces y Dispositivos Periféricos',
            start: new Date(current.setHours(14, 30)), 
            end: new Date(current.setHours(16, 45)),
            allDay: false,
          });
  
          current.setHours(0, 0, 0, 0);

          saturdays.push({
            title: 'Desarrollo de Software II',
            start: new Date(current.setHours(20, 15)), 
            end: new Date(current.setHours(22, 30)),
            allDay: false,
          });
  
          current.setDate(current.getDate() + 7);
        }
  
        return saturdays;
      };

    // Define el rango de fechas
    const startDate = new Date(2024, 8, 23); // 23 de Septiembre 2024
    const endDate = new Date(2024, 11, 31);  // 31 de Diciembre 2024

    // Generar eventos para todos los miércoles, jueves, viernes y sábados
    const wednesdayEvents = generateWednesdayEvents(startDate, endDate);
    const thursdayEvents = generateThursdayEvents(startDate, endDate);
    const fridayEvents = generateFridayEvents(startDate, endDate);
    const saturdayEvents = generateSaturdayEvents(startDate, endDate);

    // Actualizar el estado con los eventos combinados de los miércoles, jueves, viernes y sábados
    setEvents([...wednesdayEvents, ...thursdayEvents, ...fridayEvents, ...saturdayEvents]);
  }, []);

  return (
    <div style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
      />
    </div>
  );
};

export default CalendarPage;
