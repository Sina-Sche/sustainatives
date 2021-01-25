const { Router } = require("express");
const { getAllProjects } = require("../projects");

const router = Router();

router.get("/", async (request, response) => {
  try {
    const allProjects = await getAllProjects();
    response.json(allProjects);
  } catch (error) {
    console.error(error);
    response.status(500).send("Unexpected server error occured.");
  }
});

module.exports = router;
