Studentenportal 2.0
===================

[![Build Status](https://secure.travis-ci.org/studentenportal/web.png?branch=master)](http://travis-ci.org/studentenportal/web)
[![Coverage Status](https://coveralls.io/repos/studentenportal/web/badge.png?branch=master)](https://coveralls.io/r/studentenportal/web)
[![Code Health](https://landscape.io/github/studentenportal/web/master/landscape.png)](https://landscape.io/github/studentenportal/web/master)

Dies ist ein re-launch des [HSR Studentenportals](http://studentenportal.ch).
Es hat das alte Portal im Frühling 2012 abgelöst und soll es in Sachen Ruhm und
Ehre weit überholen.

![f\*ck yeah!](http://s3.amazonaws.com/kym-assets/entries/icons/original/000/001/987/fyeah.jpg)

 * Live-Instanz: http://studentenportal.ch/
 * Travis Buildserver: http://travis-ci.org/studentenportal/web


Technologie
-----------

Das Studentenportal nutzt Python/Django.


Features
--------

 - Upload und Bewertung von Zusammenfassungen, alten Prüfungen etc
 - Events mit iCal Export
 - Faire Dozentenbewertungen
 - Unterrichtszitate
 - Flattr Integration
 - Deployment with ansible

Featurevorschläge sind willkommen! Aktuell geplante Features und Featurewünsche
können auf https://github.com/studentenportal/web/issues eingesehen und
erstellt werden.


Development
-----------

Requirements:

 - Python >= 2.7
 - PostgreSQL >= 9.1
 - PostgreSQL Contrib Pakete (Debian: `postgresql-contrib-9.1`)


Um die Entwicklungsumgebung einzurichten:

 1. Repository clonen
 2. Python Virtualenv erstellen und aktivieren
 3. `psql -d template1 -c 'CREATE EXTENSION citext;'`
 4. `createuser -e -P -d -E -s studentenportal` (Passwort "studentenportal")
 5. `createdb -e -O studentenportal -U studentenportal studentenportal`
 6. `pip install -r requirements/local.txt`
 7. `python manage.py syncdb`
 8. `python manage.py migrate`
 9. `python manage.py runserver`


Um die Tests auszuführen:

 1. `pip install -e .`
 2. `pip install -r requirements/testing.txt`
 3. `./test.sh`


Falls ein Datenbankfehler auftritt, weil das Schema sich geändert hat:

 1. `python manage.py syncdb`
 2. `python manage.py migrate`

Wenn du die Twitter Einbindung nutzen willst, musst du im Developer Center eine
App erstellen und folgende Umgebungsvariablen setzen:

 - `TWITTER_CONSUMER_KEY`
 - `TWITTER_CONSUMER_SECRET`
 - `TWITTER_ACCESS_KEY`
 - `TWITTER_ACCESS_SECRET`


Testdaten
---------

Testdaten können am einfachsten via django-admin
(`http://localhost:8000/admin`) angelegt werden.

Es gibt aber auch einige Files mit Testdaten in den
`fixtures` Verzeichnissen der Apps. Voraussetzung dafür sind zwei Benutzer mit den
Primärschlüsseln 1 und 2 (am besten mit `python manage.py createsuperuser`
erstellen).

 * Studiengänge: `python manage.py loaddata courses`
 * Events: `python manage.py loaddata events`

Bei anderen Daten (zB bei den Dozenten) kann man gleich mit echten Daten
arbeiten. Die Daten werden direkt von der HSR Website bezogen. Man braucht
dafür ein funktionierendes HSR Login.

 * Dozenten: `python manage.py fetch_lecturers --user=<hsr-username>`
 * Module: `python manage.py fetch_modules`


Fragen
------

Bei Fragen wende dich an me@lukasmartinelli.ch oder https://twitter.com/studportal_hsr.


Lizenz
------

Der Code wird unter der [AGPLv3](http://www.gnu.org/licenses/agpl-3.0.html)
(oder einer späteren Version der AGPL) veröffentlicht.
