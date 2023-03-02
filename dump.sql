--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    userid integer,
    token text NOT NULL,
    createdat timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    userid integer,
    url character varying(255) NOT NULL,
    shorturl character varying(15) NOT NULL,
    visitcount integer DEFAULT 0 NOT NULL,
    createdat timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email character varying(50),
    password character varying(100) NOT NULL,
    "createdAt" timestamp without time zone
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (2, 11, '43ff1086-ef9c-4236-953a-fd01e38309b2', '2023-03-01 17:07:06.632898');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (1, NULL, 'https://chat.openai.com/chat', 'nwWJOnNi', 0, '2023-03-01 22:41:52.61628');
INSERT INTO public.urls VALUES (2, NULL, 'https://chat.openai.com/chat', 'IkgDcpCd', 0, '2023-03-01 22:45:50.651437');
INSERT INTO public.urls VALUES (3, NULL, 'https://chat.openai.com/chat', 'o6cZBsKH', 0, '2023-03-01 23:28:58.8809');
INSERT INTO public.urls VALUES (4, NULL, 'https://chat.openai.com/chat', '0orkfeSr', 0, '2023-03-01 23:29:15.143797');
INSERT INTO public.urls VALUES (5, NULL, 'https://chat.openai.com/chat', 'OlcbuU0B', 0, '2023-03-01 23:29:41.697359');
INSERT INTO public.urls VALUES (6, NULL, 'https://chat.openai.com/chat', 'V2w7hw-Z', 0, '2023-03-01 23:30:10.233168');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (6, 'Marya', 'meredith@driven.com.br', '$2b$10$1M10L64XnLINGzK36ux1EuLYMh33g6vc0oBkGUw7dAAPb/vf.8rzm', '2023-02-27 16:50:06.012');
INSERT INTO public.users VALUES (7, 'Pam', 'pam@driven.com.br', '$2b$10$KFkZ2nvfEz01J9pbGWmWU.xIH0gcW5eEpEL5po0FvbAvHdP.AUmgW', '2023-02-28 16:30:55.357');
INSERT INTO public.users VALUES (8, 'Mike', 'mike@driven.com.br', '$2b$10$Hs/o9INFBP0VpkM1hbKx1.mI185lcrZ5lR1fgJiL54xXs6ieaKEqy', '2023-02-28 16:31:21.269');
INSERT INTO public.users VALUES (9, 'Judith', 'juth@driven.com.br', '$2b$10$31unbDskbO6/EEOXBpswH..qf.hwaTRheXaOpFIT9UMIgV0U1Pdl.', '2023-02-28 16:55:32.353');
INSERT INTO public.users VALUES (10, 'Marya', 'marya@driven.com.br', '$2b$10$KSB4eZzp2NsebPUhEMVyYeHbgbLZ8ywpjnS3W8cByA5zpcwwoKZWK', '2023-02-28 19:35:55.171');
INSERT INTO public.users VALUES (11, 'Ofélia Moreira', 'Alessandro.Albuquerque@hotmail.com', '$2b$10$nlMQ6.42qaLJbysusbWSyuNt1bnLAyOPRmgAm0npRXy28bWOa0LSW', '2023-02-28 20:00:42.397');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 2, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 6, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 11, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id);


--
-- Name: urls urls_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

