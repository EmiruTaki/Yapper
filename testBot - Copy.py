import urllib
import urllib2
from BeautifulSoup import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
from selenium.webdriver.chrome.options import Options
import mysql.connector
from time import gmtime, strftime
acer = ""
soup = ""
link = ""
link2 = ""
disconnect = ""
messageBar = ""
lastCharacterBar = ""
lastUsernameBar = ""
barIndex = ""
barIndex2 = ""
#connect database
con = mysql.connector.connect(host="sql9.freemysqlhosting.net",user="sql9204548",password="PASSWORD",database="sql9204548")
print "Database connected."
cursor = con.cursor()
cursor.execute("use sql9204548")
#open browser
chromePath = r"C:\chromedriver.exe"
browser = webdriver.Chrome(chromePath)
print "Opening browser and loading page..."
browser.get("http://www.sofurry.com")
time.sleep(5)
username = browser.find_element_by_css_selector('#LoginForm_sfLoginUsername')
print "logging in"
username.send_keys('Yapper')
password = browser.find_element_by_css_selector('#LoginForm_sfLoginPassword')
password.send_keys('PASSWORD')#PASSWORD HERE
login = browser.find_element_by_css_selector('#yt0')
login.click()
print "loading chat page..."
browser.get("http://www.sofurry.com/chat")
time.sleep(5)
uno_object = open("C:\\Users\\Jeff\\Desktop\\UNO.js", "r")
file_object = open("C:\\Users\\Jeff\\Desktop\\testFinal - Copy.js", "r")
time.sleep(2)
unor = uno_object.read()
ente = file_object.read()
time.sleep(2)
browser.execute_script(unor + ente)
print "Javascript executed"
while True:
    try:
        if browser.execute_script("return scriptActive") == "yes":
            pass
    except:
        browser.execute_script(unor + ente)
    try:
        link = browser.execute_script("return link")
        disconnect = browser.execute_script("return disconnected")
        barIndex = browser.execute_script("return lastReadIndexBar")
    except Exception as e:
        print(e)
        pass
    if barIndex != barIndex2:
        barIndex2 = barIndex
        messageBar = browser.execute_script("return messageBar")
        messageBar = str(messageBar)
        messageBar = messageBar.replace("\\", "\\\\")
        lastCharacterBar = browser.execute_script("return lastCharacterBar")
        lastCharacterBar = str(lastCharacterBar)
        lastUsernameBar = browser.execute_script("return lastUsernameBar")
        lastUsernameBar = str(lastUsernameBar)
        userIdBar = browser.execute_script("return getUserIdFromName(\"" + lastUsernameBar + "\")")
        userIdBar = str(userIdBar)
        try:
            cursor.execute("insert into chatlogs values(0, 2, current_timestamp, \"" + userIdBar + "\", \"" + lastUsernameBar + "\", \"" + lastCharacterBar + "\", \"" + messageBar + "\")")
            cursor.execute("commit")
            browser.execute_script("loggedBar = true")
            print lastUsernameBar
        except Exception as e:
            print (e)
            pass
    if disconnect == "true": #check if javascript received DC signal
        try:
            print "Disconnect detected: Reloading..."
            browser.get("http://www.sofurry.com/chat")
            time.sleep(2)
            print "Accepting alert"
            alert = browser.switch_to_alert()
            time.sleep(2)
            alert.accept()
            print "Waiting for reload..."
            time.sleep(20)
            browser.execute_script(unor + ente)
            browser.execute_script("loggedBar = true")
            print "Javascript executed: ready for next reset"
            time.sleep(5)
        except Exception as e:
            print(e)
            pass
    if link != link2: #check for change
        link2 = link
        print "link detected"
        try:
            soup = BeautifulSoup(urllib2.urlopen(link))
            acer = soup.title.string
            acer = acer.replace("\n", " ")
            browser.execute_script("backend_sendmessage(0,0,activeRoom,0,\"" + acer + "\",false,botTextColor,false)")
            print acer
        except Exception as e:
            print(e)
            pass
    time.sleep(1)
