### **Problem statement:** 
How might we design an e-commerce platform that efficiently manages a large volume of data(products, users and transactions), ensure it is responsive and fast with a secure payment gateway and real-time features like live search and stock updates

### **Assumptions:** 
A mid-sized e-commerce platform should be able to 
 handle between `200,000` active monthly users 
Have about `100,000` product 


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
Intuitive UI/UX design for ease of use.
Consistent user experience across devices and browsers 
Ensure accuracy and consistency of data over its lifecycle in order placement, order status and payments
Low latency in services e.g. search and recommendation 

### **Capacity estimation**

Number of monthly active users: 200,000 
Each user search for 10 products a month 
= 200,000 * 10 search/month 
= 2,000,000/(30*24*60)
= 46 searches/minute

Total Product: 100,000
Assume 1 product requires 10MB storage (images and description)
Total product storage: 100,000 * 10MB 
= 1 TB 

Total platform storage required: x2 of total product = 2 TB 

### **Database **
SQL: User DB, Address etc.
NoSQL: Products, Reviews, Orders etc.

### **Services**
* User service
* Product service 
* Search service 
* Cart service 
* Order service 
* Payment service 
* Inventory service (including stock updates) 
* Notification service


![diagram-export-10-23-2024-10_27_09-PM](https://res.cloudinary.com/dzodph4o8/image/upload/v1729721482/diagram-export-10-23-2024-10_27_09-PM_tdb1pl.png)

