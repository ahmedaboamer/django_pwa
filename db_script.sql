CREATE SCHEMA `django_pwa_db`;
CREATE user dbadmin identified BY 'djangopwadbpass';
GRANT all ON django_pwa_db.* TO 'dbadmin'@'%';
FLUSH PRIVILEGES;