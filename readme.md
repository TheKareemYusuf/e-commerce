## **Part 1: Understanding the problem and presenting how to solve it**

### **Problem statement:** 
How might we design an e-commerce platform that efficiently manages a large volume of data(products, users and transactions), ensure it is responsive and fast with a secure payment gateway and real-time features like live search and stock updates

### **Assumptions:** 
* A mid-sized e-commerce platform should be able to 
 handle between `200,000` active monthly users 
* Have about `100,000` product 
* Handle `30` searches per user per month including spikes 
* Maximum storage required for each product (images and description): `10MB`


### **Functional requirement:**
Users should be able to 
* Create account
* Sellers should be able to onboard a product 
* Search for product 
* Get product recommendations 
* View the details of a product 
* Add product to cart
* Place order 
* Check order status 
* Write and view product reviews  

Sellers should be able to 
* Create account 
* Onboard a product 
* Manage inventory 
* View sales and product analytics
* Respond to reviews on products 

### **Non-functional requirement** 
* Intuitive UI/UX design for ease of use.
* Consistent user experience across devices and browsers 
* Ensure accuracy and consistency of data over its lifecycle in order placement, order status and payments
* Low latency in services e.g. search and recommendation 
* Handle traffic spikes (e.g., during promotions or sales events).

### **Capacity estimation**

Number of monthly active users: `200,000 `
Number of user search per month: `30`
= `200,000 * 30` search/month 
= `6,000,000/(30*24*60)`
= `138` searches/minute

Product Storage:
Number of total product: `100,000`
Storage per product: `10MB` 
Total product storage: `100,000 * 10MB`
= 1 TB 

Total platform storage (including transaction data, user data, etc.) assuming x 2 of product storage = 2 TB.

### **Database**
* SQL Databases e.g PostgreSQL for storing structured user data.: User, Address etc.
* NoSQL Databases e.g MongoDB for flexible, scalable storage: Products, Reviews, Orders etc.
* Caching e.g Redis for caching frequent read operations like product listings, user sessions, search and recommendations results to reduce load on primary databases.

### **Platform Architecture:**
The platform will follow a microservices architecture to ensure modularity and scalability. Each service will handle a specific domain to allow horizontal scaling and improved maintainability.
Key services include
* User service: Manages user accounts, profiles, and authentication
* Product service: Manages product catalogs, product listings, and other products metadata
* Search service: Real-time search functionality to handle fast, scalable, full-text search over a large dataset of products. Redis will be used to store frequent search queries and responses for faster lookup.
* Recommendation Service: Personalized product recommendations based on users’ search and purchase behavior. Pre-computed suggestions will be stored in Redis for fast retrieval
* Cart service: Handles adding/removing items from the shopping cart and saving carts for returning users and is optimized for real-time inventory updates (e.g., preventing checkout if stock is low).
* Order service: Manages order creation, payment, and order tracking.
* Payment service: Integrates with secure payment gateways (e.g., Paystack, Flutterwave, Monnify)
* Inventory service (including stock updates): Tracks real-time product stock levels.
* Notification service: Manages user notifications via in-app, email and SMS for order updates, promotional campaigns, etc.


![diagram-export-10-23-2024-10_27_09-PM](https://res.cloudinary.com/dzodph4o8/image/upload/v1729721482/diagram-export-10-23-2024-10_27_09-PM_tdb1pl.png)

### **Scaling and Performance:**
* Horizontal Scaling: The platform will leverage containerization (using Docker and Kubernetes) to enable horizontal scaling of services based on traffic. Services can auto-scale during peak times (e.g., sales events like flash sales).

* Load Balancers: The platform will use load balancers (e.g., NGINX or AWS ELB) to distribute incoming requests across multiple servers for improved performance and reliability.

* CDN: Use Cloudflare or AWS CloudFront to serve static assets (product images, CSS, JS) from servers closer to the end users, reducing latency and improving load times.

* Database Replication: The platform will replicate database using primary-replica (also known as master-slave) architecture to improve read performance and ensure data availability.


## **Part 2: E-Commerce Project**

This project consists of a Next.js frontend and an Express.js/NodeJs backend for an e-commerce application.

### **Expected Features**
* Product search 
* Details view of a single product

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following environment variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the backend server:
   ```
   npm start
   ```

   The backend server should now be running on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend/e-commerce
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file in the frontend directory and add the following environment variable:
   ```
   NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api/v1 [for local environment]
   ```

4. Start the frontend development server:
   ```
   npm run dev
   ```

   The frontend application should now be running on `http://localhost:3000`.

## Project Structure

- `backend/`: Contains the Express.js backend code
- `frontend/e-commerce/`: Contains the Next.js frontend code

## Available Scripts

In the frontend directory, you can run:

- `npm run dev`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm start`: Runs the built app in production mode
- `npm run lint`: Runs the linter

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [Express.js Documentation](https://expressjs.com/)

## Deployment

For deployment instructions, please refer to the documentation of your preferred hosting platform.

