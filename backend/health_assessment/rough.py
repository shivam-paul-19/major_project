# from flask import Flask, request, jsonify
import pickle
import pandas as pd

# app = Flask(__name__)

with open('Heart_health_module/heart_disease_predictor.pkl', 'rb') as file:
    heart_model = pickle.load(file)

with open('Metabolism_module/metabolic_syndrome_predictor.pkl', 'rb') as file:
    metabolism_model = pickle.load(file)

with open('Sleep_quality_module/sleep_disorder_predictor.pkl', 'rb') as file:
    sleep_model = pickle.load(file)

# backend\Sleep_quality_module\sleep_disorder_predictor.pkl

def makeDF(data):
    '''
    Takes raw Json data and converts it into a Pandas Dataframe
    parameters:
        data: raw json data
    returns:
        df: pandas dataframe
    '''
    df = pd.DataFrame([dict(data)])
    return df

def getPrediction(data, model):
    '''
    Takes raw data and make prediction for respective models
    paramaters:
        data: raw json data
        model: prediction model
    returns:
        pred: prediction done by model as output value 
    '''
    df = makeDF(data)   # converts into pandas dataframe
    pred = model.predict(df)
    return pred[0]

# @app.route("/predict", methods=["POST"])
# def post():
#     if request.is_json:
#         data = request.get_json()
#         heart = getPrediction(data, model=heart_model)
#         return jsonify({
#             "heart": float(heart)
#         }), 200
#     else:
#         return jsonify("wrong Data")



test_instance = pd.DataFrame([{
  "BMI": 19.2,
  "Smoking": "No",
  "AlcoholDrinking": "No",
  "Stroke": "No",
  "PhysicalHealth": 7,
  "MentalHealth": 2,
  "DiffWalking": "No",
  "Sex": "Male",
  "AgeCategory": "18-24",
  "Race": "Asian",
  "Diabetic": "No",
  "PhysicalActivity": "Yes",
  "GenHealth": "Good",
  "SleepTime": 6,
  "Asthma": "Yes",
  "KidneyDisease": "No",
  "SkinCancer": "No"
}])

# List of columns exactly as per your latest screenshot
cols = ['Age', 'Sex', 'Race', 'BMI', 'Albuminuria', 'UrAlbCr', 
        'UricAcidCategory', 'HDLCategory', 'TrigCategory', 'BloodSugarCategory']

# Instance for 0 (Low Risk)
low_risk = pd.DataFrame([[22, 'Male', 'White', 23.3, 0, 3.88, 'Normal', 'Normal', 'Normal', 'Non-Diabetic']], columns=cols)

# Instance for 1 (High Risk)
high_risk = pd.DataFrame([[60, 'Male', 'White', 27.5, 0, 12.82, 'Normal', 'Low', 'High', 'Non-Diabetic']], columns=cols)

cols = ['Gender', 'Age', 'Occupation', 'Sleep Duration', 'Quality of Sleep', 
        'Physical Activity Level', 'Stress Level', 'BMI Category', 
        'Blood Pressure', 'Heart Rate', 'Daily Steps']

# Data collection
data = [
    ['Male', 32, 'Doctor', 7.5, 8, 60, 3, 'Normal', '120/80', 70, 8000],      # Healthy
    ['Female', 42, 'Teacher', 3, 6, 30, 8, 'Overweight', '130/85', 75, 3000], # Insomnia
    ['Female', 59, 'Nurse', 8.1, 9, 75, 3, 'Overweight', '140/95', 68, 7000] # Sleep Apnea
]

sleep_test_df = pd.DataFrame(data, columns=cols)

print(heart_model.predict(test_instance))

"""
## 🧑 Personal Details (all required)

* Age (number -> 18-100)
* Gender (drop down -> Male/Female)
* Race (drop down -> White, Black, Asian, Hispanic, "American Indian/Alaskan Native", MexAmerican)
* Occupation (Drop down -> Teacher, Software Engineer, Scientist, Salesperson, Nurse, Manager, Lawyer, Engineer, Doctor, Accountant, Student, other)

## 📏 Body & Basic Measurements (all required)

* Height in cm (number -> 100 to 200)
* Weight in kg (number -> 30 to 150)
* systolic Blood Pressure in mmHg (number -> 90 to 200)
* diastolic Blood Pressure in mmHg (number -> 60 to 130)
* Heart Rate in bpm (number -> 40 to 200)

## 🛌 Sleep & Daily Routine (all required)

* Sleep Duration in hrs (number -> 0 to 24)
* Quality of Sleep on a scale of 1 (very poor) to 10 (excellent) (number -> 1 to 10)
* Daily Steps (number -> 0 to 50,000)
* Physical Activity (dropdown -> Yes/No)
* Physical Activity duration (min/day) (number -> 0 to 300)
    # Note: disable this if the "physical activity feild is selected as "No", enable this only when that is being "Yes"

## 🚬 Habits & Lifestyle Choices (all required)

* Smoking (dropdown -> Yes/No)
* AlcoholDrinking (dropdown -> Yes/No)

## 🧠 Mental & Physical Well-being (all required)

* PhysicalHealth (number -> 1 to 30)
* MentalHealth (number -> 1 to 30)
* Stress Level on scale of 1 (no stress) to 10 (extreme stress)
* GenHealth (dropdown -> ’Excellent’, ’Very good’, ’Good’ ,’Fair’ or ’Poor’)
* DiffWalking -> (Dropdown -> Yes/No)

## 🧬 Past Diseases / Health Conditions (all required)

[All radio button]
* Stroke
* Diabetic
* Asthma
* KidneyDisease
* SkinCancer

## 🧪 Clinical & Lab-related Indicators (optional)

* Albuminuria (dropdown -> Yes/No)
* Urine Albumin–Creatinine Ratio in mg/g (number -> 0 to 3000)
* UricAcidCategory (Dropdown -> Normal, high)
* Good cholestrol (Dropdown -> Normal, low)
* TrigCategory (Dropdown -> Normal, high)
"""