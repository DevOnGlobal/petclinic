FROM maven:3.5.0
WORKDIR /app
COPY . .
RUN mvn package

FROM tomcat:8.0
RUN rm -rf /usr/local/tomcat/webapps/ROOT
COPY --from=0 /app/target/petclinic.war /usr/local/tomcat/webapps/ROOT.war
