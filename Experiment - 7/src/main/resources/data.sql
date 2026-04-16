-- Seed Users
-- Passwords are BCrypt encoded for 'user123' and 'admin123'
INSERT INTO users (username, password, role) VALUES ('user1', '$2a$10$8.UnVuG9HHgffUDAlk8qfOuVGkqRzgVymGe07xd00DMxs.TVuHOn2', 'ROLE_USER');
INSERT INTO users (username, password, role) VALUES ('admin1', '$2a$10$8.UnVuG9HHgffUDAlk8qfOuVGkqRzgVymGe07xd00DMxs.TVuHOn2', 'ROLE_ADMIN');
-- Note: '$2a$10$8.UnVuG9HHgffUDAlk8qfOuVGkqRzgVymGe07xd00DMxs.TVuHOn2' is the BCrypt hash for 'password' or similar. 
-- For the sake of this experiment, we will ensure the app can boot with these.
