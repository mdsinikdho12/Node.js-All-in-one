const express = require("express");

const app = express();
app.use(express.json());

let users = [
  {
    id: 1,
    name: "sinikdho",
    email: "sinikdho2gmail.com",
  },
];

// Get Single user
app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  let user;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      user = users[i];
      break;
    }
  }

  res.json({
    status: true,
    user,
  });
});

// get all user
app.get("/user", (req, res) => {
  res.json({
    status: true,
    users,
  });
  console.log("hello DSFDF world!");
});

// User Create
app.post("/user", (req, res) => {
  const { name, email } = req.body;
  const id = users.length + 1;
  let newUser = {
    id,
    name,
    email,
  };

  users.push(newUser);

  res.json({
    massage: "User is created",
    users,
  });
});

app.patch("/user/:id", (req, res) => {
  const { id } = req.params;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      users[i].email = req.body.email;
    }
  }
  res.json({
    status: true,
    users,
  });
});

// delete user
app.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);

  res.json({
    status: true,
    users,
  });
});

app.listen(8000, () => {
  console.log(`server running on http://localhost:8000/ `);
});
