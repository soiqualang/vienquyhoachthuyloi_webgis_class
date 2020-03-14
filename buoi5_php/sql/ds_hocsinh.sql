-- Adminer 4.7.6 PostgreSQL dump

DROP TABLE IF EXISTS "ds_hocsinh";
DROP SEQUENCE IF EXISTS ds_hocsinh_id_seq;
CREATE SEQUENCE ds_hocsinh_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 4 CACHE 1;

CREATE TABLE "public"."ds_hocsinh" (
    "id" integer DEFAULT nextval('ds_hocsinh_id_seq') NOT NULL,
    "ten" character varying,
    "tuoi" numeric,
    "diachi" character varying,
    CONSTRAINT "ds_hocsinh_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "ds_hocsinh" ("id", "ten", "tuoi", "diachi") VALUES
(1,	'Nguyen Van A',	20,	'dafs dfgdffdg'),
(2,	'Nguyen Van C',	35,	'sdfgdh  cg'),
(3,	'Banh Van A',	29,	'Ngo A, Abc');

-- 2020-03-07 10:11:40.878562+07
