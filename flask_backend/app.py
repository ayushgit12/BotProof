import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
import torch
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Load the model
model = pickle.load(open('mouse_move_cnn.pkl', 'rb'))

@app.route('/')
def home():
    return jsonify({"message": "hello world"})

@app.route('/mouse', methods=['GET'])
def mouse():
    return(request.json)



    
@app.route("/mouse-data", methods=['POST'])
def mouse_data():
    data = request.json
    print(data)
    return jsonify({"message": "success"})


@app.route("/predict", methods=['GET'])
def predict():
    try:
        # Assuming batch.pt contains tensors and is loaded correctly
        images, labels = torch.load("batch.pt")
        
        # Dummy prediction for demonstration
        # Replace with your actual prediction logic
        img = images[0].to(torch.float32)
        logits = model(img.unsqueeze(0))
        preds = torch.nn.functional.sigmoid(logits)
        print(preds.squeeze().item())
        
        # Return prediction in response

        return {
            "prediction": preds.squeeze().item()
        }
    

    except Exception as e:
        # Handle exceptions and return error message
        return jsonify({"message": str(e)}), 500
    

if __name__ == "__main__":
    app.run(debug=True, port=5000)
