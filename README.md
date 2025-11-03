# 🏥 Hospital Appointment Booking App

A full-stack web application that helps users book doctor appointments online.  
Built with the **MERN stack (MongoDB, Express.js, React.js, Node.js)**, this app provides an easy and efficient way for patients, doctors, and admins to manage appointments from one platform.

---

## 📖 Overview

The main idea of this project is to make it easy for **patients**, **doctors**, and **admins** to manage appointments seamlessly.

### 🔧 Features Overview

- **Frontend:** React.js + Tailwind CSS  
  - Includes **login** and **signup** pages where users register with name, email, and password.  
  - After logging in, users go to the **home page**.  
  - The homepage contains a banner and a section to find doctors by specialty (General Physician, Gynecologist, Dermatologist, Pediatrician, Neurologist, Gastroenterologist).  
  - Displays **top doctors** on the home page.  
  - Includes pages like **About**, **All Doctors**, and **Contact**.

- When users click on **All Doctors**, they can view doctors filtered by specialty.  
- Hovering over a doctor profile shows options like **My Profile**, **My Appointments**, and **Logout**.  
- In **My Profile**, users can **edit details** and **update their profile photo**.  
- In **My Appointments**, users can view their **booking history**, **cancel appointments**, and choose payment options (currently cash; online payments to be added later).

---

## 🧠 Tech Stack

**Frontend:**  
- React.js  
- Tailwind CSS  
- React-Toastify (for notifications)

**Backend:**  
- Node.js  
- Express.js  
- MongoDB (Mongoose)

**Authentication & Security:**  
- JWT (JSON Web Token) for login verification  
- Bcrypt.js for password encryption  

**File Handling & Image Upload:**  
- Multer and Cloudinary  

---

## 👥 Roles and Access

### 🧑‍🤝‍🧑 User
- Register and log in  
- Book and cancel appointments  
- View and update their profile  
- View doctor details  

### 👨‍⚕️ Doctor
- Access to a personalized dashboard  
- Manage their profile (degree, experience, address, fees, availability)  
- View total earnings, total patients, total appointments, and recent bookings  
- Cancel appointments if needed  

### 🧑‍💼 Admin
- Full control of the application  
- Add, edit, or delete doctor profiles  
- View all users, appointments, and doctor availability  
- Cancel any appointment  
- Access admin dashboard with total doctors, patients, and earnings  

---

## ⚙️ Installation and Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/hospital-appointment-booking-app.git

