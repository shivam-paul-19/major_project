from flask import Flask, request, jsonify
from flask_cors import CORS
from health_assessment.utils import healthPredictor
from disease_prediction.utils import DiseasePredictionOrchestrator
from drug_recommendation.utils import RecommedationOrchestrator
from chatbot.utils import answerGenerator

app = Flask(__name__)
CORS(app)

@app.route("/predict/health", methods=["POST"])
def predict():
    if request.is_json:
        data = request.get_json()
        output = healthPredictor.run(data)
        return jsonify({
            "heart": int(output["Heart"]),
            "sleep": int(output["Sleep"]),
            "metabolism": int(output["Metabolism"])
        }), 200
    else:
        return jsonify("wrong Data"), 400

@app.route("/predict/disease", methods=["POST"])
def predictDisease():
    if request.is_json:
        data = request.get_json()
        symptoms = data['sym']
        disPred = DiseasePredictionOrchestrator(symptomsStr=symptoms)
        pred = disPred.run()

        return jsonify(pred), 200
    else:
        return jsonify("wrong data"), 400

@app.route("/recommend", methods=["POST"])
def recommend():
    if request.is_json:
        data = request.get_json()
        drug = data['drug']
        recommendor = RecommedationOrchestrator(drug=drug)
        output = recommendor.run()
        return jsonify(output), 200
    else:
        return jsonify("wrong data"), 400
    
@app.route("/answer", methods=["POST"])
def answer():
    if request.is_json:
        data = request.get_json()
        prompt = data['prompt']
        response = answerGenerator(userPrompt=prompt)
        output = {
            "result": response
        }
        return jsonify(output), 200
    else:
        return jsonify("wrong data"), 400

# routes to test the server only
@app.route("/test", methods=["GET"])
def test():
    return "All ok!"

@app.route("/testpost", methods=["POST"])
def testpost():
    if request.is_json:
        data = request.get_json()
        return jsonify({
            "status": "All good",
            "data": data
        }), 200

    else:
        return jsonify({
            "status": "problem in data",
        }), 400

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)