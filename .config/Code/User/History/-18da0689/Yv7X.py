import selenium
from selenium import webdriver

browser = webdriver.Firefox()
# browser.add_cookie({
#     'name': 'User-Agent', 'value': 'Mozilla/5.0 (X11; Linux x86_64; rv:131.0) Gecko/20100101 Firefox/131.0'
# })
browser.get('https://fr.tlscontact.com/visa/dz/dzAAE2fr/home')
b = browser.find_element(By.)
browser.close()