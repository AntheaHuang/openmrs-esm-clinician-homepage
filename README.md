
# OpenMRS Clinician Homepage

This repository is based on https://github.com/openmrs/openmrs-esm-template-app, for self-learning only. 

This page is aimed at collecting important clinician info and status and displaying them in one single page. 

Relevant homepage and patient management page are needed. See below for detailed steps.

## Running this code

1. Get the home-page (git clone) from: https://github.com/openmrs/openmrs-esm-home
2. Inside the home repo, do:
   a. git checkout fb3c1ca
   b. yarn
   c. yarn start --sources 'packages/esm-home-app' --port 8085
3. Open the patient-management repo (source: https://github.com/AntheaHuang/openmrs-esm-patient-management)
4. Inside the patient-management repo, do:
   a. yarn
   b. yarn start --sources 'packages/esm-appointments-app' --sources 'packages/esm-service-queues-app' --port 8082
5. Navigate to the {} button, and replace the url for esm-home-app with:http://localhost:8087/openmrs-esm-home-app.js.
6. Open the clinician-homepage repo (source: https://github.com/AntheaHuang/openmrs-esm-clinician-homepage)
7. Inside the clinician-homepage repo terminal, do:
   a. yarn
   b. yarn start
8.On the localhost, navigate to http://localhost:8080/openmrs/spa/clinician-homepage.
9. After clicking the {} button:
   a. replace the url for esm-home-app with: http://localhost:8087/openmrs-esm-home-app.js ,
   b. replace the url for appointment with: http://localhost:8083/openmrs-esm-appointments-app.js ,
   c. replace the url for service-queue with: http://localhost:8084/openmrs-esm-service-queues-app.js
   

## Final Effects:
<img width="844" height="505" alt="Screenshot 2025-08-06 at 11 14 59 PM" src="https://github.com/user-attachments/assets/c97dfdca-cf08-4d54-b456-9334726f583c" />

<img width="842" height="506" alt="Screenshot 2025-08-06 at 11 15 17 PM" src="https://github.com/user-attachments/assets/d8e4113d-fe13-444f-98af-e87a47cf16bf" />

<img width="1512" height="906" alt="demo-screenshot" src="https://github.com/user-attachments/assets/05580313-9987-4d30-8f10-33fa133f25b2" />
