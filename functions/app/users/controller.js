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

const readAll = async (req, res) =>{
  try {
    const query = db.collection("user-data");
    const response = [];

    await query.get().then((querSnapshot) =>{
      const docs = querSnapshot.docs;

      docs.map((doc) =>{
        const items = {
          id: doc.id,
          name: doc.data().name,
          email: doc.data().email,
          password: doc.data().password,
          hight: doc.data().hight,
          weight: doc.data().weight,
          gender: doc.data().gender,
          age: doc.data().age,
        };
        response.push(items);
      });
      return res.status(200).send({
        status: "success",
        users: response,
      });
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};

const readById = async (req, res) =>{
  try {
    const document = db.collection("user-data").doc(req.params.id);
    const user = await document.get();
    const response = user.data();

    return res.status(200).send({
      status: "success",
      userInfo: response,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};

const update = async (req, res) => {
  try {
    const document = db.collection("user-data").doc(req.params.id);
    await document.update({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      hight: req.body.hight,
      gender: req.body.gender,
      age: req.body.age,
    });
    return res.status(200).send({
      status: "success",
      data: {
        userId: req.params.id,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};

const destroy = async (req, res) => {
  try {
    const document = db.collection("user-data").doc(req.params.id);
    await document.delete();
    return res.status(200).send({
      status: "success",
      data: {
        userId: req.params.id,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};

module.exports = {
  store,
  readAll,
  readById,
  update,
  destroy,
};
