import https from 'https';

// Your OpenAI API Key
const apiKey = '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';

const endpoint = 'api.openai.com';
const path = '/v1/engines/davinci/completions';

// Your question or prompt
const question = 'Translate the following English text to French: "Hello, how are you?"';

// Request data
const requestData = {
    prompt: question,
    max_tokens: 50, // Adjust this as needed
};

// Convert the request data to a JSON string
const requestDataString = JSON.stringify(requestData);

// Request headers
const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(requestDataString),
};

// Request options
const options = {
    hostname: endpoint,
    path: path,
    method: 'POST',
    headers: headers,
};

// Create the HTTP request
const request = https.request(options, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        if (response.statusCode === 200) {
            const result = JSON.parse(data);
            console.log(result.choices[0].text);
        } else {
            console.error('Error:', response.statusCode);
            console.error(data);
        }
    });
});

// Handle any errors that occur during the request
request.on('error', (error) => {
    console.error('Request error:', error);
});

// Send the request with the JSON data
request.write(requestDataString);
request.end();