import Replicate from "replicate";
import fetch from "node-fetch";
import express from "express";
import multer from "multer";
import fs from "fs";
import bodyParser from "body-parser";
globalThis.fetch = fetch;

const app = express();
const port = process.env.PORT || 3000;
const upload = multer({ dest: "uploads/" });

// Serve static files from the "public" directory
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Render the index.html file on the root URL
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post('/results', upload.single('image'), async (req, res) => {
  const replicate = new Replicate({
   auth: process.env.REPLICATE_API_TOKEN,
  })
  const model = "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf";
  const input = {
    prompt: req.body.prompt,
    image: fs.readFileSync(req.file.path),
  };
  const output = await replicate.run(model, { input });

  res.send(`<img src="${output[0]}"">`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
