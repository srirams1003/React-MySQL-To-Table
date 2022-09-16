KILLMYSQLD="pkill mysqld"
RESTARTMYSQL="brew services restart mysql"

eval $KILLMYSQLD && $RESTARTMYSQL
