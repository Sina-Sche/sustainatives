const { collection } = require("./database");

async function getAllProjects() {
  const result = await collection("projects").find({}).toArray();
  return result;
}

exports.getAllProjects = getAllProjects;
