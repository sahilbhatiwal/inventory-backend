const express = require("express");
const { appendFile } = require("fs");
const router = express.Router();

var data = [

    {
        name: "chetan",
        age: "hello"
    }
];

// get all chemical
router.get("/chemicals", (req, res) => {
  res.status(200).json({
    success: true,
    data: data,
  });
});

// get chemical by id
router.get("/chemical/:id", (req, res) => {
  const id = req.params.id;

  if (data.length > id) {
    return res.status(200).json({
      success: true,
      data: data[id],
    });
  }
  res.status(400).send({
      success:false,
      message: "invalid id"
  })
});

// router.get("/test",(req,res)=>{

//     const {name , age} = req.query;

//     if(!name || ! age)
//     {

//    return res.status(400).json({
//         sucess:false,
//         message: "please send name and age"
//     });
//     }
//     data.push({
//         name,age
//     });

//     res.status(200).json({
//         success:true,
//         message:"data added"
//     });

// })

router.post("/chemical", (req, res) => {

  const { name , age } = req.body;
  if(!name || ! age){
      return res.status(400).json({
          success: false,
          message: "please enter name and age"
      });
  }
  const chemical = { name, age};
  data.push(chemical);
  res.status(200).json({
      success: true,
      message:"chemical added successfully",
      data: chemical
  })
});

router.put("/chemical/:id", (req, res) => {
  const { name, age } = req.body;
  const id = req.params.id;

  if(id>data.length)
  {
   return res.status(400).send({
      success: false,
      message: "invalid id",
    });
  }

  if (!name || !age) {
    return res.status(400).json({
      success: false,
      message: "please enter name and age",
    });
  }

  const chemical = { name, age };
  data [id].age = chemical.age;
  res.status(200).json({
    success: true,
    message: "chemical added successfully",
    data: chemical,
  });
});

router.delete("/chemical", (req, res) => {
  res.send("chemical delete routes");
});

module.exports = router;
