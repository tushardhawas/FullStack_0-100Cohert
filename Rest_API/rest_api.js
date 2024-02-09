const express = require("express");
const app = express();
const fs = require("fs");
const data = require("./MOCK_DATA.json");
const ids = data.map((user) => ({ id: user.id }));

port = 3000;
app.use(express.json());

app.get("/api/users", (req, res) => {
  console.log(data[0].id);
  res.json(ids);
});

//how to use ssr(server side rendering)

app.get("/users", (req, res) => {
  console.log("hello");
  const html = `<ul>
                ${data.map((user) => `<li>${user.first_name}</li>`).join("")}
                </ul>`;
  res.set("Content-Type", "text/html");
  res.send(html);
});

app.post("/add_user/:id", (req, res) => {
  const { first_name, email } = req.body;
  data.push({ id, first_name, email });
  fs.writeFileSync("MOCK_DATA.json", JSON.stringify(data), (err, data) => {
    if (err) {
      res.send("errror is thrown");
    }
  });
  res.send("successful");
});

app.patch("/edit/:id",(req,res)=>{
    const userId = parseInt(req.params.id);
    const update = data.find(user => user.id ===userId);
    console.log(update );
    
    console.log(userId);
    const{first_name , email} = req.body;
    update.first_name = first_name;
    update.email = email;

    data.push(update);
    fs.writeFile("MOCK_DATA.json", JSON.stringify(data), (err, data) => {
        if(err){
        res.send("error thrwon")}else{

        res.send("Received request to edit user with ID: " + userId );}
    console.log(update );



})});
app.listen(3000, () => {
  console.log(`your server is running on port ${port}`);
});
