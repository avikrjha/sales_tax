# 🛍️ Sales Tax Service Backend

## 📦 Project Overview

This project is a **Sales Tax Service** that allows users to **calculate tax and generate bills** securely.

It is built using:
- **Node.js** – Backend runtime
- **Express.js** – Web framework for building APIs

---
## ✨ Features

- 📄 Calculate and print itemized bills with tax  
- 🧾 Automatically applies basic sales tax and import duty  
- 📈 Simple and secure API to fetch calculated bills  

---

## 🚀 API Endpoints

### 🔹 Fetch Bill

**Endpoint:**

POST /api/v1/taxCalculate/fetch


**Request Body:**
```json
[
    "1 imported box of chocolates at 10.00",
    "1 imported bottle of perfume at 47.50"
]


{
  "code": 20,
  "msg": "Bill fetched successfully",
  "data": [
    "1 imported box of chocolates: 10.50",
    "1 imported bottle of perfume: 54.65",
    "Sales Taxes: 7.65",
    "Total: 65.15"
  ]
}



## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/avikrjha/sales_tax.git
   cd sales_tax.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in `.env` file:
   ```sh
   PORT =5000
   ```

4. Start the server:
   ```sh
   npm run dev
   ```


## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m "Add new feature"`
4. Push the changes: `git push origin feature-branch`
5. Open a pull request.

## License
This project is licensed under Avinash Jha.

---
🚀 Happy Coding! Let us know if you have any issues or suggestions.

