# 🎯 Events Data Management

## Problem: Workshop & Hackathon Pages Showing "No Content"

If the workshop or hackathon pages are blank or showing "Select a workshop/hackathon to view details" with no items in the list, it means the database is empty.

---

## ✅ Solution: Seed the Database

### **Method 1: Using PowerShell (Windows)**

```powershell
Invoke-WebRequest -Uri http://localhost:5000/api/events/seed -Method POST -UseBasicParsing
```

### **Method 2: Using Browser**

Simply visit in your browser:
```
http://localhost:5000/api/events/seed
```
(Note: This will use GET, but the endpoint should work with POST)

### **Method 3: Using Postman**

1. Open Postman
2. Create a new POST request
3. URL: `http://localhost:5000/api/events/seed`
4. Click "Send"

---

## 📊 What Gets Seeded

### **Workshops (2 items):**
1. **UI/UX Master** - Offline, April 10, 2026
2. **MERN Hack-Workshop** - Online, May 15-18, 2026

### **Hackathons (3 items):**
1. **Global UI/UX Design Hackathon** - Online, July 20-22, 2026
2. **Full-Stack Innovation Hack** - Offline, August 12-15, 2026
3. **AI-Powered Product Sprint** - Online, September 05, 2026

---

## 🔍 Verify Data

### Check if workshops exist:
```
GET http://localhost:5000/api/events?type=workshop
```

### Check if hackathons exist:
```
GET http://localhost:5000/api/events?type=hackathon
```

### Check all events:
```
GET http://localhost:5000/api/events
```

---

## 🚨 Important Notes

1. **Seeding clears existing data** - The seed endpoint deletes all existing workshops and hackathons before inserting new ones.

2. **Run seed after database reset** - If you ever reset your MongoDB database, you'll need to run the seed command again.

3. **Images must exist** - The seed data references images in `/public/images/`:
   - `Workshop-1.jpg`
   - `Workshop-2.jpg`
   - `Hackathon-1.jpg`
   - `Hackathon-2.jpg`
   - `Hackathon-3.jpg`

4. **Frontend will auto-fetch** - Once seeded, the workshop and hackathon pages will automatically fetch and display the data.

---

## 🛠️ Troubleshooting

### Pages still empty after seeding?

1. **Check backend is running:**
   ```powershell
   # Should see workers running
   npm run start:cluster
   ```

2. **Check MongoDB connection:**
   - Look for "MongoDB Connected" in backend logs
   - Verify MONGO_URL in `.env` is correct

3. **Check browser console:**
   - Open DevTools (F12)
   - Look for network errors or CORS issues

4. **Verify API response:**
   - Visit `http://localhost:5000/api/events?type=workshop` in browser
   - Should see JSON array with 2 workshops

---

## 📝 Adding New Events

To add new workshops or hackathons:

1. **Edit the seed data** in `backend/routes/events.js`
2. **Re-run the seed command**
3. **Refresh the frontend pages**

---

## ✅ Quick Fix Checklist

- [ ] Backend server is running
- [ ] MongoDB is connected
- [ ] Seed endpoint called successfully
- [ ] API returns data when visited directly
- [ ] Frontend pages refreshed
- [ ] Browser console shows no errors

---

**Last Updated:** 2026-01-13
