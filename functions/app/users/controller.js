const {uid} = require("uid");
const {db} = require("../config");

const store = async (req, res) => {
  const userId = uid(16);
  try {
    await db.collection("user-data").doc(userId)
        .create({
          id: userId,
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          hight: req.body.hight,
          weight: req.body.weight,
          gender: req.body.gender,
          age: req.body.age,
        });
    return res.status(200).send({
      status: "success",
      data: {
        userId: userId,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};

module.exports = {
  store,
};
