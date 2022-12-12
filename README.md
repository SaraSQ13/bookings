<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Api hotel bookings</h3>

<div align="center">

</div>

---

<p align="center"> A mini API that serves data from hotel bookings.
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

A mini API that serves data with entity relationships for hotel bookings. Made with Express, Sequelize and MYSQL. Project from GeeksHubs Academy like Full stack developer student.

## Preview
<hr>
Entity-relationship diagram that was generated with MYSQL Workbench:
<br>

![diagram](../my-server/assets/reservas.png)
<br>


## 🏁 Getting Started <a name = "getting_started"></a>


<hr>

### Prerequisites

- [Node.js](https://nodejs.org/): ^12.0.0
- [NPM](https://npmjs.org/) or any other Node.js package manager.

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



## 🎈 Endpoints <a name="usage"></a>

Use the endpoints to navigate for the differents types of data of the API

|GET  | Customers            | Description              |
| ----| -------------------- |--------------------------|
| Get | /customers           |Show customers            |
| Get | /:id                 |show customers by id      |
| Get | /name/:name          |Show customers by name    |
| Get | /lastname/:lastname  |show customers by lastname|
| Get | /id_card/:id_card    |Show customers by id card |
| Get | /phone/:phone        |show customers by phone   |
| Get | /email/:email        |Show customers by email   |

|GET  | Hotels               | Description              |
| ----| -------------------- |--------------------------|
| Get | /hotel               |Show hotel                |
| Get | /:id                 |show hotels by id         |
| Get | /name/:name          |Show hotels by name       |
| Get | /location/:location  |show hotels by location   |
| Get | /city/:city          |Show hotels by city       |

|GET  | Bookings             | Description              |
| ----| -------------------- |--------------------------|
| Get | /bookings            |Show bookings             |
| Get | /:id                 |show bookings by id       |
| Get | /checkin/:chekin     |Show bookings by chekings |
| Get | /checkout/:checkout  |show bookingd by checkout |




## 🚀 Deployment <a name = "deployment"></a>

https://bookings-production-2f33.up.railway.app/

## ⛏️ Built Using <a name = "built_using"></a>

- [MYSQL](https://www.mysql.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Sequelize](https://sequelize.org/) - ORM




