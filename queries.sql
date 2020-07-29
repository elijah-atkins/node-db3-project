-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT Product.ProductName,
       Category.CategoryName
  FROM Product
       JOIN
       Category ON Product.CategoryId = Category.id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT [order].id,
       Shipper.CompanyName
  FROM [order]
       JOIN
       Shipper ON [order].shipvia = shipper.id AND 
                  [order].OrderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT Product.ProductName,
       OrderDetail.Quantity
  FROM Product
       JOIN
       OrderDetail ON OrderDetail.ProductId = Product.id
 WHERE OrderDetail.OrderId = 10251;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT [order].id,
       Customer.CompanyName,
       Employee.LastName
  FROM [order]
       JOIN
       Customer ON [order].CustomerId = Customer.id
       JOIN
       Employee ON [order].EmployeeId = Employee.id;

--STRETCH
--   In [SQL Try Editor at W3Schools.com](https://www.w3schools.com/Sql/tryit.asp?filename=trysql_select_top):
--   Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 8 records.

--   Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.