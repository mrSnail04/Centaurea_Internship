import cv2
import pytesseract

pytesseract.pytesseract.tesseract_cmd = 'C:\\Program Files\\Tesseract-OCR\\tesseract.exe'

img = cv2.imread('1.jpg')
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
config = r'--oem 3 --psm 6'
# print(pytesseract.image_to_string(img, lang='rus', config=config))

data = pytesseract.image_to_data(img, config=config)

cropped1 = img[0:100, 20:320]
cropped2 = img[50:110, 320:950]
cropped3 = img[110:150, 100:180]
cropped4 = img[110:150, 190:350]
cropped5 = img[110:150, 450:500]
cropped6 = img[110:150, 550:700]
cropped7 = img[110:150, 750:850]
cropped8 = img[110:150, 870:970]
cropped9 = img[150:200, 30:240]
cropped10 = img[160:210, 310:970]
cropped11 = img[200:260, 50:300]
cropped12 = img[210:250, 300:970]
cropped13 = img[260:300, 50:300]
cropped14 = img[250:290, 300:980]
cropped15 = img[300:330, 50:300]
cropped16 = img[290:330, 300:980]
cropped17 = img[330:370, 50:320]
cropped18 = img[330:360, 320:980]
cropped19 = img[360:400, 50:300]
cropped20 = img[360:400, 300:980]
cropped21 = img[400:430, 50:300]
cropped22 = img[400:430, 300:980]
cropped23 = img[430:480, 50:300]
cropped24 = img[430:480, 300:980]

cv2.imshow('result', cropped23)
# print(pytesseract.image_to_string(cropped4, lang='rus', config=config))
#
# for i, el in enumerate(data.splitlines()):
#     if i==0:
#         continue
#
#     el = el.split()
#     try:
#         x, y, w, h = int(el[6]), int(el[7]), int(el[8]), int(el[9])
#         cv2.rectangle(img, (x, y), (w + x, h + y), (0, 0, 255), 1)
#     except IndexError:
#         print('элемент не найден')

# cv2.imshow('Result', img)
cv2.waitKey(0)

