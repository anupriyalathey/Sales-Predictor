from flask import Flask, request, jsonify
import pandas as pd
import pickle
from flask_cors import CORS

app = Flask(__name__)

# Allow CORS for all routes, only from your frontend origin
CORS(app, resources={r"/*": {"origins": "https://retail-master1.vercel.app"}})

# Set custom CORS headers
@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = 'https://retail-master1.vercel.app'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
    return response

# Load the model once at the start
with open('BigMart_Sales_Model.pkl', 'rb') as file:
    loaded_model = pickle.load(file)

@app.route('/dashboard/prediction', methods=['POST'])
def prediction():
    input_data = request.get_json()

    # Convert input data
    def convert_input(input_data):
        user_input = {
            'Item_Weight': float(input_data.get('Item_Weight')),
            'Item_Fat_Content': int(input_data.get('Item_Fat_Content')),
            'Item_Visibility': float(input_data.get('Item_Visibility')),
            'Item_MRP': float(input_data.get('Item_MRP')),
            'Outlet_Size': int(input_data.get('Outlet_Size')),
            'Outlet_Location_Type': int(input_data.get('Outlet_Location_Type')),
            'Outlet_Type': int(input_data.get('Outlet_Type')),
            'Outlet_Age': int(input_data.get('Outlet_Age', 0)),
        }

        item_types = [
            'Breads', 'Breakfast', 'Canned', 'Dairy', 'Frozen Foods', 'Fruits and Vegetables',
            'Hard Drinks', 'Health and Hygiene', 'Household', 'Meat', 'Others', 'Seafood',
            'Snack Foods', 'Soft Drinks', 'Starchy Foods'
        ]
        for item_type in item_types:
            user_input[f'Item_Type_{item_type}'] = 1 if input_data.get('Item_Type') == str(item_types.index(item_type) + 1) else 0

        outlet_identifiers = [
            'OUT013', 'OUT017', 'OUT018', 'OUT019', 'OUT027', 'OUT035', 'OUT045', 'OUT046', 'OUT049'
        ]
        for outlet_identifier in outlet_identifiers:
            user_input[f'Outlet_Identifier_{outlet_identifier}'] = 1 if input_data.get('Outlet_Identifier') == outlet_identifier else 0

        return user_input

    user_input = convert_input(input_data)
    prediction = loaded_model.predict(pd.DataFrame([user_input]))

    return jsonify({'prediction': list(prediction)})

if __name__ == '__main__':
    app.run(debug=True)
