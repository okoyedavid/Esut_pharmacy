import Cors from "cors";

// Initialize the CORS middleware
const cors = Cors({
  methods: ["GET", "POST"],
  allowedHeaders: ["Authorization", "Content-Type"],
  origin: ["http://localhost:5173", "https://esut-pharmacy.vercel.app/"],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Run the CORS middleware
  await runMiddleware(req, res, cors);

  if (req.method === "GET") {
    const { reference } = req.query;
    console.log(req);

    // Ensure that reference is passed in the query
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
            Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`, // Access the key from environment variables
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
  } else {
    // If not GET request, return a Method Not Allowed error
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
