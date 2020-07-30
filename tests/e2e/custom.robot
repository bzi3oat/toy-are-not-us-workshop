*** Settings ***
Resource        custom-keywords.robot
Library         SeleniumLibrary
Test Setup      เปิดChromeเข้าwebsite
# Test Teardown   ปิด Chrome

# *** Test Cases ***      PRODUCT_ID      PRODUCT_NAME         AGE        GENDER      PRICE       PRICE_IN_THAI       QUANTITY        SHIPPING        SHIPPING_FEE        STOCK
# ซื้อ Scrabble             16              Scrabble            over8       Neutral     19.95       628.62              1               Line man        20.00               In stock

*** Test Cases ***
ซื้อ Scrabble
    ค้นหาและเลือกของ                                  16           Scrabble     over8        Neutral
    # เช็ครายละเอียดของสินค้าและเพิ่มเข้า Shopping cart       Scrabble     19.95        Line man     1         In stock 
    # เช็คสินค้าใน Shopping cart และทำการ checkout       Line man     628.62       20.00
    # เลือกที่อยู่สำหรับจัดส่งสินค้า                           Supachai Uthawisan        991/1 ถนนพระราม 1 แขวงปทุมวัน เขตปทุมวัน       กรุงเทพมหานคร        กรุงเทพมหานคร        10330
    # เลือกรูปแบบการชำระเงินเป็น Debit                     Scrabble      19.95      648.62
    # แสดงรายละเอียดคำสั่งซื้อทั้งหมด                       Scrabble      19.95        Line man     1       20.00       648.62
    
