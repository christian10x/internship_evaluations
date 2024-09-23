--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4
-- Dumped by pg_dump version 12.4

-- Started on 2024-09-23 11:24:53

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: openpg
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO openpg;

--
-- TOC entry 2964 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: openpg
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 32329)
-- Name: Cursos; Type: TABLE; Schema: public; Owner: openpg
--

CREATE TABLE public."Cursos" (
    "CURSO_ID" integer NOT NULL,
    "CURSO_NOMBRE" character varying(250),
    "CURSO_DESC" character varying(500),
    "TIPO_CURSO_ID" integer,
    "CAPACIDAD_ALUMNOS" integer,
    "CREDITOS" integer,
    "LOG_FECHA_CREACION" timestamp with time zone,
    "LOG_USUARIO_CREACION" character varying(50),
    "LOG_FECHA_ACTUALIZACION" timestamp with time zone,
    "LOG_USUARIO_ACTUALIZACION" character varying(50),
    "LOG_FECHA_INACTIVACION" timestamp with time zone
);


ALTER TABLE public."Cursos" OWNER TO openpg;

--
-- TOC entry 223 (class 1259 OID 32389)
-- Name: CursosXDocenteXHorarios; Type: TABLE; Schema: public; Owner: openpg
--

CREATE TABLE public."CursosXDocenteXHorarios" (
    "CURSO_X_DOCENTE_X_HORARIO_ID" integer NOT NULL,
    "CURSO_X_DOCENTE_ID" integer,
    "HORARIO_ID" integer,
    "LOG_FECHA_CREACION" timestamp with time zone,
    "LOG_USUARIO_CREACION" character varying(50),
    "LOG_FECHA_ACTUALIZACION" timestamp with time zone,
    "LOG_USUARIO_ACTUALIZACION" character varying(50),
    "LOG_FECHA_INACTIVACION" timestamp with time zone
);


ALTER TABLE public."CursosXDocenteXHorarios" OWNER TO openpg;

--
-- TOC entry 222 (class 1259 OID 32387)
-- Name: CursosXDocenteXHorarios_CURSO_X_DOCENTE_X_HORARIO_ID_seq; Type: SEQUENCE; Schema: public; Owner: openpg
--

CREATE SEQUENCE public."CursosXDocenteXHorarios_CURSO_X_DOCENTE_X_HORARIO_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."CursosXDocenteXHorarios_CURSO_X_DOCENTE_X_HORARIO_ID_seq" OWNER TO openpg;

--
-- TOC entry 2965 (class 0 OID 0)
-- Dependencies: 222
-- Name: CursosXDocenteXHorarios_CURSO_X_DOCENTE_X_HORARIO_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: openpg
--

ALTER SEQUENCE public."CursosXDocenteXHorarios_CURSO_X_DOCENTE_X_HORARIO_ID_seq" OWNED BY public."CursosXDocenteXHorarios"."CURSO_X_DOCENTE_X_HORARIO_ID";


--
-- TOC entry 219 (class 1259 OID 32363)
-- Name: CursosXDocentes; Type: TABLE; Schema: public; Owner: openpg
--

CREATE TABLE public."CursosXDocentes" (
    "CURSO_X_DOCENTE_ID" integer NOT NULL,
    "SOCIO_DOCENTE_ID" integer,
    "CURSO_ID" integer,
    "LOG_FECHA_CREACION" timestamp with time zone,
    "LOG_USUARIO_CREACION" character varying(50),
    "LOG_FECHA_ACTUALIZACION" timestamp with time zone,
    "LOG_USUARIO_ACTUALIZACION" character varying(50),
    "LOG_FECHA_INACTIVACION" timestamp with time zone
);


ALTER TABLE public."CursosXDocentes" OWNER TO openpg;

--
-- TOC entry 218 (class 1259 OID 32361)
-- Name: CursosXDocentes_CURSO_X_DOCENTE_ID_seq; Type: SEQUENCE; Schema: public; Owner: openpg
--

CREATE SEQUENCE public."CursosXDocentes_CURSO_X_DOCENTE_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."CursosXDocentes_CURSO_X_DOCENTE_ID_seq" OWNER TO openpg;

--
-- TOC entry 2966 (class 0 OID 0)
-- Dependencies: 218
-- Name: CursosXDocentes_CURSO_X_DOCENTE_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: openpg
--

ALTER SEQUENCE public."CursosXDocentes_CURSO_X_DOCENTE_ID_seq" OWNED BY public."CursosXDocentes"."CURSO_X_DOCENTE_ID";


--
-- TOC entry 214 (class 1259 OID 32327)
-- Name: Cursos_CURSO_ID_seq; Type: SEQUENCE; Schema: public; Owner: openpg
--

CREATE SEQUENCE public."Cursos_CURSO_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Cursos_CURSO_ID_seq" OWNER TO openpg;

--
-- TOC entry 2967 (class 0 OID 0)
-- Dependencies: 214
-- Name: Cursos_CURSO_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: openpg
--

ALTER SEQUENCE public."Cursos_CURSO_ID_seq" OWNED BY public."Cursos"."CURSO_ID";


--
-- TOC entry 221 (class 1259 OID 32381)
-- Name: Horarios; Type: TABLE; Schema: public; Owner: openpg
--

CREATE TABLE public."Horarios" (
    "HORARIO_ID" integer NOT NULL,
    "DIA" character varying(18),
    "HORA_INICIO" character varying(18),
    "HORA_FIN" character varying(18),
    "LOG_FECHA_CREACION" timestamp with time zone,
    "LOG_USUARIO_CREACION" character varying(50),
    "LOG_FECHA_ACTUALIZACION" timestamp with time zone,
    "LOG_USUARIO_ACTUALIZACION" character varying(50),
    "LOG_FECHA_INACTIVACION" timestamp with time zone
);


ALTER TABLE public."Horarios" OWNER TO openpg;

--
-- TOC entry 220 (class 1259 OID 32379)
-- Name: Horarios_HORARIO_ID_seq; Type: SEQUENCE; Schema: public; Owner: openpg
--

CREATE SEQUENCE public."Horarios_HORARIO_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Horarios_HORARIO_ID_seq" OWNER TO openpg;

--
-- TOC entry 2968 (class 0 OID 0)
-- Dependencies: 220
-- Name: Horarios_HORARIO_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: openpg
--

ALTER SEQUENCE public."Horarios_HORARIO_ID_seq" OWNED BY public."Horarios"."HORARIO_ID";


--
-- TOC entry 225 (class 1259 OID 32407)
-- Name: MatriculaDetalles; Type: TABLE; Schema: public; Owner: openpg
--

CREATE TABLE public."MatriculaDetalles" (
    "MATRICULA_DETALLE_ID" integer NOT NULL,
    "MATRICULA_ID" integer,
    "CURSO_X_DOCENTE_X_HORARIO_ID" integer,
    "MONTO_BRUTO_DETALLE" numeric(18,6),
    "MONTO_DSCTO_DETALLE" numeric(18,6),
    "MONTO_NETO_DETALLE" numeric(18,6),
    "LOG_FECHA_CREACION" timestamp with time zone,
    "LOG_USUARIO_CREACION" character varying(50),
    "LOG_FECHA_ACTUALIZACION" timestamp with time zone,
    "LOG_USUARIO_ACTUALIZACION" character varying(50),
    "LOG_FECHA_INACTIVACION" timestamp with time zone
);


ALTER TABLE public."MatriculaDetalles" OWNER TO openpg;

--
-- TOC entry 224 (class 1259 OID 32405)
-- Name: MatriculaDetalles_MATRICULA_DETALLE_ID_seq; Type: SEQUENCE; Schema: public; Owner: openpg
--

CREATE SEQUENCE public."MatriculaDetalles_MATRICULA_DETALLE_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."MatriculaDetalles_MATRICULA_DETALLE_ID_seq" OWNER TO openpg;

--
-- TOC entry 2969 (class 0 OID 0)
-- Dependencies: 224
-- Name: MatriculaDetalles_MATRICULA_DETALLE_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: openpg
--

ALTER SEQUENCE public."MatriculaDetalles_MATRICULA_DETALLE_ID_seq" OWNED BY public."MatriculaDetalles"."MATRICULA_DETALLE_ID";


--
-- TOC entry 211 (class 1259 OID 32297)
-- Name: MatriculaGrals; Type: TABLE; Schema: public; Owner: openpg
--

CREATE TABLE public."MatriculaGrals" (
    "MATRICULA_ID" integer NOT NULL,
    "MATRICULA_NOMBRE" character varying(250),
    "MATRICULA_DESC" character varying(500),
    "SOCIO_ALUMNO_ID" integer,
    "PERIODO_ID" integer,
    "MONTO_BRUTO" numeric(18,6),
    "MONTO_DSCTO" numeric(18,6),
    "MONTO_NETO" numeric(18,6),
    "LOG_FECHA_CREACION" timestamp with time zone,
    "LOG_USUARIO_CREACION" character varying(50),
    "LOG_FECHA_ACTUALIZACION" timestamp with time zone,
    "LOG_USUARIO_ACTUALIZACION" character varying(50),
    "LOG_FECHA_INACTIVACION" timestamp with time zone
);


ALTER TABLE public."MatriculaGrals" OWNER TO openpg;

--
-- TOC entry 210 (class 1259 OID 32295)
-- Name: MatriculaGrals_MATRICULA_ID_seq; Type: SEQUENCE; Schema: public; Owner: openpg
--

CREATE SEQUENCE public."MatriculaGrals_MATRICULA_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."MatriculaGrals_MATRICULA_ID_seq" OWNER TO openpg;

--
-- TOC entry 2970 (class 0 OID 0)
-- Dependencies: 210
-- Name: MatriculaGrals_MATRICULA_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: openpg
--

ALTER SEQUENCE public."MatriculaGrals_MATRICULA_ID_seq" OWNED BY public."MatriculaGrals"."MATRICULA_ID";


--
-- TOC entry 209 (class 1259 OID 32286)
-- Name: Periodos; Type: TABLE; Schema: public; Owner: openpg
--

CREATE TABLE public."Periodos" (
    "PERIODO_ID" integer NOT NULL,
    "PERIODO_NOMBRE" character varying(250),
    "PERIODO_DESC" character varying(250),
    "LOG_FECHA_CREACION" timestamp with time zone,
    "LOG_USUARIO_CREACION" character varying(50),
    "LOG_FECHA_ACTUALIZACION" timestamp with time zone,
    "LOG_USUARIO_ACTUALIZACION" character varying(50),
    "LOG_FECHA_INACTIVACION" timestamp with time zone
);


ALTER TABLE public."Periodos" OWNER TO openpg;

--
-- TOC entry 208 (class 1259 OID 32284)
-- Name: Periodos_PERIODO_ID_seq; Type: SEQUENCE; Schema: public; Owner: openpg
--

CREATE SEQUENCE public."Periodos_PERIODO_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Periodos_PERIODO_ID_seq" OWNER TO openpg;

--
-- TOC entry 2971 (class 0 OID 0)
-- Dependencies: 208
-- Name: Periodos_PERIODO_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: openpg
--

ALTER SEQUENCE public."Periodos_PERIODO_ID_seq" OWNED BY public."Periodos"."PERIODO_ID";


--
-- TOC entry 205 (class 1259 OID 32254)
-- Name: Sedes; Type: TABLE; Schema: public; Owner: openpg
--

CREATE TABLE public."Sedes" (
    "SEDE_ID" integer NOT NULL,
    "SEDE_NOMBRE" character varying(250),
    "DIRECCION" character varying(250),
    "LATITUD" character varying(250),
    "LONGITUD" character varying(250),
    "LOG_FECHA_CREACION" timestamp with time zone,
    "LOG_USUARIO_CREACION" character varying(50),
    "LOG_FECHA_ACTUALIZACION" timestamp with time zone,
    "LOG_USUARIO_ACTUALIZACION" character varying(50),
    "LOG_FECHA_INACTIVACION" timestamp with time zone
);


ALTER TABLE public."Sedes" OWNER TO openpg;

--
-- TOC entry 204 (class 1259 OID 32252)
-- Name: Sedes_SEDE_ID_seq; Type: SEQUENCE; Schema: public; Owner: openpg
--

CREATE SEQUENCE public."Sedes_SEDE_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Sedes_SEDE_ID_seq" OWNER TO openpg;

--
-- TOC entry 2972 (class 0 OID 0)
-- Dependencies: 204
-- Name: Sedes_SEDE_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: openpg
--

ALTER SEQUENCE public."Sedes_SEDE_ID_seq" OWNED BY public."Sedes"."SEDE_ID";


--
-- TOC entry 207 (class 1259 OID 32265)
-- Name: SocioAlumnos; Type: TABLE; Schema: public; Owner: openpg
--

CREATE TABLE public."SocioAlumnos" (
    "SOCIO_ALUMNO_ID" integer NOT NULL,
    "SOCIO_ID" integer,
    "SEDE_ID" integer,
    "TIPO_ADMISION" character varying(250),
    "CLASIFICACION_SISFOH" character varying(250),
    "FECHA_INGRESO" timestamp with time zone,
    "FECHA_EGRESO" timestamp with time zone,
    "LOG_FECHA_CREACION" timestamp with time zone,
    "LOG_USUARIO_CREACION" character varying(50),
    "LOG_FECHA_ACTUALIZACION" timestamp with time zone,
    "LOG_USUARIO_ACTUALIZACION" character varying(50),
    "LOG_FECHA_INACTIVACION" timestamp with time zone
);


ALTER TABLE public."SocioAlumnos" OWNER TO openpg;

--
-- TOC entry 206 (class 1259 OID 32263)
-- Name: SocioAlumnos_SOCIO_ALUMNO_ID_seq; Type: SEQUENCE; Schema: public; Owner: openpg
--

CREATE SEQUENCE public."SocioAlumnos_SOCIO_ALUMNO_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."SocioAlumnos_SOCIO_ALUMNO_ID_seq" OWNER TO openpg;

--
-- TOC entry 2973 (class 0 OID 0)
-- Dependencies: 206
-- Name: SocioAlumnos_SOCIO_ALUMNO_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: openpg
--

ALTER SEQUENCE public."SocioAlumnos_SOCIO_ALUMNO_ID_seq" OWNED BY public."SocioAlumnos"."SOCIO_ALUMNO_ID";


--
-- TOC entry 203 (class 1259 OID 32243)
-- Name: SocioComercialGrals; Type: TABLE; Schema: public; Owner: openpg
--

CREATE TABLE public."SocioComercialGrals" (
    "SOCIO_ID" integer NOT NULL,
    "SOCIO_NOMBRES" character varying(250),
    "SOCIO_APELLIDO_PATERNO" character varying(250),
    "SOCIO_APELLIDO_MATERNO" character varying(250),
    "NUMERO_DOCUMENTO" character varying(50),
    "SOCIO_ALUMNO" character(1),
    "SOCIO_DOCENTE" character(1),
    "NUMERO_TELEFONO" character varying(50),
    "EMAIL" character varying(100),
    "CONTRASEÑA" character varying(100),
    "LOG_FECHA_CREACION" timestamp with time zone,
    "LOG_USUARIO_CREACION" character varying(50),
    "LOG_FECHA_ACTUALIZACION" timestamp with time zone,
    "LOG_USUARIO_ACTUALIZACION" character varying(50),
    "LOG_FECHA_INACTIVACION" timestamp with time zone
);


ALTER TABLE public."SocioComercialGrals" OWNER TO openpg;

--
-- TOC entry 202 (class 1259 OID 32241)
-- Name: SocioComercialGrals_SOCIO_ID_seq; Type: SEQUENCE; Schema: public; Owner: openpg
--

CREATE SEQUENCE public."SocioComercialGrals_SOCIO_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."SocioComercialGrals_SOCIO_ID_seq" OWNER TO openpg;

--
-- TOC entry 2974 (class 0 OID 0)
-- Dependencies: 202
-- Name: SocioComercialGrals_SOCIO_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: openpg
--

ALTER SEQUENCE public."SocioComercialGrals_SOCIO_ID_seq" OWNED BY public."SocioComercialGrals"."SOCIO_ID";


--
-- TOC entry 217 (class 1259 OID 32345)
-- Name: SocioDocentes; Type: TABLE; Schema: public; Owner: openpg
--

CREATE TABLE public."SocioDocentes" (
    "SOCIO_DOCENTE_ID" integer NOT NULL,
    "SOCIO_ID" integer,
    "SEDE_ID" integer,
    "NOMBRE_PROFESION" character varying(250),
    "SUELDO" numeric(18,6),
    "FECHA_INGRESO" timestamp with time zone,
    "FECHA_EGRESO" timestamp with time zone,
    "LOG_FECHA_CREACION" timestamp with time zone,
    "LOG_USUARIO_CREACION" character varying(50),
    "LOG_FECHA_ACTUALIZACION" timestamp with time zone,
    "LOG_USUARIO_ACTUALIZACION" character varying(50),
    "LOG_FECHA_INACTIVACION" timestamp with time zone
);


ALTER TABLE public."SocioDocentes" OWNER TO openpg;

--
-- TOC entry 216 (class 1259 OID 32343)
-- Name: SocioDocentes_SOCIO_DOCENTE_ID_seq; Type: SEQUENCE; Schema: public; Owner: openpg
--

CREATE SEQUENCE public."SocioDocentes_SOCIO_DOCENTE_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."SocioDocentes_SOCIO_DOCENTE_ID_seq" OWNER TO openpg;

--
-- TOC entry 2975 (class 0 OID 0)
-- Dependencies: 216
-- Name: SocioDocentes_SOCIO_DOCENTE_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: openpg
--

ALTER SEQUENCE public."SocioDocentes_SOCIO_DOCENTE_ID_seq" OWNED BY public."SocioDocentes"."SOCIO_DOCENTE_ID";


--
-- TOC entry 213 (class 1259 OID 32318)
-- Name: TiposCursos; Type: TABLE; Schema: public; Owner: openpg
--

CREATE TABLE public."TiposCursos" (
    "TIPO_CURSO_ID" integer NOT NULL,
    "TIPO_CURSO_NOMBRE" character varying(250),
    "TIPO_CURSO_DESC" character varying(250),
    "LOG_FECHA_CREACION" timestamp with time zone,
    "LOG_USUARIO_CREACION" character varying(50),
    "LOG_FECHA_ACTUALIZACION" timestamp with time zone,
    "LOG_USUARIO_ACTUALIZACION" character varying(50),
    "LOG_FECHA_INACTIVACION" timestamp with time zone
);


ALTER TABLE public."TiposCursos" OWNER TO openpg;

--
-- TOC entry 212 (class 1259 OID 32316)
-- Name: TiposCursos_TIPO_CURSO_ID_seq; Type: SEQUENCE; Schema: public; Owner: openpg
--

CREATE SEQUENCE public."TiposCursos_TIPO_CURSO_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."TiposCursos_TIPO_CURSO_ID_seq" OWNER TO openpg;

--
-- TOC entry 2976 (class 0 OID 0)
-- Dependencies: 212
-- Name: TiposCursos_TIPO_CURSO_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: openpg
--

ALTER SEQUENCE public."TiposCursos_TIPO_CURSO_ID_seq" OWNED BY public."TiposCursos"."TIPO_CURSO_ID";


--
-- TOC entry 2766 (class 2604 OID 32332)
-- Name: Cursos CURSO_ID; Type: DEFAULT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."Cursos" ALTER COLUMN "CURSO_ID" SET DEFAULT nextval('public."Cursos_CURSO_ID_seq"'::regclass);


--
-- TOC entry 2770 (class 2604 OID 32392)
-- Name: CursosXDocenteXHorarios CURSO_X_DOCENTE_X_HORARIO_ID; Type: DEFAULT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."CursosXDocenteXHorarios" ALTER COLUMN "CURSO_X_DOCENTE_X_HORARIO_ID" SET DEFAULT nextval('public."CursosXDocenteXHorarios_CURSO_X_DOCENTE_X_HORARIO_ID_seq"'::regclass);


--
-- TOC entry 2768 (class 2604 OID 32366)
-- Name: CursosXDocentes CURSO_X_DOCENTE_ID; Type: DEFAULT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."CursosXDocentes" ALTER COLUMN "CURSO_X_DOCENTE_ID" SET DEFAULT nextval('public."CursosXDocentes_CURSO_X_DOCENTE_ID_seq"'::regclass);


--
-- TOC entry 2769 (class 2604 OID 32384)
-- Name: Horarios HORARIO_ID; Type: DEFAULT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."Horarios" ALTER COLUMN "HORARIO_ID" SET DEFAULT nextval('public."Horarios_HORARIO_ID_seq"'::regclass);


--
-- TOC entry 2771 (class 2604 OID 32410)
-- Name: MatriculaDetalles MATRICULA_DETALLE_ID; Type: DEFAULT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."MatriculaDetalles" ALTER COLUMN "MATRICULA_DETALLE_ID" SET DEFAULT nextval('public."MatriculaDetalles_MATRICULA_DETALLE_ID_seq"'::regclass);


--
-- TOC entry 2764 (class 2604 OID 32300)
-- Name: MatriculaGrals MATRICULA_ID; Type: DEFAULT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."MatriculaGrals" ALTER COLUMN "MATRICULA_ID" SET DEFAULT nextval('public."MatriculaGrals_MATRICULA_ID_seq"'::regclass);


--
-- TOC entry 2763 (class 2604 OID 32289)
-- Name: Periodos PERIODO_ID; Type: DEFAULT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."Periodos" ALTER COLUMN "PERIODO_ID" SET DEFAULT nextval('public."Periodos_PERIODO_ID_seq"'::regclass);


--
-- TOC entry 2761 (class 2604 OID 32257)
-- Name: Sedes SEDE_ID; Type: DEFAULT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."Sedes" ALTER COLUMN "SEDE_ID" SET DEFAULT nextval('public."Sedes_SEDE_ID_seq"'::regclass);


--
-- TOC entry 2762 (class 2604 OID 32268)
-- Name: SocioAlumnos SOCIO_ALUMNO_ID; Type: DEFAULT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."SocioAlumnos" ALTER COLUMN "SOCIO_ALUMNO_ID" SET DEFAULT nextval('public."SocioAlumnos_SOCIO_ALUMNO_ID_seq"'::regclass);


--
-- TOC entry 2760 (class 2604 OID 32246)
-- Name: SocioComercialGrals SOCIO_ID; Type: DEFAULT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."SocioComercialGrals" ALTER COLUMN "SOCIO_ID" SET DEFAULT nextval('public."SocioComercialGrals_SOCIO_ID_seq"'::regclass);


--
-- TOC entry 2767 (class 2604 OID 32348)
-- Name: SocioDocentes SOCIO_DOCENTE_ID; Type: DEFAULT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."SocioDocentes" ALTER COLUMN "SOCIO_DOCENTE_ID" SET DEFAULT nextval('public."SocioDocentes_SOCIO_DOCENTE_ID_seq"'::regclass);


--
-- TOC entry 2765 (class 2604 OID 32321)
-- Name: TiposCursos TIPO_CURSO_ID; Type: DEFAULT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."TiposCursos" ALTER COLUMN "TIPO_CURSO_ID" SET DEFAULT nextval('public."TiposCursos_TIPO_CURSO_ID_seq"'::regclass);


--
-- TOC entry 2948 (class 0 OID 32329)
-- Dependencies: 215
-- Data for Name: Cursos; Type: TABLE DATA; Schema: public; Owner: openpg
--

INSERT INTO public."Cursos" VALUES (1, 'mate_01', 'matematica para ingenieros 1', 1, 30, NULL, '2024-07-20 19:00:00-05', 'ADMIN', NULL, NULL, NULL);


--
-- TOC entry 2956 (class 0 OID 32389)
-- Dependencies: 223
-- Data for Name: CursosXDocenteXHorarios; Type: TABLE DATA; Schema: public; Owner: openpg
--

INSERT INTO public."CursosXDocenteXHorarios" VALUES (1, 1, 1, '2024-07-20 19:00:00-05', 'ADMIN', NULL, NULL, NULL);
INSERT INTO public."CursosXDocenteXHorarios" VALUES (2, 1, 2, '2024-07-20 19:00:00-05', 'ADMIN', NULL, NULL, NULL);


--
-- TOC entry 2952 (class 0 OID 32363)
-- Dependencies: 219
-- Data for Name: CursosXDocentes; Type: TABLE DATA; Schema: public; Owner: openpg
--

INSERT INTO public."CursosXDocentes" VALUES (1, 1, 1, '2024-07-20 19:00:00-05', 'ADMIN', NULL, NULL, NULL);


--
-- TOC entry 2954 (class 0 OID 32381)
-- Dependencies: 221
-- Data for Name: Horarios; Type: TABLE DATA; Schema: public; Owner: openpg
--

INSERT INTO public."Horarios" VALUES (1, 'Lunes', '08:00', '12:00', '2024-07-20 19:00:00-05', 'ADMIN', NULL, NULL, NULL);
INSERT INTO public."Horarios" VALUES (2, 'Miercoles', '10:00', '14:00', '2024-07-20 19:00:00-05', 'ADMIN', NULL, NULL, NULL);


--
-- TOC entry 2958 (class 0 OID 32407)
-- Dependencies: 225
-- Data for Name: MatriculaDetalles; Type: TABLE DATA; Schema: public; Owner: openpg
--

INSERT INTO public."MatriculaDetalles" VALUES (1, 11, NULL, NULL, NULL, NULL, '2024-09-23 01:00:25.925-05', 'sistema', NULL, NULL, NULL);
INSERT INTO public."MatriculaDetalles" VALUES (2, 12, NULL, NULL, NULL, NULL, '2024-09-23 01:02:18.098-05', 'sistema', NULL, NULL, NULL);
INSERT INTO public."MatriculaDetalles" VALUES (3, 13, 1, NULL, NULL, NULL, '2024-09-23 01:05:18.506-05', 'sistema', NULL, NULL, NULL);
INSERT INTO public."MatriculaDetalles" VALUES (4, 14, 1, NULL, NULL, NULL, '2024-09-23 10:48:47.134-05', 'sistema', NULL, NULL, NULL);


--
-- TOC entry 2944 (class 0 OID 32297)
-- Dependencies: 211
-- Data for Name: MatriculaGrals; Type: TABLE DATA; Schema: public; Owner: openpg
--

INSERT INTO public."MatriculaGrals" VALUES (13, NULL, NULL, 101020, NULL, NULL, NULL, NULL, '2024-09-23 01:05:18.478-05', 'sistema', NULL, NULL, NULL);
INSERT INTO public."MatriculaGrals" VALUES (4, NULL, NULL, 101020, NULL, NULL, NULL, NULL, '2024-09-23 00:37:20.675-05', 'sistema', NULL, NULL, '2024-09-23 00:37:20.675-05');
INSERT INTO public."MatriculaGrals" VALUES (5, NULL, NULL, 101020, NULL, NULL, NULL, NULL, '2024-09-23 00:45:56.024-05', 'sistema', NULL, NULL, '2024-09-23 00:37:20.675-05');
INSERT INTO public."MatriculaGrals" VALUES (6, NULL, NULL, 101020, NULL, NULL, NULL, NULL, '2024-09-23 00:46:18.087-05', 'sistema', NULL, NULL, '2024-09-23 00:37:20.675-05');
INSERT INTO public."MatriculaGrals" VALUES (7, NULL, NULL, 101020, NULL, NULL, NULL, NULL, '2024-09-23 00:49:12.015-05', 'sistema', NULL, NULL, '2024-09-23 00:37:20.675-05');
INSERT INTO public."MatriculaGrals" VALUES (8, NULL, NULL, 101020, NULL, NULL, NULL, NULL, '2024-09-23 00:50:48.704-05', 'sistema', NULL, NULL, '2024-09-23 00:37:20.675-05');
INSERT INTO public."MatriculaGrals" VALUES (9, NULL, NULL, 101020, NULL, NULL, NULL, NULL, '2024-09-23 00:53:15.063-05', 'sistema', NULL, NULL, '2024-09-23 00:37:20.675-05');
INSERT INTO public."MatriculaGrals" VALUES (10, NULL, NULL, 101020, NULL, NULL, NULL, NULL, '2024-09-23 00:53:44.501-05', 'sistema', NULL, NULL, '2024-09-23 00:37:20.675-05');
INSERT INTO public."MatriculaGrals" VALUES (11, NULL, NULL, 101020, NULL, NULL, NULL, NULL, '2024-09-23 01:00:25.899-05', 'sistema', NULL, NULL, '2024-09-23 00:37:20.675-05');
INSERT INTO public."MatriculaGrals" VALUES (12, NULL, NULL, 101020, NULL, NULL, NULL, NULL, '2024-09-23 01:02:18.006-05', 'sistema', NULL, NULL, '2024-09-23 00:37:20.675-05');
INSERT INTO public."MatriculaGrals" VALUES (14, NULL, NULL, 101020, NULL, NULL, NULL, NULL, '2024-09-23 10:48:47.051-05', 'sistema', NULL, NULL, NULL);


--
-- TOC entry 2942 (class 0 OID 32286)
-- Dependencies: 209
-- Data for Name: Periodos; Type: TABLE DATA; Schema: public; Owner: openpg
--

INSERT INTO public."Periodos" VALUES (20200033, '2024-2', NULL, '2024-07-20 19:00:00-05', 'ADMIN', NULL, NULL, NULL);


--
-- TOC entry 2938 (class 0 OID 32254)
-- Dependencies: 205
-- Data for Name: Sedes; Type: TABLE DATA; Schema: public; Owner: openpg
--

INSERT INTO public."Sedes" VALUES (1, 'LIMA NORTE', 'AV PANAMERICANA NORTE', NULL, NULL, '2024-09-21 19:00:00-05', 'ADMIN', NULL, NULL, NULL);
INSERT INTO public."Sedes" VALUES (2, 'LIMA CENTRO', 'AV PETIT THOUARS', NULL, NULL, '2024-09-21 19:00:00-05', 'ADMIN', NULL, NULL, NULL);


--
-- TOC entry 2940 (class 0 OID 32265)
-- Dependencies: 207
-- Data for Name: SocioAlumnos; Type: TABLE DATA; Schema: public; Owner: openpg
--

INSERT INTO public."SocioAlumnos" VALUES (101020, 2, 1, 'QUINTO SUPERIOR', 'POBRE', '2024-07-20 19:00:00-05', NULL, '2024-07-20 19:00:00-05', 'ADMIN', NULL, NULL, NULL);
INSERT INTO public."SocioAlumnos" VALUES (2, 101020, 2, 'REGULAR', 'NO POBRE', '2024-07-20 19:00:00-05', NULL, '2024-07-20 19:00:00-05', 'ADMIN', NULL, NULL, NULL);


--
-- TOC entry 2936 (class 0 OID 32243)
-- Dependencies: 203
-- Data for Name: SocioComercialGrals; Type: TABLE DATA; Schema: public; Owner: openpg
--

INSERT INTO public."SocioComercialGrals" VALUES (2, 'Jose Carlos', 'Santos', 'Chocano', '03225410', '1', '0', '989325122', '1234567@utp.edu.pe', '$2a$10$DryUMppUcbSR55EuSRsI4uvJaWkSjj4/4slSY4uTlMjUbSHU0DzdC', '2024-09-21 19:00:00-05', 'ADMIN', NULL, NULL, NULL);
INSERT INTO public."SocioComercialGrals" VALUES (3, 'Miguel', 'Arce', 'Carriom', '03255641', '0', '1', '959595959', 'c123456@utp.edu.pe', '$2a$10$DryUMppUcbSR55EuSRsI4uvJaWkSjj4/4slSY4uTlMjUbSHU0DzdC', '2024-09-21 19:00:00-05', 'ADMIN', NULL, NULL, NULL);
INSERT INTO public."SocioComercialGrals" VALUES (4, 'Ricardo', 'Gonzales', 'Muñoz', '01548512', '1', '0', '999999999', '11223344@utp.edu.pe', '$2a$10$s9DRmyFs98MXztvPPGj6LOhXwBAbR3I7txTyRnBA5OZZFeLaLE7Xe', NULL, NULL, NULL, NULL, NULL);
INSERT INTO public."SocioComercialGrals" VALUES (101020, 'Luis Felipe', 'Ocaña', 'Arrieta', '70146083', '1', '0', '959469316', '1623492@utp.edu.pe', '$2a$10$DryUMppUcbSR55EuSRsI4uvJaWkSjj4/4slSY4uTlMjUbSHU0DzdC', '2024-09-21 19:00:00-05', 'ADMIN', NULL, NULL, NULL);


--
-- TOC entry 2950 (class 0 OID 32345)
-- Dependencies: 217
-- Data for Name: SocioDocentes; Type: TABLE DATA; Schema: public; Owner: openpg
--

INSERT INTO public."SocioDocentes" VALUES (1, 3, 1, 'INGENIERO', 3000.000000, '2024-07-20 19:00:00-05', NULL, '2024-07-20 19:00:00-05', 'ADMIN', NULL, NULL, NULL);


--
-- TOC entry 2946 (class 0 OID 32318)
-- Dependencies: 213
-- Data for Name: TiposCursos; Type: TABLE DATA; Schema: public; Owner: openpg
--

INSERT INTO public."TiposCursos" VALUES (1, 'PRESENCIAL', NULL, '2024-09-21 19:00:00-05', 'ADMIN', NULL, NULL, NULL);
INSERT INTO public."TiposCursos" VALUES (2, 'VIRTUAL', NULL, '2024-09-21 19:00:00-05', 'ADMIN', NULL, NULL, NULL);
INSERT INTO public."TiposCursos" VALUES (3, 'REMOTO', NULL, '2024-09-21 19:00:00-05', 'ADMIN', NULL, NULL, NULL);


--
-- TOC entry 2977 (class 0 OID 0)
-- Dependencies: 222
-- Name: CursosXDocenteXHorarios_CURSO_X_DOCENTE_X_HORARIO_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: openpg
--

SELECT pg_catalog.setval('public."CursosXDocenteXHorarios_CURSO_X_DOCENTE_X_HORARIO_ID_seq"', 1, false);


--
-- TOC entry 2978 (class 0 OID 0)
-- Dependencies: 218
-- Name: CursosXDocentes_CURSO_X_DOCENTE_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: openpg
--

SELECT pg_catalog.setval('public."CursosXDocentes_CURSO_X_DOCENTE_ID_seq"', 1, false);


--
-- TOC entry 2979 (class 0 OID 0)
-- Dependencies: 214
-- Name: Cursos_CURSO_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: openpg
--

SELECT pg_catalog.setval('public."Cursos_CURSO_ID_seq"', 1, false);


--
-- TOC entry 2980 (class 0 OID 0)
-- Dependencies: 220
-- Name: Horarios_HORARIO_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: openpg
--

SELECT pg_catalog.setval('public."Horarios_HORARIO_ID_seq"', 1, false);


--
-- TOC entry 2981 (class 0 OID 0)
-- Dependencies: 224
-- Name: MatriculaDetalles_MATRICULA_DETALLE_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: openpg
--

SELECT pg_catalog.setval('public."MatriculaDetalles_MATRICULA_DETALLE_ID_seq"', 4, true);


--
-- TOC entry 2982 (class 0 OID 0)
-- Dependencies: 210
-- Name: MatriculaGrals_MATRICULA_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: openpg
--

SELECT pg_catalog.setval('public."MatriculaGrals_MATRICULA_ID_seq"', 14, true);


--
-- TOC entry 2983 (class 0 OID 0)
-- Dependencies: 208
-- Name: Periodos_PERIODO_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: openpg
--

SELECT pg_catalog.setval('public."Periodos_PERIODO_ID_seq"', 1, false);


--
-- TOC entry 2984 (class 0 OID 0)
-- Dependencies: 204
-- Name: Sedes_SEDE_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: openpg
--

SELECT pg_catalog.setval('public."Sedes_SEDE_ID_seq"', 2, true);


--
-- TOC entry 2985 (class 0 OID 0)
-- Dependencies: 206
-- Name: SocioAlumnos_SOCIO_ALUMNO_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: openpg
--

SELECT pg_catalog.setval('public."SocioAlumnos_SOCIO_ALUMNO_ID_seq"', 2, true);


--
-- TOC entry 2986 (class 0 OID 0)
-- Dependencies: 202
-- Name: SocioComercialGrals_SOCIO_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: openpg
--

SELECT pg_catalog.setval('public."SocioComercialGrals_SOCIO_ID_seq"', 4, true);


--
-- TOC entry 2987 (class 0 OID 0)
-- Dependencies: 216
-- Name: SocioDocentes_SOCIO_DOCENTE_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: openpg
--

SELECT pg_catalog.setval('public."SocioDocentes_SOCIO_DOCENTE_ID_seq"', 1, false);


--
-- TOC entry 2988 (class 0 OID 0)
-- Dependencies: 212
-- Name: TiposCursos_TIPO_CURSO_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: openpg
--

SELECT pg_catalog.setval('public."TiposCursos_TIPO_CURSO_ID_seq"', 1, false);


--
-- TOC entry 2793 (class 2606 OID 32394)
-- Name: CursosXDocenteXHorarios CursosXDocenteXHorarios_pkey; Type: CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."CursosXDocenteXHorarios"
    ADD CONSTRAINT "CursosXDocenteXHorarios_pkey" PRIMARY KEY ("CURSO_X_DOCENTE_X_HORARIO_ID");


--
-- TOC entry 2789 (class 2606 OID 32368)
-- Name: CursosXDocentes CursosXDocentes_pkey; Type: CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."CursosXDocentes"
    ADD CONSTRAINT "CursosXDocentes_pkey" PRIMARY KEY ("CURSO_X_DOCENTE_ID");


--
-- TOC entry 2785 (class 2606 OID 32337)
-- Name: Cursos Cursos_pkey; Type: CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."Cursos"
    ADD CONSTRAINT "Cursos_pkey" PRIMARY KEY ("CURSO_ID");


--
-- TOC entry 2791 (class 2606 OID 32386)
-- Name: Horarios Horarios_pkey; Type: CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."Horarios"
    ADD CONSTRAINT "Horarios_pkey" PRIMARY KEY ("HORARIO_ID");


--
-- TOC entry 2795 (class 2606 OID 32412)
-- Name: MatriculaDetalles MatriculaDetalles_pkey; Type: CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."MatriculaDetalles"
    ADD CONSTRAINT "MatriculaDetalles_pkey" PRIMARY KEY ("MATRICULA_DETALLE_ID");


--
-- TOC entry 2781 (class 2606 OID 32305)
-- Name: MatriculaGrals MatriculaGrals_pkey; Type: CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."MatriculaGrals"
    ADD CONSTRAINT "MatriculaGrals_pkey" PRIMARY KEY ("MATRICULA_ID");


--
-- TOC entry 2779 (class 2606 OID 32294)
-- Name: Periodos Periodos_pkey; Type: CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."Periodos"
    ADD CONSTRAINT "Periodos_pkey" PRIMARY KEY ("PERIODO_ID");


--
-- TOC entry 2775 (class 2606 OID 32262)
-- Name: Sedes Sedes_pkey; Type: CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."Sedes"
    ADD CONSTRAINT "Sedes_pkey" PRIMARY KEY ("SEDE_ID");


--
-- TOC entry 2777 (class 2606 OID 32273)
-- Name: SocioAlumnos SocioAlumnos_pkey; Type: CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."SocioAlumnos"
    ADD CONSTRAINT "SocioAlumnos_pkey" PRIMARY KEY ("SOCIO_ALUMNO_ID");


--
-- TOC entry 2773 (class 2606 OID 32251)
-- Name: SocioComercialGrals SocioComercialGrals_pkey; Type: CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."SocioComercialGrals"
    ADD CONSTRAINT "SocioComercialGrals_pkey" PRIMARY KEY ("SOCIO_ID");


--
-- TOC entry 2787 (class 2606 OID 32350)
-- Name: SocioDocentes SocioDocentes_pkey; Type: CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."SocioDocentes"
    ADD CONSTRAINT "SocioDocentes_pkey" PRIMARY KEY ("SOCIO_DOCENTE_ID");


--
-- TOC entry 2783 (class 2606 OID 32326)
-- Name: TiposCursos TiposCursos_pkey; Type: CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."TiposCursos"
    ADD CONSTRAINT "TiposCursos_pkey" PRIMARY KEY ("TIPO_CURSO_ID");


--
-- TOC entry 2805 (class 2606 OID 34818)
-- Name: CursosXDocenteXHorarios CursosXDocenteXHorarios_CURSO_X_DOCENTE_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."CursosXDocenteXHorarios"
    ADD CONSTRAINT "CursosXDocenteXHorarios_CURSO_X_DOCENTE_ID_fkey" FOREIGN KEY ("CURSO_X_DOCENTE_ID") REFERENCES public."CursosXDocentes"("CURSO_X_DOCENTE_ID") ON UPDATE CASCADE;


--
-- TOC entry 2806 (class 2606 OID 34823)
-- Name: CursosXDocenteXHorarios CursosXDocenteXHorarios_HORARIO_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."CursosXDocenteXHorarios"
    ADD CONSTRAINT "CursosXDocenteXHorarios_HORARIO_ID_fkey" FOREIGN KEY ("HORARIO_ID") REFERENCES public."Horarios"("HORARIO_ID") ON UPDATE CASCADE;


--
-- TOC entry 2804 (class 2606 OID 34813)
-- Name: CursosXDocentes CursosXDocentes_CURSO_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."CursosXDocentes"
    ADD CONSTRAINT "CursosXDocentes_CURSO_ID_fkey" FOREIGN KEY ("CURSO_ID") REFERENCES public."Cursos"("CURSO_ID") ON UPDATE CASCADE;


--
-- TOC entry 2803 (class 2606 OID 34808)
-- Name: CursosXDocentes CursosXDocentes_SOCIO_DOCENTE_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."CursosXDocentes"
    ADD CONSTRAINT "CursosXDocentes_SOCIO_DOCENTE_ID_fkey" FOREIGN KEY ("SOCIO_DOCENTE_ID") REFERENCES public."SocioDocentes"("SOCIO_DOCENTE_ID") ON UPDATE CASCADE;


--
-- TOC entry 2800 (class 2606 OID 34793)
-- Name: Cursos Cursos_TIPO_CURSO_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."Cursos"
    ADD CONSTRAINT "Cursos_TIPO_CURSO_ID_fkey" FOREIGN KEY ("TIPO_CURSO_ID") REFERENCES public."TiposCursos"("TIPO_CURSO_ID") ON UPDATE CASCADE;


--
-- TOC entry 2808 (class 2606 OID 34833)
-- Name: MatriculaDetalles MatriculaDetalles_CURSO_X_DOCENTE_X_HORARIO_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."MatriculaDetalles"
    ADD CONSTRAINT "MatriculaDetalles_CURSO_X_DOCENTE_X_HORARIO_ID_fkey" FOREIGN KEY ("CURSO_X_DOCENTE_X_HORARIO_ID") REFERENCES public."CursosXDocenteXHorarios"("CURSO_X_DOCENTE_X_HORARIO_ID") ON UPDATE CASCADE;


--
-- TOC entry 2807 (class 2606 OID 34828)
-- Name: MatriculaDetalles MatriculaDetalles_MATRICULA_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."MatriculaDetalles"
    ADD CONSTRAINT "MatriculaDetalles_MATRICULA_ID_fkey" FOREIGN KEY ("MATRICULA_ID") REFERENCES public."MatriculaGrals"("MATRICULA_ID") ON UPDATE CASCADE;


--
-- TOC entry 2799 (class 2606 OID 34788)
-- Name: MatriculaGrals MatriculaGrals_PERIODO_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."MatriculaGrals"
    ADD CONSTRAINT "MatriculaGrals_PERIODO_ID_fkey" FOREIGN KEY ("PERIODO_ID") REFERENCES public."Periodos"("PERIODO_ID") ON UPDATE CASCADE;


--
-- TOC entry 2798 (class 2606 OID 34783)
-- Name: MatriculaGrals MatriculaGrals_SOCIO_ALUMNO_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."MatriculaGrals"
    ADD CONSTRAINT "MatriculaGrals_SOCIO_ALUMNO_ID_fkey" FOREIGN KEY ("SOCIO_ALUMNO_ID") REFERENCES public."SocioAlumnos"("SOCIO_ALUMNO_ID") ON UPDATE CASCADE;


--
-- TOC entry 2797 (class 2606 OID 34778)
-- Name: SocioAlumnos SocioAlumnos_SEDE_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."SocioAlumnos"
    ADD CONSTRAINT "SocioAlumnos_SEDE_ID_fkey" FOREIGN KEY ("SEDE_ID") REFERENCES public."Sedes"("SEDE_ID") ON UPDATE CASCADE;


--
-- TOC entry 2796 (class 2606 OID 34773)
-- Name: SocioAlumnos SocioAlumnos_SOCIO_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."SocioAlumnos"
    ADD CONSTRAINT "SocioAlumnos_SOCIO_ID_fkey" FOREIGN KEY ("SOCIO_ID") REFERENCES public."SocioComercialGrals"("SOCIO_ID") ON UPDATE CASCADE;


--
-- TOC entry 2802 (class 2606 OID 34803)
-- Name: SocioDocentes SocioDocentes_SEDE_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."SocioDocentes"
    ADD CONSTRAINT "SocioDocentes_SEDE_ID_fkey" FOREIGN KEY ("SEDE_ID") REFERENCES public."Sedes"("SEDE_ID") ON UPDATE CASCADE;


--
-- TOC entry 2801 (class 2606 OID 34798)
-- Name: SocioDocentes SocioDocentes_SOCIO_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: openpg
--

ALTER TABLE ONLY public."SocioDocentes"
    ADD CONSTRAINT "SocioDocentes_SOCIO_ID_fkey" FOREIGN KEY ("SOCIO_ID") REFERENCES public."SocioComercialGrals"("SOCIO_ID") ON UPDATE CASCADE;


-- Completed on 2024-09-23 11:24:54

--
-- PostgreSQL database dump complete
--

