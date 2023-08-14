--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 15.4

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
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


--
-- Name: Role; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."Role" AS ENUM (
    'PROFESSOR',
    'ADMIN',
    'ALUNO',
    'COORDENADOR'
);


ALTER TYPE public."Role" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Calendar; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Calendar" (
    id_calendario integer NOT NULL,
    title text NOT NULL,
    description text,
    "startDate" timestamp(3) without time zone NOT NULL,
    "endDate" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Calendar" OWNER TO postgres;

--
-- Name: Calendar_id_calendario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Calendar_id_calendario_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Calendar_id_calendario_seq" OWNER TO postgres;

--
-- Name: Calendar_id_calendario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Calendar_id_calendario_seq" OWNED BY public."Calendar".id_calendario;


--
-- Name: Curse; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Curse" (
    id_curse integer NOT NULL,
    title text NOT NULL,
    description text
);


ALTER TABLE public."Curse" OWNER TO postgres;

--
-- Name: Curse_id_curse_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Curse_id_curse_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Curse_id_curse_seq" OWNER TO postgres;

--
-- Name: Curse_id_curse_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Curse_id_curse_seq" OWNED BY public."Curse".id_curse;


--
-- Name: Post; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Post" (
    id integer NOT NULL,
    title text NOT NULL,
    content text,
    published boolean DEFAULT false NOT NULL,
    "authorId" integer NOT NULL
);


ALTER TABLE public."Post" OWNER TO postgres;

--
-- Name: Post_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Post_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Post_id_seq" OWNER TO postgres;

--
-- Name: Post_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Post_id_seq" OWNED BY public."Post".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    name text NOT NULL,
    color text
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: UserCurse; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."UserCurse" (
    id integer NOT NULL,
    "alunoId" integer NOT NULL,
    "cursoId" integer NOT NULL,
    role public."Role" NOT NULL
);


ALTER TABLE public."UserCurse" OWNER TO postgres;

--
-- Name: UserCurse_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."UserCurse_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."UserCurse_id_seq" OWNER TO postgres;

--
-- Name: UserCurse_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."UserCurse_id_seq" OWNED BY public."UserCurse".id;


--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."User_id_seq" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: evaluations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.evaluations (
    id integer NOT NULL,
    nota double precision NOT NULL,
    "alunoId" integer NOT NULL,
    "cursoId" integer NOT NULL
);


ALTER TABLE public.evaluations OWNER TO postgres;

--
-- Name: evaluations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.evaluations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.evaluations_id_seq OWNER TO postgres;

--
-- Name: evaluations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.evaluations_id_seq OWNED BY public.evaluations.id;


--
-- Name: Calendar id_calendario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Calendar" ALTER COLUMN id_calendario SET DEFAULT nextval('public."Calendar_id_calendario_seq"'::regclass);


--
-- Name: Curse id_curse; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Curse" ALTER COLUMN id_curse SET DEFAULT nextval('public."Curse_id_curse_seq"'::regclass);


--
-- Name: Post id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Post" ALTER COLUMN id SET DEFAULT nextval('public."Post_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Name: UserCurse id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserCurse" ALTER COLUMN id SET DEFAULT nextval('public."UserCurse_id_seq"'::regclass);


--
-- Name: evaluations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evaluations ALTER COLUMN id SET DEFAULT nextval('public.evaluations_id_seq'::regclass);


--
-- Data for Name: Calendar; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Calendar" (id_calendario, title, description, "startDate", "endDate") FROM stdin;
1	Trabalho Sistema	Desenvolver um sistema funcional	2023-10-08 00:00:00	2023-10-12 00:00:00
\.


--
-- Data for Name: Curse; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Curse" (id_curse, title, description) FROM stdin;
1	Engenharia de Software	Curso de Bacharelado em engenharia de software
\.


--
-- Data for Name: Post; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Post" (id, title, content, published, "authorId") FROM stdin;
1	teste	teste	f	1
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, email, password, name, color) FROM stdin;
1	teste@tes.com	$2b$10$PR/0gZO/Emv6TfVCkSUQue7WueujMInov4TT4jUFZCwMwUHbYKuJm	André	\N
10	andrenicolascordeiro@gmail.com	$2b$10$JyCPbsuCDSfO9kDweXpnG.fptPAbps1Fh9kVIdLXQWEakpDeVJloK	André Nicolas	\N
11	l.h.cardoso.lh@gmail.com	$2b$10$2mpzvjambbETPmRRQLUBOunFRoO7AzikBq3pu23HRLzfHPPJXl6ya	Henrique Cardoso	\N
\.


--
-- Data for Name: UserCurse; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."UserCurse" (id, "alunoId", "cursoId", role) FROM stdin;
1	1	1	ALUNO
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
24ec86b5-46d1-44ba-8c49-6be087780a23	c174348181df014c25ce7292043b11e1080bde9248dcb3669093f5f5e63984c7	2023-08-06 01:18:33.390339+00	20230806003031_init	\N	\N	2023-08-06 01:18:32.41049+00	1
3f1d760d-5cdb-4bb8-a1be-186db0d71a16	32d6e1776b3f0274e939732b1c2a83d6321b92107b809fbf8a646a8d035009e2	2023-08-11 03:21:44.810483+00	20230811032142_init	\N	\N	2023-08-11 03:21:43.759025+00	1
\.


--
-- Data for Name: evaluations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.evaluations (id, nota, "alunoId", "cursoId") FROM stdin;
1	8	1	1
\.


--
-- Name: Calendar_id_calendario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Calendar_id_calendario_seq"', 1, false);


--
-- Name: Curse_id_curse_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Curse_id_curse_seq"', 1, false);


--
-- Name: Post_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Post_id_seq"', 1, true);


--
-- Name: UserCurse_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."UserCurse_id_seq"', 1, false);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_id_seq"', 11, true);


--
-- Name: evaluations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.evaluations_id_seq', 1, false);


--
-- Name: Calendar Calendar_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Calendar"
    ADD CONSTRAINT "Calendar_pkey" PRIMARY KEY (id_calendario);


--
-- Name: Curse Curse_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Curse"
    ADD CONSTRAINT "Curse_pkey" PRIMARY KEY (id_curse);


--
-- Name: Post Post_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_pkey" PRIMARY KEY (id);


--
-- Name: UserCurse UserCurse_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserCurse"
    ADD CONSTRAINT "UserCurse_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: evaluations evaluations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evaluations
    ADD CONSTRAINT evaluations_pkey PRIMARY KEY (id);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: Post Post_authorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: UserCurse UserCurse_alunoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserCurse"
    ADD CONSTRAINT "UserCurse_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: UserCurse UserCurse_cursoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserCurse"
    ADD CONSTRAINT "UserCurse_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES public."Curse"(id_curse) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: evaluations evaluations_alunoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evaluations
    ADD CONSTRAINT "evaluations_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES public."UserCurse"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: evaluations evaluations_cursoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evaluations
    ADD CONSTRAINT "evaluations_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES public."Curse"(id_curse) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

