import json
import random
import uuid
from datetime import datetime, timedelta

# Arrays of possible values
current_workplaces = ["99x", "WSO2", "Synapsys", "CakeLabs", "Pearson", "GapStars", "InovaIT", "Virtusa", "CodeGen", "ADL"]
designations = ["Intern", "Associate Software Engineer", "Software Engineer", "Associate Tech Lead", "Tech Lead", "DevOps Engineer", "Support Engineer", "Frontend Engineer"]
specializations = ["Cloud Computing", "Artificial Intelligence", "AWS", "Azure", "GCP", "Blockchain", "Test Automation", "Mobile Development", "IoS Development"]
profile_summaries = ["Team Player", "Leadership", "Enthusiastic", "Self-motivated", "Reliable", "Responsible", "Hard working person"]
institutes = ["CIMA", "AAT", "IJSE", "IESL"]
titles = ["Member", "Coordinator", "Board Member"]
first_names = ["Kasun","John","Prabhath","Jane","Kumudu", "Michael", "Priyantha", "Emily", "Mahinda", "David", "Thiwanka","Sarah","Umesh","Robert","Ruwini","Emma","Upeksha","William", "Olivia", "Sathya"]
last_names = ["Fernando","Smith","Rajapaksha","Johnson","Perera","Williams","Kulasuriya","Brown","Pilapitiya","Jones","Gamage","Miller","Siriwardene","Davis","Yapa","Garcia", "Rodriguez", "Martinez", "Sumanasekara"]
mailProvider = ["gmail","hotmail","msn","yahoo"]

def generate_dummy_data():
    data = []
    for _ in range(25):
        firstName = random.choice(first_names)
        lastName = random.choice(last_names)
        currentWorkPlace = "MIT"
        specialization_count = random.randint(1, 3)
        random_specializations = random.sample(specializations, specialization_count)
        specialization_entries = [{"specialization": spec} for spec in random_specializations]
        professional_institute_count = random.randint(1, 3)
        professional_institute_entries = []
        for _ in range(professional_institute_count):
            institute_entry = {
                "name": random.choice(institutes),
                "title": random.choice(titles),
                "duration": {
                    "from": (datetime.now() - timedelta(days=random.randint(0, 730))).strftime("%d.%m.%Y"),
                    "to": (datetime.now() - timedelta(days=random.randint(1, 365))).strftime("%d.%m.%Y")
                }
            }
            professional_institute_entries.append(institute_entry)
        entry = {
            "id": str(uuid.uuid4()),
            "nic": str(random.randint(600001231, 999999999)) + "V",
            "fullName":  firstName + ' ' + lastName,
            "currentWorkplace": "MIT",
            "designation": random.choice(designations),
            "specialization": specialization_entries,
            "profileSummary": random.choice(profile_summaries),
            "contactDetails": {
                "personal": {
                    "mobile": str(random.randint(7112345678, 7999999999)),
                    "email": firstName + '@' + random.choice(mailProvider) + '.com'
                },
                "official": {
                    "mobile": str(random.randint(9212345678, 9999999999)),
                    "email":  firstName + '@' + currentWorkPlace + '.com'
                }
            },
            "previousWorkplaces": [
                {
                    "workplace": random.choice([w for w in current_workplaces if w != currentWorkPlace]),
                    "designations": [
                        {
                            "designation": random.choice(designations),
                            "from": (datetime.now() - timedelta(days=random.randint(365, 1825))).strftime("%d.%m.%Y"),
                            "to": (datetime.now() - timedelta(days=random.randint(1, 365))).strftime("%d.%m.%Y")
                        }
                    ]
                }
            ],
            "professionalInstitutes": professional_institute_entries,
        }
        data.append(entry)
    return data

dummy_data = generate_dummy_data()

# Writing the JSON objects to a file
with open("dummy_data.json", "w") as f:
    json.dump(dummy_data, f, indent=2)
