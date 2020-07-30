*** Settings ***
Library         SeleniumLibrary

*** Variables ***
${URL}       https://localhost:8080/search

*** Keywords ***
เปิดChromeเข้าwebsite
    Open Browser    ${URL}    Chrome
ปิด Chrome
    Close Browser
ค้นหาและเลือกของ
    [Arguments]        ${ID}        ${NAME}      ${AGE}       ${GENDER}
    Wait Until Page Contains	    Search Toy	
    Select From List By Value	    age	                ${AGE}
    Select From List By Value	    gender	            ${GENDER}
    Wait Until Page Contains	    ${NAME}
    Click Element	                ${ID}
เช็ครายละเอียดของสินค้าและเพิ่มเข้า Shopping cart
    [Arguments]        ${NAME}        ${PRICE}      ${SHIPPING}       ${QUANTITY}       ${STOCK}
    Wait Until Page Contains	    Quantity	
    Element Should Contain	        product_name	    ${NAME}
    Element Should Contain	        product_price	    ${PRICE}
    Element Should Contain	        shipping_method	    ${SHIPPING}
    Element Should Contain	        quantity	        ${QUANTITY}
    Element Should Contain	        stock	            ${STOCK}
    Click Button	                add_to_cart	
เช็คสินค้าใน Shopping cart และทำการ checkout
    [Arguments]        ${SHIPPING}       ${TOTAL}       ${SHIPPING_FEE}
    Wait Until Page Contains	    Shopping            Cart	
    Select From List By Value	    shipping_method	    ${SHIPPING}
    Element Should Contain	        total	            ${TOTAL}
    Element Should Contain	        shipping_fee	    ${SHIPPIN_FEE}
    Click Button	                checkout	
เลือกที่อยู่สำหรับจัดส่งสินค้า
    [Arguments]        ${FULL_NAME}       ${ADDRESS_1}       ${CITY}     ${PROVINCE}    ${POST_CODE}
    Wait Until Page Contains	    Shipping Address	
    Input Text	                    full_name	        ${FULL_NAME}
    Input Text	                    address_1	        ${ADDRESS_1} 
    Input Text	                    city	            ${CITY}
    Input Text	                    province	        ${PROVINCE}
    Input Text	                    post_code	        ${POST_CODE}
    Click Button	                deliver	
เลือกรูปแบบการชำระเงินเป็น Debit
    [Arguments]        ${NAME}       ${PRICE}       ${TOTAL}
    Wait Until Page Contains	    Payment Methods	
    Element Should Contain      	toy_name	        ${NAME}
    Element Should Contain	        price	             ${PRICE}
    Element Should Contain	        order_total	         ${TOTAL}
    Element Should Contain	        payment_methods_debit	    Debit
    Click Button	                payment_methods_debit	
    Click Button	                bank_tmb	
    Click Button	                place_your_order	
แสดงรายละเอียดคำสั่งซื้อทั้งหมด
    [Arguments]        ${NAME}       ${PRICE}       ${SHIPPING}     ${QUANTITY}     ${SHIPPING_FEE}     ${TOTAL}
    Wait Until Page Contains	    Thanks you	
    Element Should Be Visible	    order_id	
    Element Should Contain	        product_name	    ${NAME}
    Element Should Contain	        product_price	    ${PRICE}
    Element Should Contain	        shipping_method	    ${SHIPPING}
    Element Should Contain	        quantity	        ${QUANTITY}
    Element Should Contain	        shipping_fee	    ${SHIPPING_FEE}
    Element Should Contain	        total	            ${TOTAL}