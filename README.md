
This repository implements a small agribusiness marketplace backend (Node/Express + MySQL) and a React/Vite frontend. Users register/login by `number` and `role`. Sellers (users stored in a role-specific DB table) can add products with images; products are stored in the `products` table and linked to the seller's `number`.

**Business Logic**
- **User model by role**: The `role` submitted at signup/login maps to a DB table with the same name (for example `seller`, `buyer`, etc.). The server queries the role table directly.
- **Authentication**: Lightweight password-based login using `bcrypt` hashing. No JWT/session token is implemented in current code — responses return `number` and `role` on successful login.
- **Product ownership**: Products include a `number` field linking the product to the user who added it. Images are uploaded and stored in the `image/` folder; the server exposes an `/img` route to download stored images.

**Functionality (what the server provides)**
- Sign up new users by `number` and `role` with hashed password.
- Log in existing users via `number`, `role`, and `password`.
- Read user info and update user profile data.
- Sellers (users) can add products with a single image file, list their own products, and remove products by id.
- Public endpoint to list all products.

API Endpoints
-------------
Base server: `http://localhost:3000`

- **Download image**: `GET /img?name={filename}`
  - Description: Download an uploaded product image file from `./image/{name}`.
  - Query: `name` = stored filename (string)
  - Response: file download

User routes (mounted at `/user`)

- **POST /user/signup**
  - Description: Create a new user record in the DB table named by `role`.
  - Body (JSON):
    - `number` (string|number)
    - `role` (string) — stored table name (lowercased)
    - `password` (string)
  - Success response (JSON): `{ "message": "login", "number": <number>, "role": "<role>" }`
  - Error responses: `{ "message": "user alrady exist" }`, `{ "message": "404" }`

- **POST /user/login**
  - Description: Authenticate a user by `number`, `role`, and `password`.
  - Body (JSON):
    - `number`, `role`, `password`
  - Success response: `{ "message": "login", "number": <number>, "role": "<role>" }`
  - Failure responses: `{ "message": "somthing wrong" }`, `{ "message": "first signup" }`, `{ "message": "404" }`

- **GET /user/info**
  - Description: Read user profile by `number` and `role`.
  - Query params: `id` (the user's `number`), `role` (lowercase)
  - Success response: `{ "message": "true", "data": { number, name, role, email, address } }`
  - Not found / error: `{ "message": "somthing wrong plese try agin" }` or `{ "message": "404" }`

- **POST /user/updinfo**
  - Description: Update user profile fields (name, address, email) for a given `number` and `role`.
  - Body (JSON): `number`, `email`, `name`, `address`, `role`
  - Response: `{ "message": "true" }` on success, or `{ "message": "Internal server error" }` on DB error.

- **GET /user/product**
  - Description: List products owned by a specific user number.
  - Query params: `id` (user `number`)
  - Response: `{ "message": "true", "data": [ ...products ] }`

Product routes (mounted at `/product`)

- **POST /product/add**
  - Description: Add a product with a single image upload.
  - Content type: `multipart/form-data`
  - Form fields:
    - `file` — file upload (single file) — middleware saves file and sets `req.file` (has `path` and `filename`)
    - `title` (string)
    - `price` (number)
    - `code` (string)
    - `catagory` (string)
    - `number` (owner user number)
  - Success response: `{ "message": "Accepted" }`

- **DELETE /product/remove**
  - Description: Remove a product by id.
  - Query params: `id` (product id)
  - Response: `{ "message": "true" }`

- **GET /product/show**
  - Description: Return all products.
  - Response: `{ "message": "true", "data": [ ...products ] }`

Database & security notes
-------------------------
- The code constructs SQL queries with string interpolation in several places (for example `DELETE FROM products WHERE id=${id}` and dynamic table names using `role`). This pattern is vulnerable to SQL injection if inputs are not validated or sanitized. Consider using parameterized queries for all user-supplied values and validating `role` against an allowed list.
- Passwords are hashed with `bcrypt` on signup — good. There is no session or token issued on login; add sessions or JWTs for production.

How to run (development)
------------------------
Open two terminals (server and client) and run:

```powershell
# server
cd server
npm install
node index.js

# client (if you want to run the React frontend)
cd ../client
npm install
npm run dev
```

Files of interest
-----------------
- Server entry: `server/index.js`, `server/app.js`
- Routes: `server/routers/user.route.js`, `server/routers/product.route.js`
- Controllers: `server/Controllers/user/*`, `server/Controllers/products/*`

Next steps / improvements
------------------------
- Add input validation and use parameterized SQL queries to remove SQL-injection risk.
- Implement session management or JWT authentication and protect product/write endpoints.
- Add better error handling and consistent response formats.
- Harden file upload (validate file types, limit size) and store images with unique names.

If you want, I can: add example `curl` commands for each endpoint, harden the SQL queries, or create Postman collection.

Example requests (curl)
----------------------
Replace `localhost:3000` with your server host if different.

- Signup (create user):

```powershell
curl -X POST http://localhost:3000/user/signup \
  -H "Content-Type: application/json" \
  -d '{"number":"0123456789","role":"seller","password":"MySecretPass"}'
```

- Login:

```powershell
curl -X POST http://localhost:3000/user/login \
  -H "Content-Type: application/json" \
  -d '{"number":"0123456789","role":"seller","password":"MySecretPass"}'
```

- Get user info:

```powershell
curl "http://localhost:3000/user/info?id=0123456789&role=seller"
```

- Update user info:

```powershell
curl -X POST http://localhost:3000/user/updinfo \
  -H "Content-Type: application/json" \
  -d '{"number":"0123456789","role":"seller","name":"John Doe","email":"john@example.com","address":"Village Road"}'
```

- List user's products:

```powershell
curl "http://localhost:3000/user/product?id=0123456789"
```

- Add product (multipart/form-data with image):

```powershell
curl -X POST http://localhost:3000/product/add \
  -F "file=@./path/to/image.jpg" \
  -F "title=Fresh Mango" \
  -F "price=12.50" \
  -F "code=MNG123" \
  -F "catagory=fruit" \
  -F "number=0123456789"
```

- Delete product (by id):

```powershell
curl -X DELETE "http://localhost:3000/product/remove?id=42"
```

- List all products:

```powershell
curl "http://localhost:3000/product/show"
```

Postman collection
------------------
I added a small Postman collection file at `postman/agribusinesses.postman_collection.json` with example requests for the endpoints above. You can import it into Postman or compatible tools.
