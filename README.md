BANK APPLICATION API



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Configuration](#configuration)
- [License](#license)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone <https://github.com/IjeomaAnyanwu/bank-api>

2. Navigate to the repository
	//cd your-application-name


3. install dependencies
	// npm install

4. Create a .env file in the root directory and configure your environment variables (if required). You can use the provided .env.example as a template.

5. start the server
	// npm run dev


USAGE



API Routes
POST /account: Create a new bank account.
Request body should contain: name, dob, accountType, and initialBalance.
GET /account/:accountNumber: Resolve a bank account by account number.
GET /account/get/all: Fetch all bank accounts



