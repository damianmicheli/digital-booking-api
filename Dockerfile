#
# Build stage
#
FROM maven:3.8.7-amazoncorretto-17 AS maven_build
WORKDIR /app

COPY pom.xml .
RUN mvn clean package -Dmaven.test.skip -Dmaven.main.skip -Dspring-boot.repackage.skip && rm -r target/
COPY src ./src
RUN mvn clean package -Dmaven.test.skip

#
# Package stage
#
FROM amazoncorretto:19.0.1-alpine3.16
WORKDIR /app

COPY --from=maven_build /app/target/backend-0.0.1-SNAPSHOT.jar /app/app.jar
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
EXPOSE 8080
