<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Api hotel bookings</h3>

<div align="center">

</div>

---

<p align="center"> API that serves data from hotel bookings.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)


## 🧐 About <a name = "about"></a>
API that serves data with entity relationships for hotel bookings. Made with Express, Sequelize and MYSQL. Project from GeeksHubs Academy like Full stack developer student.

## Design Database
<hr>
Entity-relationship diagram that was generated with MYSQL Workbench:
<br>

![diagram](../my-server/assets/reservas.png)
<br>


## 🏁 Getting Started <a name = "getting_started"></a>


<hr>

### Prerequisites

- [Node.js](https://nodejs.org/): ^12.0.0


<hr>

### Installing

Install packages npm:


```
npm install
```
## 🎈 Usage <a name="usage"></a>

Start the dev server with this command:

```
npm run dev
```

Run http://localhost:3000/ in your borwser to do the tests.
<br>

Start the production server with this command:

```
npm start
```



## 🎈 Endpoints <a name="usage"></a>

Use the endpoints to navigate for the differents types of data of the API

### Customers

|Method| Route                  | Description              |
| ---- | -------------------- |--------------------------|
| Get  | /customers           |Show customers            |
| Get  | /customers/id                  |show customers by id      |
| Get  | /customers/name/name           |Show customers by name    |
| Get  | /customers/lastname/lastname   |show customers by lastname|
| Get  | /customers/id_card/id_card     |Show customers by id card |
| Get  | /customers/phone/phone         |show customers by phone   |
| Get  | /customers/email/email         |Show customers by email   |

### Hotel

|GET   | Route               | Description              |
| ---- | -------------------- |--------------------------|
| Get  | /hotel               |Show hotel                |
| Get  | /hotel/id                  |show hotels by id         |
| Get  | /hotel/name/name           |Show hotels by name       |
| Get  | /hotel/location/location   |show hotels by location   |
| Get  | /hotel/city/city           |Show hotels by city       |

### Bookings

|GET  | Route            | Description              |
| ----| -------------------- |--------------------------|
| Get | /bookings            |Show bookings             |
| Get | /bookings/id                  |show bookings by id       |
| Get | /bookings/checkin/chekin      |Show bookings by chekings |
| Get | /bookings/checkout/checkout   |show bookingd by checkout |




## 🚀 Deployment <a name = "deployment"></a>

https://bookings-production-2f33.up.railway.app/

## ⛏️ Built Using <a name = "built_using"></a>

- [MYSQL](https://www.mysql.com/) - Database
- [Express](https://expressjs.com/) - Server Module
- [NodeJs](https://nodejs.org/en/) - JavaScript runtime environment
- [Sequelize](https://sequelize.org/) - ORM




