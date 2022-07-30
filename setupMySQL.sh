KILLMYSQLD="pkill mysqld"
RESTARTMYSQL="brew services restart mysql"
STARTMONGO="mongod --dbpath $HOME/data/db"

eval $KILLMYSQLD && $RESTARTMYSQL && $STARTMONGO&
