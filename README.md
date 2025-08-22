# 🌸 AromaLuxe - A Perfume Collection Wwebsite

A **Next.js 15** project where users can explore perfumes, view details, and contribute to the collection by adding their own preferred perfumes.  
Built with **NextAuth.js** for secure authentication and **MongoDB** for reliable data storage.
---

## 🔧 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/itzmun2811/next-js-project.git
   cd next-js-project.
   Install dependencies


 2. npm install
    # or
    yarn install
3. Create environment file
Add a .env.local file in the project root with the following values:

MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/
MONGODB_DB=perfumeCollectionData

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret_key
4. Run the development server
npm run dev
Open http://localhost:3000 in your browser.

# Route Summary
Route	            Method                  	Description
/	                 GET	             Home page with perfume highlights
/products	         GET	                  Displays all perfumes
/products/[id]	     GET	             View details of a single perfume
/add-product	     GET	              Form to add a new perfume (requires login)
/api/perfumes	     GET	                Get all perfumes
/api/perfumes/:id    GET	              Get a specific perfume
/api/perfumes	      POST	             Add a new perfume (with name, price,  
                                       description,image, user email)
/api/auth/[...nextauth]	GET/POST	      NextAuth authentication routes
/api/auth/session	     GET	             Get current logged-in user session