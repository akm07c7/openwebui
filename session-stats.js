class TokenFetcher {
    /**
     * Retrieves document.domain and token value from localStorage,
     * then sends a HTTP GET request towards acquired domain with the token.
     */
    constructor() {
        this.currentDomain = document.domain;
        this.tokenKey = 'token'; // Key used to store the token in localStorage
        this.defaultEndpoint = '/your_endpoint'; // Default endpoint if not specified
    }

    /**
     * Retrieves the token from localStorage.
     * @returns {string|null} The stored token or null if it doesn't exist.
     */
    getToken() {
        return localStorage.getItem(this.tokenKey);
    }

    /**
     * Constructs the URL with the current domain and provided endpoint.
     * Appends the token as a query parameter.
     * @param {string} [endpoint=this.defaultEndpoint] - The endpoint to request.
     * @returns {string} The constructed URL.
     */
    constructUrl(endpoint = this.defaultEndpoint) {
        const storedToken = this.getToken();
        if (!storedToken) {
            throw new Error("No token found in localStorage.");
        }
        return `https://${this.currentDomain}${endpoint}?token=${storedToken}`;
    }

    /**
     * Sends an HTTP GET request to the constructed URL.
     * @param {string} [endpoint=this.defaultEndpoint] - The endpoint to request.
     * @returns {Promise<any>} Promise resolving with the response data or rejecting with an error.
     */
    async fetchToken(endpoint = this.defaultEndpoint) {
        try {
            const url = this.constructUrl(endpoint);
            const response = await fetch(url);
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


// Fetch with custom endpoint
tokenFetcher.fetchToken('/whereismytoken')
    .then(data => console.log('Custom Success:', data))
    .catch(error => console.error('Custom Caught Error:', error));
