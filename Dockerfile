FROM tomcat:8.5.37-jre8
COPY ./ui/tshell/dist/. /usr/local/tomcat/webapps/tshell
COPY ./service/tshell/target/tshell-service.war /usr/local/tomcat/webapps
