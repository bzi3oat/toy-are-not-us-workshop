*** Settings ***
Resource        custom-keywords.robot
Library         SeleniumLibrary
Test Setup      เปิดChromeเข้าwebsite
Test Teardown   ปิด Chrome

*** Test Cases ***
ซื้อ Scrabble
    # เปิดChromeเข้าwebsite
    ค้นหาและเลือกของ                                  16           Scrabble     over8        Neutral
    เช็ครายละเอียดของสินค้าและเพิ่มเข้า Shopping cart       Scrabble     19.95        Line man     1         In stock 
    เช็คสินค้าใน Shopping cart และทำการ checkout       Line man     628.62       20.00
    เลือกที่อยู่สำหรับจัดส่งสินค้า                           Supachai Uthawisan        991/1 ถนนพระราม 1 แขวงปทุมวัน เขตปทุมวัน       กรุงเทพมหานคร        กรุงเทพมหานคร        10330
    เลือกรูปแบบการชำระเงินเป็น Debit                     Scrabble      19.95      648.62
    แสดงรายละเอียดคำสั่งซื้อทั้งหมด                       Scrabble      19.95        Line man     1       20.00       648.62
    # ปิด Chrome