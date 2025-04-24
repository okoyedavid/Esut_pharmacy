import express from "express";
import cors from "cors"; // Import the cors package

const app = express();

// Enable CORS for all routes (you can specify specific domains in production)
app.use(cors()); // This allows all domains by default, adjust for production

const key = "sk_test_a73cca2b314f9903c9e4728109f3ffd97adca7af"; // Use your environment variable for the key

app.get("/verify_payment", async (req, res) => {
  const { reference } = req.query; // Extract the reference from the query string
  console.log(reference);
  if (!reference) {
    return res.status(400).json({ error: "Reference is required" });
  }

  try {
    // Make GET request to Paystack API for payment verification
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${key}`, // Pass the secret key as Authorization
        },
      }
    );

    // If the response is not OK, throw an error
    if (!response.ok) {
      throw new Error("Failed to verify transaction");
    }

    const data = await response.json(); // Parse JSON response

    // Return Paystack's response
    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Verification failed", message: error.message });
  }
});

const PORT = 5000; // Port for your backend
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
