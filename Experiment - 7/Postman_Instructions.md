# 🧪 Experiment 7: Postman Testing Guide

This guide will walk you through the 4 mandatory testing scenarios to capture your screenshots for submission.

## 🚀 Before You Start
1. Open your project in your IDE (VS Code, IntelliJ, etc.).
2. Run the `Experiment7Application.java` to start the server.
3. Once the console says `Started Experiment7Application in X seconds`, the server is ready at `http://localhost:8080`.

---

## 📸 Scenario 1: Login Success (User Profile)
**Goal**: Verify that a user with `ROLE_USER` can access the user-only profile endpoint.

1.  **Method**: `GET`
2.  **URL**: `http://localhost:8080/api/user/profile`
3.  **Authorization**:
    *   Type: `Basic Auth`
    *   Username: `user1`
    *   Password: `user123`
4.  **Expected Response**: `200 OK`
5.  **Screenshot Name**: `01-login-success.png`

---

## 📸 Scenario 2: USER accessing USER endpoint
**Goal**: Re-verify successful access for the user role.

1.  **Method**: `GET`
2.  **URL**: `http://localhost:8080/api/user/profile`
3.  **Authorization**: `Basic Auth` (`user1`)
4.  **Expected Response**: `200 OK`
5.  **Screenshot Name**: `02-user-endpoint-success.png`

---

## 📸 Scenario 3: ADMIN accessing ADMIN dashboard
**Goal**: Verify that an admin can access the restricted admin dashboard.

1.  **Method**: `GET`
2.  **URL**: `http://localhost:8080/api/admin/dashboard`
3.  **Authorization**:
    *   Type: `Basic Auth`
    *   Username: `admin1`
    *   Password: `admin123`
4.  **Expected Response**: `200 OK`
5.  **Screenshot Name**: `03-admin-endpoint-success.png`

---

## 📸 Scenario 4: Access Denied (USER accessing ADMIN dashboard)
**Goal**: Verify that RBAC correctly blocks a lower-role user from admin resources.

1.  **Method**: `GET`
2.  **URL**: `http://localhost:8080/api/admin/dashboard`
3.  **Authorization**:
    *   Type: `Basic Auth`
    *   Username: `user1` (Important: switch back to the normal user)
    *   Password: `user123`
4.  **Expected Response**: `403 Forbidden`
5.  **Bonus**: Observe the custom JSON error message I implemented:
    ```json
    { "error": "Forbidden", "message": "Access Denied: You do not have the required role..." }
    ```
6.  **Screenshot Name**: `04-access-denied.png`

---

## 📸 (Recommended) Scenario 5: Unauthorized (No Auth)
**Goal**: Verify that no access is granted without credentials.

1.  **Method**: `GET`
2.  **URL**: `http://localhost:8080/api/user/profile`
3.  **Authorization**: `No Auth`
4.  **Expected Response**: `401 Unauthorized`
5.  **Screenshot Name**: `05-unauthorized.png`
