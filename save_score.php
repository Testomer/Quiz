<?php
// إعداد اتصال قاعدة البيانات
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "quiz_db";

// إنشاء الاتصال
$conn = new mysqli($servername, $username, $password, $dbname);

// التحقق من الاتصال
if ($conn->connect_error) {
    die("فشل الاتصال بقاعدة البيانات: " . $conn->connect_error);
}

// استلام البيانات من JavaScript
$data = json_decode(file_get_contents("php://input"), true);
$score = $data['score'];

// إضافة النتيجة إلى قاعدة البيانات
$sql = "INSERT INTO scores (score, created_at) VALUES (?, NOW())";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $score);

if ($stmt->execute()) {
    echo "تم حفظ النتيجة بنجاح!";
} else {
    echo "حدث خطأ أثناء حفظ النتيجة: " . $conn->error;
}

// إغلاق الاتصال
$stmt->close();
$conn->close();
?>