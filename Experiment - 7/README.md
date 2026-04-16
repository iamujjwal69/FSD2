# Experiment 7: Role-Based Authorization (RBAC) in Spring Boot

This project implements RBAC using Spring Security and H2 database.

## Project Structure
- `src/main/java/com/example/experiment7/` - Main Java source code.
- `src/main/resources/application.properties` - H2 and security configurations.
- `screenshots/` - Folder where you should save your Postman screenshots.

## How to Run
1. Open the project in your IDE (IntelliJ, Eclipse, VS Code).
2. Run `mvn spring-boot:run` or run the `Experiment7Application` class.
3. Use Postman to test the endpoints listed below.

## Credentials
- **User**: `user1` / `user123` (Role: ROLE_USER)
- **Admin**: `admin1` / `admin123` (Role: ROLE_ADMIN)

## API Endpoints
- **Public**: `GET http://localhost:8080/api/public/hello`
- **User Only**: `GET http://localhost:8080/api/user/profile` (Basic Auth: user1 or admin1)
- **Admin Only**: `GET http://localhost:8080/api/admin/dashboard` (Basic Auth: admin1)

## Postman Testing Guide
1. **Case 1**: Access `/api/public/hello` (No Auth) -> `200 OK`.
2. **Case 2**: Access `/api/user/profile` (Auth: `user1:user123`) -> `200 OK`.
3. **Case 3**: Access `/api/admin/dashboard` (Auth: `user1:user123`) -> `403 Forbidden`.
4. **Case 4**: Access `/api/admin/dashboard` (Auth: `admin1:admin123`) -> `200 OK`.
5. **Case 5**: Access any secured endpoint (No Auth) -> `401 Unauthorized`.

## Required Screenshots
Save your screenshots in the `screenshots/` directory:
1. `01-login-success.png` (Successful access to user endpoint with user1)
2. `02-user-endpoint-success.png` (Successful response window)
3. `03-admin-endpoint-success.png` (Successful access with admin1)
4. `04-access-denied.png` (403 Forbidden for user1 accessing admin endpoint)
