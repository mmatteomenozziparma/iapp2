import mysql.connector

databaselaunch = mysql.connector.connect(
	host="localhost",
	user="root",
	password = "b!g12HEre",
	)

my_cursor = databaselaunch.cursor()

#my_cursor.execute("CREATE DATABASE our_users")

my_cursor.execute("SHOW DATABASES")
for db in my_cursor:
	print(db)
