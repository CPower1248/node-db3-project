-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
-- SELECT 
--     p.ProductName, c.CategoryName
-- FROM product p
-- JOIN category c
--     ON p.categoryid = c.id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
-- SELECT
--     o.Id, s.CompanyName
-- FROM 'order' o
-- JOIN shipper s
--     ON o.shipvia = s.id
-- WHERE o.orderdate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
-- SELECT
--     p.ProductName, o.Quantity
-- FROM orderdetail o
-- JOIN product p
--     ON o.productid = p.id
-- WHERE orderid = 10251
-- ORDER BY p.productname

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
-- SELECT
--     o.id as 'Order Id', c.companyname as 'Customer Company Name', e.lastname as 'Employee Last Name'
-- FROM 'order' o
-- JOIN customer c
--     ON o.customerid = c.id
-- JOIN employee e
--     ON o.employeeid = e.id