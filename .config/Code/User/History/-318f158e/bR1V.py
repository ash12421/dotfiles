from bs4 import BeautifulSoup
import requests

url = 'https://fr.tlscontact.com/visa/dz/dzAAE2fr/home'

site = requests.get(url)

print(site.content)
