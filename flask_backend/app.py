import numpy as np
from flask import Flask, request, jsonify
import pickle
import torch
from flask_cors import CORS
from flask_socketio import SocketIO, emit
import json

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
socketio = SocketIO(app, cors_allowed_origins="*")  # Initialize SocketIO

# Load the model
model = pickle.load(open('mouse_move_cnn.pkl', 'rb'))

@app.route('/')
def home():
    return jsonify({"message": "hello world"})



# Store received mouse data
mouse_data_array = []



@socketio.on('mouse_data')
def handle_mouse_data(data):
    # Append the received data to the array
    mouse_data_array.append(data)

    # Convert the array of objects to an array of tuples
    mouse_coordinates = [(item['x'], item['y'], item['timestamp']) for item in mouse_data_array]

    # Create a JSON object with array of tuples
    json_data = {
        "mouse_coordinates": mouse_coordinates
    }

    # Emit the JSON object back to the client (or perform other actions)
    emit('response', {'message': 'Data received successfully', 'data': json_data})
    
    # Print the JSON data as a string
    print(f"{json.dumps(json_data)}")

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
        return jsonify({"prediction": preds.squeeze().item()})
    
    except Exception as e:
        # Handle exceptions and return error message
        return jsonify({"message": str(e)}), 500

if __name__ == "__main__":
    socketio.run(app, debug=True, port=5000)
