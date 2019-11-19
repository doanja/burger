CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id integer(9) auto_increment,
	burger_name varchar(30) not null,
	devoured bool default false,
	primary key (id)
);