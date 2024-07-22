import express from 'express';
import useRoute from './src/module/user/user.route'
const app = express();
app.use(express.json());


app.use('/users',useRoute);

app.get('/health',(_,res)=>{
return res.send("sistema operacional")
});



const server = app.listen(8080, () => {
    console.log("Server running!");
  });
  
export default server;