## JWT Explanation
- JSON Web Token
- create self-contained tokens to securely transmit information
- contains verification information about users and permissions
# Process
1. issuer creates JWT and sets the claim to be included in token
2. issuer signs the JWT using a secret key
3. JWT can be transmitted
4. receiver verifies the JWT with the secret key
5. if JWT signature is valid, the receiver can trust the previously set claim

## Hashing & Salting
# Hashing
- transforms data into a fixed-size of characters
# Salting
- adds random data to passwords before hashing, making them harder to crack

