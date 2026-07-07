const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <div style="font-family:sans-serif;text-align:center;margin-top:50px;">
      <h1>ยินดีต้อนรับสู่ Web Server ของผม</h1>
      <p>นี่คือ Web Server เครื่องแรกที่สร้างขึ้นเอง</p>
      <hr>
      <h2>ข้อมูลนักศึกษา</h2>
      <p><strong>รหัสนักศึกษา:</strong> 69319011137</p>
      <p><strong>ชื่อ-นามสกุล:</strong> นางสาวจุรีรัตน์ มีชีพสม</p>
    </div>
  `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
