const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(80, "0.0.0.0", () => {
    console.log('서버 시작했어용 >_<');
});