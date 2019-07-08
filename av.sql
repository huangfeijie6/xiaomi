set names utf8;
drop database if exists av;
create database av charset utf8;
use av;

create table user_name(
	uid		int			primary key	auto_increment,
	uname	varchar(16)	not null,
	upwd	varchar(32)	not null,
	sex		int		default 1,
	phone	varchar(11),
	uemail	varchar(50),
	rname	varchar(50)	not null
);