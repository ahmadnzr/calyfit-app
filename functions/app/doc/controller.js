const getDoc = async (req, res) =>{
  return await res.status(200).sendFile(__dirname + "/index.html");
};

module.exports = {getDoc};
