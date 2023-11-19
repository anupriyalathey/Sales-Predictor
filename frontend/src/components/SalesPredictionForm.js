// src/components/SalesPredictionForm.js
import React,{useState} from 'react';
import {
  ChakraProvider,
  Flex,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Heading,
  Spacer
} from '@chakra-ui/react';
import axios from 'axios';

// const submitForm = (event) => {
//   event.preventDefault();
  
//   var form = document.getElementById('salesForm');
//   var formData = new FormData(form);

//   console.log('Form Data:', formData);

//   fetch('/predict_sales', {
//       method: 'POST',
//       body: formData
//   })
//   .then(response => response.json())
//   .then(data => {
//       console.log('Prediction:', data.prediction);
      
//       // Display the prediction result on the UI
//       var resultDiv = document.getElementById('predictionResult');
//       resultDiv.innerHTML = '<p>Prediction Result: ' + data.prediction[0] + '</p>';
//   })
//   .catch(error => {
//       console.error('Error:', error);
//   });
// }

const SalesPredictionForm = () => {  
  const [formData, setFormData] = useState({
    Item_Weight: '',
    Item_Fat_Content: '0',
    Item_Visibility: '',
    Item_MRP: '',
    Outlet_Size: '1',
    Outlet_Location_Type: '1',
    OutletType: '1',
    Outlet_Age: '',
    ItemType: '1',
    outlet_identifier: 'OUT013',
  });

  const [predictionResult, setPredictionResult] = useState(null);
  
  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

  const submitForm = async (event) => {
    event.preventDefault();
    // const form = event.target;
    // const formData = new FormData(form);

    try {
      const response = await axios.post('/predict_sales', formData);
      const data = response.data;
      console.log('Prediction:', data.prediction);
       // Display the prediction result on the UI
       setPredictionResult(data.prediction[0]);
      } catch (error) {
        console.error('Error:', error);
      }
      };

  return (
    <ChakraProvider>
      <Box p={4}>
        <Heading>Sales Prediction Form</Heading>
          <FormControl id="salesForm" onSubmit={submitForm}>
            <FormLabel>Item Weight</FormLabel>
            <Input type="number" name="Item_Weight" placeholder='0' required />
            <Spacer />

            <FormLabel>Item Fat Content</FormLabel>
            <Select placeholder='Item Fat Content'>
            <option value="0">Low Fat</option>
            <option value="1">Regular</option>
            </Select>
            <Spacer />

            <FormLabel>Item Visibility</FormLabel>
            <Input type="number" name="Item_Visibility" placeholder='0' required />
            <Spacer />

            <FormLabel>Item MRP</FormLabel>
            <Input type="number" name="Item_MRP" placeholder='0' required />
            <Spacer />

            <FormLabel>Outlet Size</FormLabel>
            <Select placeholder='Outlet Size'>
            <option value="1">Small</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
            </Select>
            <Spacer />

            <FormLabel>Outlet Location Type</FormLabel>
            <Select placeholder='Outlet Location Type'>
            <option value="1">Tier 1</option>
            <option value="2">Tier 2</option>
            <option value="3">Tier 3</option>
            </Select>
            <Spacer />

            <FormLabel>Outlet Type</FormLabel>
            <Select placeholder='Outlet Type'>
            <option value="1">Supermarket Type 1</option>
            <option value="2">Supermarket Type 2</option>
            <option value="3">Supermarket Type 3</option>
            <option value="4">Grocery Store</option>
            </Select>
            <Spacer />

            <FormLabel>Outlet Age</FormLabel>
            <Input type="number" name="Outlet_Age" placeholder='0' required />
            <Spacer />

            <FormLabel>Item Type</FormLabel>
            <Select placeholder='Item Type'>
            <option value="1">Breads</option>
            <option value="2">Breakfast</option>
            <option value="3">Canned</option>
            <option value="4">Dairy</option>
            <option value="5">Frozen Foods</option>
            <option value="6">Fruits and Vegetables</option>
            <option value="7">Hard Drinks</option>
            <option value="8">Health and Hygiene</option>
            <option value="9">Household</option>
            <option value="10">Meat</option>
            <option value="11">Others</option>
            <option value="12">Seafood</option>
            <option value="13">Snack Foods</option>
            <option value="14">Soft Drinks</option>
            <option value="15">Starchy Foods</option>
            </Select>
            <Spacer />

            <FormLabel>Outlet Identifier</FormLabel>
            <Select placeholder='Outlet Identifier'>
            <option value="OUT013">OUT013</option>
            <option value="OUT017">OUT017</option>
            <option value="OUT018">OUT018</option>
            <option value="OUT019">OUT019</option>
            <option value="OUT027">OUT027</option>
            <option value="OUT035">OUT035</option>
            <option value="OUT045">OUT045</option>
            <option value="OUT046">OUT046</option>
            <option value="OUT049">OUT049</option>
            </Select>
            <Spacer />
        </FormControl>
        <Button type="submit">Predict</Button>
        {predictionResult && (
        <Text>
          Prediction Result: {predictionResult}
        </Text>
      )}

      </Box>
    </ChakraProvider>
  );
};

export default SalesPredictionForm;
