--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)

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
    token character varying NOT NULL,
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
    "shortUrl" character varying(15) NOT NULL,
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

INSERT INTO public.urls VALUES (2, NULL, 'https://chat.openai.com/chat', 'IkgDcpCd', 0, '2023-03-01 22:45:50.651437');
INSERT INTO public.urls VALUES (3, NULL, 'https://chat.openai.com/chat', 'o6cZBsKH', 0, '2023-03-01 23:28:58.8809');
INSERT INTO public.urls VALUES (4, NULL, 'https://chat.openai.com/chat', '0orkfeSr', 0, '2023-03-01 23:29:15.143797');
INSERT INTO public.urls VALUES (5, NULL, 'https://chat.openai.com/chat', 'OlcbuU0B', 0, '2023-03-01 23:29:41.697359');
INSERT INTO public.urls VALUES (6, NULL, 'https://chat.openai.com/chat', 'V2w7hw-Z', 0, '2023-03-01 23:30:10.233168');
INSERT INTO public.urls VALUES (7, NULL, 'https://chat.openai.com/chat', 'GpJg6xJz', 0, '2023-03-01 23:50:26.212047');
INSERT INTO public.urls VALUES (8, NULL, 'https://chat.openai.com/chat', 'iUb6Ukh7', 0, '2023-03-02 15:27:14.181322');
INSERT INTO public.urls VALUES (9, NULL, 'https://chat.openai.com/chat', '2PihmgU4', 0, '2023-03-02 15:28:52.759697');
INSERT INTO public.urls VALUES (10, NULL, 'https://chat.openai.com/chat', 'cpAM21WE', 0, '2023-03-02 15:30:28.334304');
INSERT INTO public.urls VALUES (11, NULL, 'https://chat.openai.com/chat', 'JJbJVCuj', 0, '2023-03-02 15:32:57.543174');
INSERT INTO public.urls VALUES (12, NULL, 'https://chat.openai.com/chat', '3EXC-WFQ', 0, '2023-03-02 15:34:38.96636');
INSERT INTO public.urls VALUES (13, NULL, 'https://chat.openai.com/chat', 'JmCzPY0F', 0, '2023-03-02 15:35:23.301295');
INSERT INTO public.urls VALUES (14, NULL, 'https://chat.openai.com/chat', '6xyR6ALu', 0, '2023-03-02 15:35:48.12558');
INSERT INTO public.urls VALUES (16, NULL, 'https://chat.openai.com/chat', '60ycDO-8', 0, '2023-03-02 15:51:59.629035');
INSERT INTO public.urls VALUES (17, NULL, 'https://chat.openai.com/chat', 'WS6GGfX8', 0, '2023-03-02 15:52:29.101923');
INSERT INTO public.urls VALUES (18, NULL, 'https://chat.openai.com/chat', 'AMDTfyup', 0, '2023-03-02 15:52:30.834497');
INSERT INTO public.urls VALUES (19, NULL, 'https://chat.openai.com/chat', 'wMNjIp4m', 0, '2023-03-02 15:53:50.12634');
INSERT INTO public.urls VALUES (20, NULL, 'https://chat.openai.com/chat', 'n4BNqrvW', 0, '2023-03-02 15:58:39.133077');
INSERT INTO public.urls VALUES (21, NULL, 'https://chat.openai.com/chat', '37qs6s2p', 0, '2023-03-02 16:02:19.476291');
INSERT INTO public.urls VALUES (22, NULL, 'https://chat.openai.com/chat', 'NnWMLwn_', 0, '2023-03-02 16:05:56.874445');
INSERT INTO public.urls VALUES (23, NULL, 'https://chat.openai.com/chat', 'D5avigiB', 0, '2023-03-02 16:06:14.118562');
INSERT INTO public.urls VALUES (24, NULL, 'https://chat.openai.com/chat', '1Y6wLWnd', 0, '2023-03-02 16:06:27.114993');
INSERT INTO public.urls VALUES (25, NULL, 'https://chat.openai.com/chat', 'U41q4dpC', 0, '2023-03-02 16:07:18.430645');
INSERT INTO public.urls VALUES (26, NULL, 'https://chat.openai.com/chat', 'QJrkeuXv', 0, '2023-03-02 17:15:36.51079');
INSERT INTO public.urls VALUES (27, NULL, 'https://chat.openai.com/chat', '5z0Vk54E', 0, '2023-03-02 17:29:21.912246');
INSERT INTO public.urls VALUES (28, NULL, 'https://chat.openai.com/chat', 'hPnBo6on', 0, '2023-03-02 17:29:41.624679');
INSERT INTO public.urls VALUES (29, NULL, 'https://chat.openai.com/chat', 'JGpLBjDt', 0, '2023-03-02 17:30:04.727084');
INSERT INTO public.urls VALUES (30, NULL, 'https://chat.openai.com/chat', 'D_i_LX72', 0, '2023-03-02 17:33:32.757069');
INSERT INTO public.urls VALUES (31, NULL, 'https://chat.openai.com/chat', 'rxT3Mmso', 0, '2023-03-02 17:34:06.944051');
INSERT INTO public.urls VALUES (32, NULL, 'https://chat.openai.com/chat', '1a3FOScj', 0, '2023-03-02 17:35:59.513317');
INSERT INTO public.urls VALUES (33, NULL, 'https://chat.openai.com/chat', 'FrAbOrBs', 0, '2023-03-02 17:36:20.303829');
INSERT INTO public.urls VALUES (34, NULL, 'https://chat.openai.com/chat', 'cDZzaiv2', 0, '2023-03-02 17:36:30.549574');
INSERT INTO public.urls VALUES (35, NULL, 'https://chat.openai.com/chat', 'zUGmaHl0', 0, '2023-03-02 17:37:15.522033');
INSERT INTO public.urls VALUES (36, NULL, 'https://chat.openai.com/chat', 'KE8L8BB7', 0, '2023-03-02 17:37:59.485839');
INSERT INTO public.urls VALUES (15, NULL, 'https://chat.openai.com/chat', 'qKt_EoqX', 2, '2023-03-02 15:51:52.393874');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (6, 'Marya', 'meredith@driven.com.br', '$2b$10$1M10L64XnLINGzK36ux1EuLYMh33g6vc0oBkGUw7dAAPb/vf.8rzm', '2023-02-27 16:50:06.012');
INSERT INTO public.users VALUES (7, 'Pam', 'pam@driven.com.br', '$2b$10$KFkZ2nvfEz01J9pbGWmWU.xIH0gcW5eEpEL5po0FvbAvHdP.AUmgW', '2023-02-28 16:30:55.357');
INSERT INTO public.users VALUES (8, 'Mike', 'mike@driven.com.br', '$2b$10$Hs/o9INFBP0VpkM1hbKx1.mI185lcrZ5lR1fgJiL54xXs6ieaKEqy', '2023-02-28 16:31:21.269');
INSERT INTO public.users VALUES (9, 'Judith', 'juth@driven.com.br', '$2b$10$31unbDskbO6/EEOXBpswH..qf.hwaTRheXaOpFIT9UMIgV0U1Pdl.', '2023-02-28 16:55:32.353');
INSERT INTO public.users VALUES (10, 'Marya', 'marya@driven.com.br', '$2b$10$KSB4eZzp2NsebPUhEMVyYeHbgbLZ8ywpjnS3W8cByA5zpcwwoKZWK', '2023-02-28 19:35:55.171');
INSERT INTO public.users VALUES (11, 'Ofélia Moreira', 'Alessandro.Albuquerque@hotmail.com', '$2b$10$nlMQ6.42qaLJbysusbWSyuNt1bnLAyOPRmgAm0npRXy28bWOa0LSW', '2023-02-28 20:00:42.397');
INSERT INTO public.users VALUES (12, 'Tika RaKa Tika', 'tikarakatika@hotmail.com', '$2b$10$.xsu0PRSlxgaPq0D86fBP.5cYx/O0XVq9THHryOfFcCjz.CMQ60yG', '2023-03-03 10:04:49.722');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 3, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 36, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 12, true);


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

