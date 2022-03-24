export const testData = {
    "openapi": "3.0.2",
    "info": {
    "title": "FastAPI",
    "version": "0.1.0"
    },
    "paths": {
    "/auth/signup": {
    "post": {
    "tags": [
    "Auth",
    "Auth"
    ],
    "summary": "Create User",
    "description": "intro-This endpoint allows creation of a new user. To create a new user, you need to send a post request to the /auth/signup endpoint with a body of request containing details of the new user.\nparamDesc-\n    reqBody-email: This is the email of the new user.\n    reqBody-password: This is the unique password of the new user .\n    reqBody-first_name: This is the first name of the new user.\n    reqBody-last_name: This is the last name of the new user.\n    reqBody-phone_number: This is the phone number of the new user.\n    reqBody-country_code: This is the country code of the new user.\n    reqBody-image: This is an image file of the new user, can be of any format.\n    reqBody-device_id: This is the id of the device used at signup.\n    reqBody-country: This is the country name of the new user.\n    reqBody-state: This is the state name of the new user.\n    reqBody-google_id: This is a unique id of the new user's google account.\n    reqBody-google_image: This is the image of the user's google account.\n\nreturnDesc-On sucessful request, it returns\n    returnBody- \"success\".",
    "operationId": "create_user_auth_signup_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/UserCreate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "201": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/auth/login": {
    "post": {
    "tags": [
    "Auth",
    "Auth"
    ],
    "summary": "Login",
    "description": "intro-This endpoint allows you to login an existing user, to login a user you need to make a post request to the /auth/login endpoint with a required body of requst as specified below\n\nparamDesc-\n    reqBody-email: This is the email of the existing user.\n    reqBody-phone_number: This is the phone number of the existing user.\n    reqBody-country_code: This is the country code of the existing user.\n    reqBody-password: This is the password of the existing user.\n\nreturnDesc-On sucessful request, it returns\n    returnBody- \"success\".",
    "operationId": "login_auth_login_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/UserLogin"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/users/me": {
    "get": {
    "tags": [
    "User",
    "User"
    ],
    "summary": "Get User",
    "operationId": "get_user_users_me_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/User"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    },
    "put": {
    "tags": [
    "User",
    "User"
    ],
    "summary": "Update User",
    "operationId": "update_user_users_me_put",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/bigfastapi__schemas__users_schemas__UserUpdate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/users/{user_id}/activate": {
    "put": {
    "tags": [
    "User",
    "User"
    ],
    "summary": "Activate User",
    "operationId": "activate_user_users__user_id__activate_put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "User Id",
    "type": "string"
    },
    "name": "user_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/UserActivate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/users/recover-password": {
    "post": {
    "tags": [
    "User",
    "User"
    ],
    "summary": "Recover Password",
    "operationId": "recover_password_users_recover_password_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/UserRecoverPassword"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/users/reset-password": {
    "post": {
    "tags": [
    "User",
    "User"
    ],
    "summary": "Reset Password",
    "operationId": "reset_password_users_reset_password_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/UserResetPassword"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/users/profile/update": {
    "put": {
    "tags": [
    "User",
    "User"
    ],
    "summary": "Updateuserprofile",
    "operationId": "updateUserProfile_users_profile_update_put",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/UpdateUserReq"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/users/password/update": {
    "patch": {
    "tags": [
    "User",
    "User"
    ],
    "summary": "Updatepassword",
    "operationId": "updatePassword_users_password_update_patch",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/updatePasswordRequest"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/users/accept-invite/{token}": {
    "put": {
    "tags": [
    "User",
    "User"
    ],
    "summary": "Accept Invite",
    "operationId": "accept_invite_users_accept_invite__token__put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Token",
    "type": "string"
    },
    "name": "token",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/StoreUser"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/users/invite/": {
    "post": {
    "tags": [
    "User",
    "User"
    ],
    "summary": "Invite User",
    "description": "An endpoint to invite users to a store.\n\nReturns dict: message ",
    "operationId": "invite_user_users_invite__post",
    "parameters": [
    {
    "required": false,
    "schema": {
    "title": "Template",
    "type": "string",
    "default": "invite_email.html"
    },
    "name": "template",
    "in": "query"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/UserInvite"
    }
    }
    },
    "required": true
    },
    "responses": {
    "201": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/users/invite/{invite_code}": {
    "get": {
    "tags": [
    "User",
    "User"
    ],
    "summary": "Get Single Invite",
    "description": "Get single invite by invite code.",
    "operationId": "get_single_invite_users_invite__invite_code__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Invite Code",
    "type": "string"
    },
    "name": "invite_code",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/users/invite/{invite_code}/decline": {
    "put": {
    "tags": [
    "User",
    "User"
    ],
    "summary": "Decline Invite",
    "description": "Decline store invite",
    "operationId": "decline_invite_users_invite__invite_code__decline_put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Invite Code",
    "type": "string"
    },
    "name": "invite_code",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/users/revoke-invite/{invite_code}": {
    "delete": {
    "tags": [
    "User",
    "User"
    ],
    "summary": "Revoke Invite",
    "description": "Revokes the invitation of a previously invited user.",
    "operationId": "revoke_invite_users_revoke_invite__invite_code__delete",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Invite Code",
    "type": "string"
    },
    "name": "invite_code",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/users/{user_id}": {
    "patch": {
    "tags": [
    "User",
    "User"
    ],
    "summary": "Update User Role",
    "operationId": "update_user_role_users__user_id__patch",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/bigfastapi__schemas__store_user_schemas__UserUpdate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/users/resend-verification/token": {
    "post": {
    "tags": [
    "User",
    "User"
    ],
    "summary": "Resend Token Verification",
    "operationId": "resend_token_verification_users_resend_verification_token_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/UserTokenVerification"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/users/verify/token/{token}": {
    "post": {
    "tags": [
    "User",
    "User"
    ],
    "summary": "Verify User With Token",
    "operationId": "verify_user_with_token_users_verify_token__token__post",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Token",
    "type": "string"
    },
    "name": "token",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/users/password-change/token/{token}": {
    "put": {
    "tags": [
    "User",
    "User"
    ],
    "summary": "Password Change With Token",
    "operationId": "password_change_with_token_users_password_change_token__token__put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Token",
    "type": "string"
    },
    "name": "token",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/UserPasswordUpdate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/users/image/upload": {
    "patch": {
    "tags": [
    "User",
    "User"
    ],
    "summary": "Updatepassword",
    "operationId": "updatePassword_users_image_upload_patch",
    "requestBody": {
    "content": {
    "multipart/form-data": {
    "schema": {
    "$ref": "#/components/schemas/Body_updatePassword_users_image_upload_patch"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/countries": {
    "get": {
    "tags": [
    "Countries",
    "Countries"
    ],
    "summary": "Get Countries",
    "description": "intro-This endpoint returns a list of all countries in the world and their respective states. To get this data you need to make a get request to the /countries endpoint.\n\nreturnDesc-On sucessful request, it returns\n    returnBody- \"an array country objects\".",
    "operationId": "get_countries_countries_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Country"
    }
    }
    }
    }
    }
    }
    },
    "/countries/{country_code}/states": {
    "get": {
    "tags": [
    "Countries",
    "Countries"
    ],
    "summary": "Get Country States",
    "description": "intro-This endpoint returns a list of all states in a queried country. To get this data you need to make a get request to the /countries/{country_code}/states endpoint.\n\nparamDesc-On get request, the url takes a query parameter \"country_code\" i.e /countries/{country_code}/states:\n    param-country_code: This is the country code of the country of interest\n\nreturnDesc-On sucessful request, it returns\n    returnBody- \"an array of states\".",
    "operationId": "get_country_states_countries__country_code__states_get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Country Code",
    "type": "string"
    },
    "name": "country_code",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/State"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/countries/codes": {
    "get": {
    "tags": [
    "Countries",
    "Countries"
    ],
    "summary": "Get Countries Dial Codes",
    "description": "intro-This endpoint returns a list of all countries and thier respective codes including dial codes and sample phone formats. To get, you need to make a get request to the /countries/codes enpoint\n\nparamDesc-To query for a particular country, you need to make a get request to /countries/codes?country_code={country_code}\n    param-country_code: This is the country code of the country of interest\n\nreturnDesc-On sucessful request, it returns\n    returnBody- an array of countries and their codes.",
    "operationId": "get_countries_dial_codes_countries_codes_get",
    "parameters": [
    {
    "required": false,
    "schema": {
    "title": "Country Code",
    "type": "string"
    },
    "name": "country_code",
    "in": "query"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Country"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/support/faqs": {
    "get": {
    "tags": [
    "FAQ and Support ❓"
    ],
    "summary": "Get Faqs",
    "description": "model for support and faqs\n\nArgs:\n    id (str): \n\nReturns:\n    Faq created succesfully",
    "operationId": "get_faqs_support_faqs_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Get Faqs Support Faqs Get",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/FaqInDB"
    }
    }
    }
    }
    }
    }
    },
    "post": {
    "tags": [
    "FAQ and Support ❓"
    ],
    "summary": "Create Faq",
    "operationId": "create_faq_support_faqs_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Faq"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CreateFaqRes"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/support/tickets": {
    "get": {
    "tags": [
    "FAQ and Support ❓"
    ],
    "summary": "Get Tickets",
    "operationId": "get_tickets_support_tickets_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Get Tickets Support Tickets Get",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/TicketInDB"
    }
    }
    }
    }
    }
    }
    },
    "post": {
    "tags": [
    "FAQ and Support ❓"
    ],
    "summary": "Create Ticket",
    "operationId": "create_ticket_support_tickets_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Ticket"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CreateTicketRes"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/support/ticket/{short_id}": {
    "get": {
    "tags": [
    "FAQ and Support ❓"
    ],
    "summary": "Get Ticket",
    "operationId": "get_ticket_support_ticket__short_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Short Id",
    "type": "string"
    },
    "name": "short_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/TicketInDB"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/support/tickets/{short_id}/reply": {
    "post": {
    "tags": [
    "FAQ and Support ❓"
    ],
    "summary": "Reply Ticket",
    "operationId": "reply_ticket_support_tickets__short_id__reply_post",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Short Id",
    "type": "string"
    },
    "name": "short_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/TicketReply"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/TicketReplyRes"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/support/tickets/{short_id}/close": {
    "put": {
    "tags": [
    "FAQ and Support ❓"
    ],
    "summary": "Close Ticket",
    "operationId": "close_ticket_support_tickets__short_id__close_put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Short Id",
    "type": "string"
    },
    "name": "short_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/TicketCloseRes"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/support/tickets/{short_id}/replies": {
    "get": {
    "tags": [
    "FAQ and Support ❓"
    ],
    "summary": "Get Ticket Replies",
    "operationId": "get_ticket_replies_support_tickets__short_id__replies_get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Short Id",
    "type": "string"
    },
    "name": "short_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Get Ticket Replies Support Tickets  Short Id  Replies Get",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/TicketReplyInDB"
    }
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/support/tickets/open": {
    "get": {
    "tags": [
    "FAQ and Support ❓"
    ],
    "summary": "Get Open Tickets",
    "operationId": "get_open_tickets_support_tickets_open_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Get Open Tickets Support Tickets Open Get",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/TicketInDB"
    }
    }
    }
    }
    }
    }
    }
    },
    "/support/tickets/closed": {
    "get": {
    "tags": [
    "FAQ and Support ❓"
    ],
    "summary": "Get Closed Tickets",
    "operationId": "get_closed_tickets_support_tickets_closed_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Get Closed Tickets Support Tickets Closed Get",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/ClosedTicket"
    }
    }
    }
    }
    }
    }
    }
    },
    "/contact": {
    "get": {
    "tags": [
    "Contacts and Contact Us"
    ],
    "summary": "Get All Contacts",
    "operationId": "get_all_contacts_contact_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Get All Contacts Contact Get",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/Contact"
    }
    }
    }
    }
    }
    }
    },
    "post": {
    "tags": [
    "Contacts and Contact Us"
    ],
    "summary": "Create Contact",
    "operationId": "create_contact_contact_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/ContactBase"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/contact/{contact_id}": {
    "get": {
    "tags": [
    "Contacts and Contact Us"
    ],
    "summary": "Get Contact By Id",
    "operationId": "get_contact_by_id_contact__contact_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Contact Id",
    "type": "string"
    },
    "name": "contact_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Contact"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    },
    "put": {
    "tags": [
    "Contacts and Contact Us"
    ],
    "summary": "Update Contact",
    "operationId": "update_contact_contact__contact_id__put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Contact Id",
    "type": "string"
    },
    "name": "contact_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/ContactBase"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    },
    "delete": {
    "tags": [
    "Contacts and Contact Us"
    ],
    "summary": "Delete Contact",
    "operationId": "delete_contact_contact__contact_id__delete",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Contact Id",
    "type": "string"
    },
    "name": "contact_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/contactus": {
    "get": {
    "tags": [
    "Contacts and Contact Us"
    ],
    "summary": "Get All Contactus",
    "operationId": "get_all_contactUS_contactus_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Get All Contactus Contactus Get",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/ContactUS"
    }
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    },
    "post": {
    "tags": [
    "Contacts and Contact Us"
    ],
    "summary": "Create Contactus",
    "operationId": "create_contactUS_contactus_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/ContactUSB"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/contactus/{contactus_id}": {
    "get": {
    "tags": [
    "Contacts and Contact Us"
    ],
    "summary": "Get Contactus By Id",
    "operationId": "get_contactUS_by_id_contactus__contactus_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Contactus Id",
    "type": "string"
    },
    "name": "contactus_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/ContactUS"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    },
    "delete": {
    "tags": [
    "Contacts and Contact Us"
    ],
    "summary": "Delete Contactus",
    "operationId": "delete_contactUS_contactus__contactus_id__delete",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Contactus Id",
    "type": "string"
    },
    "name": "contactus_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/blog": {
    "post": {
    "tags": [
    "Blog",
    "Blog"
    ],
    "summary": "Create Blog",
    "description": "intro-This endpoint allows you to create a create a new blog post on the fly and takes in about two paramenters. To create a blog, you need to make a post request to the /blog endpoint\n\nparamDesc-\n    reqBody-title: This is the title of the blog post to be created.\n    reqBody-content: This is the content of the blog post to be created.\n\nreturnDesc-On sucessful request, it returns\n    returnBody- the blog object.",
    "operationId": "create_blog_blog_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/BlogCreate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Blog"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/blog/{blog_id}": {
    "get": {
    "tags": [
    "Blog",
    "Blog"
    ],
    "summary": "Get Blog",
    "description": "intro-This endpoint allows you to retreive a blog post based on it's id which is included in the request url. To get a blog post, you need to make a get request to the /blog/blog_id endpoint in which \"id\" is the unique identifier of the blog item.\n\nparamDesc-On get request the url takes a query parameter \"blog_id\" i.e /blog/blog_id:\n    param-blog_id: This is the id of the blog item\n\nreturnDesc-On sucessful request, it returns\n    returnBody- \"success\"",
    "operationId": "get_blog_blog__blog_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Blog Id",
    "type": "string"
    },
    "name": "blog_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    },
    "put": {
    "tags": [
    "Blog",
    "Blog"
    ],
    "summary": "Update Blog",
    "description": "intro-This endpoint allows you to update a particular blog post. To update a blog posts, you need to make a put request to the /blog/blog_id endpoint where blog_id is the unique identifier for the blog.\n\nparamDesc-This request can take any or both of the following parameters:\n    reqBody-title: This is the title of the blog post to be created.\n    reqBody-content: This is the content of the blog post to be created.\n\nreturnDesc-On sucessful request, it returns\n   returnBody- a refreshed object of the updated blog",
    "operationId": "update_blog_blog__blog_id__put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Blog Id",
    "type": "string"
    },
    "name": "blog_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/BlogUpdate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Blog"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    },
    "delete": {
    "tags": [
    "Blog",
    "Blog"
    ],
    "summary": "Delete Blog",
    "description": "intro-This endpoint allows you to delete a particular blog post. To delete a blog posts, you need to make a delete request to the /blog/blog_id endpoint where blog_id is the unique identifier for the blog.\n\nparamDesc-On delete request the url takes a query parameter \"blog_id\" i.e /blog/blog_id:\n    param-blog_id: This is the unique id of the blog item\n\n\nreturnDesc-On sucessful request, it returns an Object with message\n   returnBody- \"successfully deleted\"",
    "operationId": "delete_blog_blog__blog_id__delete",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Blog Id",
    "type": "string"
    },
    "name": "blog_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/blogs": {
    "get": {
    "tags": [
    "Blog",
    "Blog"
    ],
    "summary": "Get All Blogs",
    "description": "intro-This endpoint allows you to retreive all blog posts in the database. To retreive all blog posts, you need to make a get request to the /blog endpoint.\n\nreturnDesc-On sucessful request, it returns:\n   returnBody- an array of blog objects.",
    "operationId": "get_all_blogs_blogs_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Get All Blogs Blogs Get",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/Blog"
    }
    }
    }
    }
    }
    }
    }
    },
    "/blogs/{user_id}": {
    "get": {
    "tags": [
    "Blog",
    "Blog"
    ],
    "summary": "Get User Blogs",
    "description": "intro-This endpoint allows you to retreive all blog posts created by a particular user. To retreive all blog posts by a user, you need to make a get request to the /blog/userId endpoint where userId is the unique identifier for the user.\n\nparamDesc-On get request the url takes a query parameter \"user_id\" i.e /blog/user_id:\n     param-user_id: This is the id of the user\n\n returnDesc-On sucessful request, it returns\n      returnBody- an array of blog post objects created by the queried user.\n ",
    "operationId": "get_user_blogs_blogs__user_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "User Id",
    "type": "string"
    },
    "name": "user_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Get User Blogs Blogs  User Id  Get",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/Blog"
    }
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/pages": {
    "get": {
    "tags": [
    "Pages"
    ],
    "summary": "Get All Pages",
    "description": "intro-This endpoint returns a list of all created pages, and their details. To get this data, you need to make a get request to the /pages endpoint\n\nreturnDesc-On sucessful request, it returns\n    returnBody- an array of page objects.",
    "operationId": "get_all_pages_pages_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Get All Pages Pages Get",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/Page"
    }
    }
    }
    }
    }
    }
    }
    },
    "/page": {
    "post": {
    "tags": [
    "Pages"
    ],
    "summary": "Create Page",
    "description": "intro-This endpoint allows you to create a new page. To create a new page you need to make a post request to the /page endpoint\n\n    reqBody-title: This is the title of the new page\n    reqBody-content: This is the content body of the new page \n\nreturnDesc-On sucessful request, it returns\n    returnBody- a page object.",
    "operationId": "create_page_page_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/PageInput"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Page"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/page/{page_id}": {
    "get": {
    "tags": [
    "Pages"
    ],
    "summary": "Get Page",
    "description": "intro-This endpoint allows you to retrieve an existing page. To retreive an existing page you need to make a get request to the /page/{page_id} endpoint where page_id is the unique identifier of the page\n\nparamDesc- On get request the url takes a query parameter \"page_id\" i.e /page/page_id:\n    param-page_id: This is the id of the existing page to be updated\n    reqBody-title: This is the title of the page\n    reqBody-content: This is the content body of the page \n\nreturnDesc-On sucessful request, it returns \n    returnBody- the page object.",
    "operationId": "get_page_page__page_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Page Id",
    "type": "string"
    },
    "name": "page_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Page"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    },
    "put": {
    "tags": [
    "Pages"
    ],
    "summary": "Update Page",
    "description": "intro-This endpoint allows you to update an existing page. To update an existing page you need to make a put request to the /page/{page_id} endpoint where page_id is the unique identifier of the page\n\nparamDesc- On put request the url takes a query parameter \"page_id\" i.e /page/page_id:\n    param-page_id: This is the id of the existing page to be updated\n\nreturnDesc-On sucessful request, it returns \n    returnBody- page object.",
    "operationId": "update_page_page__page_id__put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Page Id",
    "type": "string"
    },
    "name": "page_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/PageInput"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    },
    "delete": {
    "tags": [
    "Pages"
    ],
    "summary": "Delete Page",
    "operationId": "delete_page_page__page_id__delete",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Page Id",
    "type": "string"
    },
    "name": "page_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/plans": {
    "get": {
    "tags": [
    "Plan",
    "Plan"
    ],
    "summary": "Getall",
    "operationId": "getAll_plans_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/bigfastapi__schemas__plan_schema__ResponseList"
    }
    }
    }
    }
    }
    },
    "post": {
    "tags": [
    "Plan",
    "Plan"
    ],
    "summary": "Addplan",
    "operationId": "addPlan_plans_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/PlanReqBase"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/bigfastapi__schemas__plan_schema__ResponseSingle"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/plans/{plan_id}": {
    "get": {
    "tags": [
    "Plans",
    "Plans"
    ],
    "summary": "Get Plan By Id",
    "description": "Retrieves a plan by id\n\nArgs:\n    plan_id (str): id of the plan\n    db (orm.Session, optional): [description]. Defaults to Depends(get_db).\n\nReturns:\n    [dict]: key value pair of the following keys:\n        message (str): success message\n        data (plan_schemas.Plan): the plan",
    "operationId": "get_plan_by_id_plans__plan_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Plan Id",
    "type": "string"
    },
    "name": "plan_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Plan"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    },
    "put": {
    "tags": [
    "Plans",
    "Plans"
    ],
    "summary": "Update Plan",
    "description": "Updates a plan\n\nArgs:\n    plan (plan_schemas.PlanDTO): body of the request\n    plan_id (str): id of the plan to update\n    db (orm.Session, optional): [description]. Defaults to Depends(get_db).\n    user (plan_schemas.User, optional): [description]. user initiating the request\n\nRaises:\n    HTTPException: if user is not an admin or if plan does not exist\n\nReturns:\n    [dict]: key value pair of the following keys:\n        message (str): success message\n        data (plan_schemas.Plan): the updated plan",
    "operationId": "update_plan_plans__plan_id__put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Plan Id",
    "type": "string"
    },
    "name": "plan_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/PlanDTO"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Plan"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    },
    "delete": {
    "tags": [
    "Plans",
    "Plans"
    ],
    "summary": "Delete Plan",
    "description": "Deletes a plan by id\n\nArgs:\n    plan_id (str): id of the plan\n    db (orm.Session, optional): [description]. Defaults to Depends(get_db).\n\nReturns:\n    [dict]: key value pair of the following keys:\n        message (str): success message\n        data (plan_schemas.Plan): the deleted plan",
    "operationId": "delete_plan_plans__plan_id__delete",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Plan Id",
    "type": "string"
    },
    "name": "plan_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Plan"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/plans/geography/{geography_id}": {
    "get": {
    "tags": [
    "Plans",
    "Plans"
    ],
    "summary": "Get Plan By Geography",
    "description": "Retrieves a plan by geography id\n\nArgs:\n    geography_id (str): id of the geography\n    db (orm.Session, optional): [description]. Defaults to Depends(get_db).\n\nReturns:\n    [dict]: key value pair of the following keys:\n        message (str): success message\n        data (List[plan_schemas.Plan]): list of plans",
    "operationId": "get_plan_by_geography_plans_geography__geography_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Geography Id",
    "type": "string"
    },
    "name": "geography_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Get Plan By Geography Plans Geography  Geography Id  Get",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/Plan"
    }
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/email/send": {
    "post": {
    "tags": [
    "Transactional Emails 📧"
    ],
    "summary": "Send Email",
    "description": "An endpoint used to send an email\n\nReturns:\n    object (dict): a message",
    "operationId": "send_email_email_send_post",
    "parameters": [
    {
    "required": false,
    "schema": {
    "title": "Template",
    "type": "string",
    "default": "base_email.html"
    },
    "name": "template",
    "in": "query"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Email"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/bigfastapi__email__ResponseModel"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/email/send/notification": {
    "post": {
    "tags": [
    "Transactional Emails 📧"
    ],
    "summary": "Send Notification Email",
    "description": "An endpoint for sending a notification email\n\nReturns:\n    object (dict): a message",
    "operationId": "send_notification_email_email_send_notification_post",
    "parameters": [
    {
    "required": false,
    "schema": {
    "title": "Template",
    "type": "string",
    "default": "notification_email.html"
    },
    "name": "template",
    "in": "query"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Email"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/bigfastapi__email__ResponseModel"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/email/send/invoice": {
    "post": {
    "tags": [
    "Transactional Emails 📧"
    ],
    "summary": "Send Invoice Email",
    "description": "An endpoint for sending an invoice email\n\nReturns:\n    object (dict): a message",
    "operationId": "send_invoice_email_email_send_invoice_post",
    "parameters": [
    {
    "required": false,
    "schema": {
    "title": "Template",
    "type": "string",
    "default": "invoice_email.html"
    },
    "name": "template",
    "in": "query"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Email"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/bigfastapi__email__ResponseModel"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/email/send/receipt": {
    "post": {
    "tags": [
    "Transactional Emails 📧"
    ],
    "summary": "Send Receipt Email",
    "description": "An endpoint for sending a receipt email\n\nReturns:\n    object (dict): a message",
    "operationId": "send_receipt_email_email_send_receipt_post",
    "parameters": [
    {
    "required": false,
    "schema": {
    "title": "Template",
    "type": "string",
    "default": "receipt_email.html"
    },
    "name": "template",
    "in": "query"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Email"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/bigfastapi__email__ResponseModel"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/email/send/welcome": {
    "post": {
    "tags": [
    "Transactional Emails 📧"
    ],
    "summary": "Send Welcome Email",
    "description": "An endpoint for sending a welcome email\n\nReturns:\n    object (dict): a message",
    "operationId": "send_welcome_email_email_send_welcome_post",
    "parameters": [
    {
    "required": false,
    "schema": {
    "title": "Template",
    "type": "string",
    "default": "welcome.html"
    },
    "name": "template",
    "in": "query"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Email"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/bigfastapi__email__ResponseModel"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/email/send/verification": {
    "post": {
    "tags": [
    "Transactional Emails 📧"
    ],
    "summary": "Send Verification Email",
    "description": "An endpoint for sending verification email\n\nReturns:\n    object (dict): a message",
    "operationId": "send_verification_email_email_send_verification_post",
    "parameters": [
    {
    "required": false,
    "schema": {
    "title": "Template",
    "type": "string",
    "default": "verification_email.html"
    },
    "name": "template",
    "in": "query"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Email"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/bigfastapi__email__ResponseModel"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/email/send/reset-password": {
    "post": {
    "tags": [
    "Transactional Emails 📧"
    ],
    "summary": "Send Reset Password Email",
    "description": "An endpoint for sending a reset password email\n\nReturns:\n    object (dict): a message",
    "operationId": "send_reset_password_email_email_send_reset_password_post",
    "parameters": [
    {
    "required": false,
    "schema": {
    "title": "Template",
    "type": "string",
    "default": "reset_password_email.html"
    },
    "name": "template",
    "in": "query"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Email"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/bigfastapi__email__ResponseModel"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/email/send/marketing-email": {
    "post": {
    "tags": [
    "Transactional Emails 📧"
    ],
    "summary": "Send Marketing Email",
    "description": "An endpoint for sending a marketing email to a customer or a list of customers\n\nReturns:\n    object (dict): a message",
    "operationId": "send_marketing_email_email_send_marketing_email_post",
    "parameters": [
    {
    "required": false,
    "schema": {
    "title": "Template",
    "type": "string",
    "default": "marketing_email.html"
    },
    "name": "template",
    "in": "query"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Email"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/bigfastapi__email__ResponseModel"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/email/send/marketing-email/schedule": {
    "post": {
    "tags": [
    "Transactional Emails 📧"
    ],
    "summary": "Schedule Marketing Email",
    "description": "An endpoint for scheduling a marketing email to be sent at a particular time\n\nReturns:\n    object (dict): a message",
    "operationId": "schedule_marketing_email_email_send_marketing_email_schedule_post",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Schedule At",
    "type": "string",
    "format": "date-time"
    },
    "name": "schedule_at",
    "in": "query"
    },
    {
    "required": false,
    "schema": {
    "title": "Template",
    "type": "string",
    "default": "marketing_email.html"
    },
    "name": "template",
    "in": "query"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Email"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/files/{bucket_name}/": {
    "get": {
    "tags": [
    "File"
    ],
    "summary": "Get All Files",
    "description": "List all files that are in a single bucket\n\nArgs:\n    bucket_name (str): the bucket to list all the files.\nReturns:\n    List of schema.File: A list of all files in there",
    "operationId": "get_all_files_files__bucket_name___get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Get All Files Files  Bucket Name   Get",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/File"
    }
    }
    }
    }
    }
    }
    }
    },
    "/files/{bucket_name}/{file_name}": {
    "get": {
    "tags": [
    "File"
    ],
    "summary": "Get File",
    "description": "Download a single file from the storage\n\nArgs:\n    bucket_name (str): the bucket to list all the files.\n    file_name (str): the file that you want to retrieve\n\nReturns:\n    A stream of the file",
    "operationId": "get_file_files__bucket_name___file_name__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Bucket Name",
    "type": "string"
    },
    "name": "bucket_name",
    "in": "path"
    },
    {
    "required": true,
    "schema": {
    "title": "File Name",
    "type": "string"
    },
    "name": "file_name",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response"
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/upload-file/{bucket_name}/": {
    "post": {
    "tags": [
    "File"
    ],
    "summary": "Upload File",
    "description": "Upload a single file and save it in the 'bucket' folder with file_name\n\nArgs:\n    bucket_name (str): the folder in which this file should be saved. You can\n                     request a list of files in a single folder if you need\n                     to iterate.\n    file_name (str): the name of the file. Must be unique or the file with that\n                     name will be overwritten.\nReturns:\n    schema.File: A structure representing the file just saved",
    "operationId": "upload_file_upload_file__bucket_name___post",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Bucket Name",
    "type": "string"
    },
    "name": "bucket_name",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "multipart/form-data": {
    "schema": {
    "$ref": "#/components/schemas/Body_upload_file_upload_file__bucket_name___post"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/File"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/comments/{model_name}": {
    "get": {
    "tags": [
    "Comments",
    "Comments"
    ],
    "summary": "Get All Comments Related To Model",
    "operationId": "get_all_comments_related_to_model_comments__model_name__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Model Name",
    "type": "string"
    },
    "name": "model_name",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/comments/{model_name}/{object_id}": {
    "get": {
    "tags": [
    "Comments",
    "Comments"
    ],
    "summary": "Get All Comments For Object",
    "operationId": "get_all_comments_for_object_comments__model_name___object_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Model Name",
    "type": "string"
    },
    "name": "model_name",
    "in": "path"
    },
    {
    "required": true,
    "schema": {
    "title": "Object Id",
    "type": "string"
    },
    "name": "object_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    },
    "post": {
    "tags": [
    "Comments",
    "Comments"
    ],
    "summary": "Create New Comment For Object",
    "operationId": "create_new_comment_for_object_comments__model_name___object_id__post",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Model Name",
    "type": "string"
    },
    "name": "model_name",
    "in": "path"
    },
    {
    "required": true,
    "schema": {
    "title": "Object Id",
    "type": "string"
    },
    "name": "object_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CommentBase"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/comments/{model_name}/{comment_id}/reply": {
    "post": {
    "tags": [
    "Comments",
    "Comments"
    ],
    "summary": "Reply To Comment",
    "operationId": "reply_to_comment_comments__model_name___comment_id__reply_post",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Model Name",
    "type": "string"
    },
    "name": "model_name",
    "in": "path"
    },
    {
    "required": true,
    "schema": {
    "title": "Comment Id",
    "type": "integer"
    },
    "name": "comment_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CommentCreate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/comments/{model_name}/{comment_id}/update": {
    "put": {
    "tags": [
    "Comments",
    "Comments"
    ],
    "summary": "Update Comment By Id",
    "operationId": "update_comment_by_id_comments__model_name___comment_id__update_put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Model Name",
    "type": "string"
    },
    "name": "model_name",
    "in": "path"
    },
    {
    "required": true,
    "schema": {
    "title": "Comment Id",
    "type": "integer"
    },
    "name": "comment_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CommentUpdate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/comments/{model_name}/{comment_id}/delete": {
    "delete": {
    "tags": [
    "Comments",
    "Comments"
    ],
    "summary": "Delete Comment By Id",
    "operationId": "delete_comment_by_id_comments__model_name___comment_id__delete_delete",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Model Name",
    "type": "string"
    },
    "name": "model_name",
    "in": "path"
    },
    {
    "required": true,
    "schema": {
    "title": "Comment Id",
    "type": "integer"
    },
    "name": "comment_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/comments/{model_name}/{comment_id}/vote": {
    "post": {
    "tags": [
    "Comments",
    "Comments"
    ],
    "summary": "Vote On Comment",
    "operationId": "vote_on_comment_comments__model_name___comment_id__vote_post",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Model Name",
    "type": "string"
    },
    "name": "model_name",
    "in": "path"
    },
    {
    "required": true,
    "schema": {
    "title": "Comment Id",
    "type": "integer"
    },
    "name": "comment_id",
    "in": "path"
    },
    {
    "required": true,
    "schema": {
    "title": "Action",
    "type": "string"
    },
    "name": "action",
    "in": "query"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/subscriptions/{org_Id}": {
    "get": {
    "tags": [
    "Subscription",
    "Subscription"
    ],
    "summary": "Indexsubperorg",
    "operationId": "indexSubPerOrg_subscriptions__org_Id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Org Id",
    "type": "string"
    },
    "name": "org_Id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/bigfastapi__schemas__subscription_schema__ResponseList"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/subscriptions": {
    "post": {
    "tags": [
    "Subscription",
    "Subscription"
    ],
    "summary": "Subscribe",
    "operationId": "subscribe_subscriptions_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/_SubBAse"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/bigfastapi__schemas__subscription_schema__ResponseSingle"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/plans/{planId}": {
    "get": {
    "tags": [
    "Plan",
    "Plan"
    ],
    "summary": "Getplan",
    "operationId": "getPlan_plans__planId__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Planid",
    "type": "string"
    },
    "name": "planId",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/bigfastapi__schemas__plan_schema__ResponseSingle"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/tutorial": {
    "post": {
    "tags": [
    "Tutorials",
    "Tutorials"
    ],
    "summary": "Store",
    "operationId": "store_tutorial_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/TutorialRequest"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/TutorialSingleRes"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/tutorials": {
    "get": {
    "tags": [
    "Tutorials",
    "Tutorials"
    ],
    "summary": "Gettutorials",
    "operationId": "getTutorials_tutorials_get",
    "parameters": [
    {
    "required": false,
    "schema": {
    "title": "Category",
    "type": "string"
    },
    "name": "category",
    "in": "query"
    },
    {
    "required": false,
    "schema": {
    "title": "Title",
    "type": "string"
    },
    "name": "title",
    "in": "query"
    },
    {
    "required": false,
    "schema": {
    "title": "Page Size",
    "type": "integer",
    "default": 10
    },
    "name": "page_size",
    "in": "query"
    },
    {
    "required": false,
    "schema": {
    "title": "Page",
    "type": "integer",
    "default": 1
    },
    "name": "page",
    "in": "query"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/TutorialListRes"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/tutorials/group/categories": {
    "get": {
    "tags": [
    "Tutorials",
    "Tutorials"
    ],
    "summary": "Getgroup",
    "operationId": "getGroup_tutorials_group_categories_get",
    "parameters": [
    {
    "required": false,
    "schema": {
    "title": "Page Size",
    "type": "integer",
    "default": 10
    },
    "name": "page_size",
    "in": "query"
    },
    {
    "required": false,
    "schema": {
    "title": "Page",
    "type": "integer",
    "default": 1
    },
    "name": "page",
    "in": "query"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/tutorials/categories": {
    "get": {
    "tags": [
    "Tutorials",
    "Tutorials"
    ],
    "summary": "Getcategorylsit",
    "operationId": "getCategoryLsit_tutorials_categories_get",
    "parameters": [
    {
    "required": false,
    "schema": {
    "title": "Page Size",
    "type": "integer",
    "default": 10
    },
    "name": "page_size",
    "in": "query"
    },
    {
    "required": false,
    "schema": {
    "title": "Page",
    "type": "integer",
    "default": 1
    },
    "name": "page",
    "in": "query"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/tutorials/search/{keyword}": {
    "get": {
    "tags": [
    "Tutorials",
    "Tutorials"
    ],
    "summary": "Searchbykeyword",
    "operationId": "searchByKeyWord_tutorials_search__keyword__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Keyword",
    "type": "string"
    },
    "name": "keyword",
    "in": "path"
    },
    {
    "required": false,
    "schema": {
    "title": "Page Size",
    "type": "integer",
    "default": 10
    },
    "name": "page_size",
    "in": "query"
    },
    {
    "required": false,
    "schema": {
    "title": "Page",
    "type": "integer",
    "default": 1
    },
    "name": "page",
    "in": "query"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/TutorialListRes"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/tutorials/{itemId}": {
    "put": {
    "tags": [
    "Tutorials",
    "Tutorials"
    ],
    "summary": "Update",
    "operationId": "update_tutorials__itemId__put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Itemid",
    "type": "string"
    },
    "name": "itemId",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/TutorialRequest"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/tutorials/{itemId}/user/{userId}": {
    "delete": {
    "tags": [
    "Tutorials",
    "Tutorials"
    ],
    "summary": "Delete",
    "operationId": "delete_tutorials__itemId__user__userId__delete",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Itemid",
    "type": "string"
    },
    "name": "itemId",
    "in": "path"
    },
    {
    "required": true,
    "schema": {
    "title": "Userid",
    "type": "string"
    },
    "name": "userId",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/bank": {
    "post": {
    "tags": [
    "Banks"
    ],
    "summary": "Add Bank Detail",
    "description": "Creates a new bank object.\nArgs:\n    request: A pydantic schema that defines the room request parameters\n    db (Session): The database for storing the article object\nReturns:\n    HTTP_201_CREATED (new bank details added)\nRaises\n    HTTP_424_FAILED_DEPENDENCY: failed to create bank object\n    HTTP_403_FORBIDDEN: incomplete details",
    "operationId": "add_bank_detail_bank_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/AddBank"
    }
    }
    },
    "required": true
    },
    "responses": {
    "201": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/BankResponse"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/banks": {
    "get": {
    "tags": [
    "Banks"
    ],
    "summary": "Get All Banks",
    "description": "Fetches all available bank details in the database.\nArgs:\n    user: authenticates that the user is a logged in user\n    db (Session): The database for storing the article object\nReturns:\n    HTTP_200_OK (list of all registered bank details)\nRaises\n    HTTP_424_FAILED_DEPENDENCY: failed to fetch banks",
    "operationId": "get_all_banks_banks_get",
    "parameters": [
    {
    "required": false,
    "schema": {
    "title": "Page",
    "minimum": 1,
    "type": "integer",
    "default": 1
    },
    "name": "page",
    "in": "query"
    },
    {
    "required": false,
    "schema": {
    "title": "Size",
    "maximum": 100,
    "minimum": 1,
    "type": "integer",
    "default": 50
    },
    "name": "size",
    "in": "query"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Page_BankResponse_"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/bank/{bank_id}": {
    "get": {
    "tags": [
    "Banks"
    ],
    "summary": "Get Single Bank",
    "description": "Fetches single bank detail given bank_id.\nArgs:\n    bank_id: a unique identifier of the bank object.\n    user: authenticates that the user is a logged in user.\n    db (Session): The database for storing the article object.\nReturns:\n    HTTP_200_OK (bank object)\nRaises\n    HTTP_424_FAILED_DEPENDENCY: failed to create bank object\n    HTTP_4O4_NOT_FOUND: Bank does not exist.",
    "operationId": "get_single_bank_bank__bank_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Bank Id",
    "type": "string"
    },
    "name": "bank_id",
    "in": "path"
    },
    {
    "required": true,
    "schema": {
    "title": "Org Id",
    "type": "string"
    },
    "name": "org_id",
    "in": "query"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/BankResponse"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    },
    "delete": {
    "tags": [
    "Banks"
    ],
    "summary": "Delete Bank",
    "description": "delete a given bank of id bank_id.\nArgs:\n    bank_id: a unique identifier of the bank object.\n    user: authenticates that the user is a logged in user.\n    db (Session): The database for storing the article object.\nReturns:\n    HTTP_200_OK (sucess response))\nRaises\n    HTTP_424_FAILED_DEPENDENCY: failed to delete bank details\n    HTTP_4O4_NOT_FOUND: Bank does not exist.",
    "operationId": "delete_bank_bank__bank_id__delete",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Bank Id",
    "type": "string"
    },
    "name": "bank_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/bank/schema": {
    "get": {
    "tags": [
    "Banks"
    ],
    "summary": "Get Country Schema",
    "description": "Fetches the schema valid for each country    .\nArgs:\n    country: Country whose schema structure is to be fetched.\nReturns:\n    HTTP_200_OK (bank object)\nRaises: \n    HTTP_4O4_NOT_FOUND: Country not in the list of supported countries.",
    "operationId": "get_country_schema_bank_schema_get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Country",
    "type": "string"
    },
    "name": "country",
    "in": "query"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/bank/validator": {
    "get": {
    "tags": [
    "Banks"
    ],
    "summary": "Validate Bank Details",
    "description": "Fetches details needed to add bank details based on country provided.\nArgs:\n    country: Country whose schema structure is to be fetched.\nReturns:\n    HTTP_200_OK (bank object)\nRaises\n    HTTP_4O4_NOT_FOUND: Country not in the list of supported countries.",
    "operationId": "validate_bank_details_bank_validator_get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Country",
    "type": "string"
    },
    "name": "country",
    "in": "query"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/organizations": {
    "get": {
    "tags": [
    "Organization",
    "Organization"
    ],
    "summary": "Get Organizations",
    "operationId": "get_organizations_organizations_get",
    "parameters": [
    {
    "required": false,
    "schema": {
    "title": "Page Size",
    "type": "integer",
    "default": 15
    },
    "name": "page_size",
    "in": "query"
    },
    {
    "required": false,
    "schema": {
    "title": "Page Number",
    "type": "integer",
    "default": 1
    },
    "name": "page_number",
    "in": "query"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    },
    "post": {
    "tags": [
    "Organization",
    "Organization"
    ],
    "summary": "Create Organization",
    "operationId": "create_organization_organizations_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/OrganizationCreate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Organization"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/organizations/{organization_id}": {
    "get": {
    "tags": [
    "Organization",
    "Organization"
    ],
    "summary": "Get Organization",
    "operationId": "get_organization_organizations__organization_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Organization Id",
    "type": "string"
    },
    "name": "organization_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    },
    "put": {
    "tags": [
    "Organization",
    "Organization"
    ],
    "summary": "Update Organization",
    "operationId": "update_organization_organizations__organization_id__put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Organization Id",
    "type": "string"
    },
    "name": "organization_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/OrganizationUpdate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/OrganizationUpdate"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    },
    "delete": {
    "tags": [
    "Organization",
    "Organization"
    ],
    "summary": "Delete Organization",
    "operationId": "delete_organization_organizations__organization_id__delete",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Organization Id",
    "type": "string"
    },
    "name": "organization_id",
    "in": "path"
    }
    ],
    "responses": {
    "204": {
    "description": "Successful Response"
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/organizations/{organization_id}/users": {
    "get": {
    "tags": [
    "Organization",
    "Organization"
    ],
    "summary": "Get Organization Users",
    "description": "An endpoint that returns the users in an organization.",
    "operationId": "get_organization_users_organizations__organization_id__users_get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Organization Id",
    "type": "string"
    },
    "name": "organization_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/organization/{organization_id}/roles": {
    "get": {
    "tags": [
    "Organization",
    "Organization"
    ],
    "summary": "Get Roles",
    "operationId": "get_roles_organization__organization_id__roles_get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Organization Id",
    "type": "string"
    },
    "name": "organization_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/organizations/invites/{organization_id}": {
    "get": {
    "tags": [
    "Organization",
    "Organization"
    ],
    "summary": "Get Pending Invites",
    "operationId": "get_pending_invites_organizations_invites__organization_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Organization Id",
    "type": "string"
    },
    "name": "organization_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/organizations/{organization_id}/update-image": {
    "put": {
    "tags": [
    "Organization",
    "Organization"
    ],
    "summary": "Organization Image Upload",
    "operationId": "organization_image_upload_organizations__organization_id__update_image_put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Organization Id",
    "type": "string"
    },
    "name": "organization_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "multipart/form-data": {
    "schema": {
    "$ref": "#/components/schemas/Body_organization_image_upload_organizations__organization_id__update_image_put"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/organizations/{organization_id}/image": {
    "get": {
    "tags": [
    "Organization",
    "Organization"
    ],
    "summary": "Get Organization Image Upload",
    "operationId": "get_organization_image_upload_organizations__organization_id__image_get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Organization Id",
    "type": "string"
    },
    "name": "organization_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/qrcode": {
    "get": {
    "tags": [
    "qrcode",
    "qrcode"
    ],
    "summary": "Get Qrcode",
    "operationId": "get_qrcode_qrcode_get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Data",
    "type": "string"
    },
    "name": "data",
    "in": "query"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/organization/{org_id}/settings": {
    "get": {
    "tags": [
    "Settings",
    "Settings"
    ],
    "summary": "Get Organization Settings",
    "operationId": "get_organization_settings_organization__org_id__settings_get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Org Id",
    "type": "string"
    },
    "name": "org_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Settings"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    },
    "put": {
    "tags": [
    "Settings",
    "Settings"
    ],
    "summary": "Update Organization Settings",
    "operationId": "update_organization_settings_organization__org_id__settings_put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Org Id",
    "type": "string"
    },
    "name": "org_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/SettingsUpdate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "202": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/SettingsUpdate"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    },
    "post": {
    "tags": [
    "Settings",
    "Settings"
    ],
    "summary": "Add Organization Settings",
    "operationId": "add_organization_settings_organization__org_id__settings_post",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Org Id",
    "type": "string"
    },
    "name": "org_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Settings"
    }
    }
    },
    "required": true
    },
    "responses": {
    "201": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Settings"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/wallets": {
    "post": {
    "tags": [
    "Wallet",
    "Wallet"
    ],
    "summary": "Create Wallet",
    "operationId": "create_wallet_wallets_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/WalletCreate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Wallet"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/wallets/{organization_id}": {
    "get": {
    "tags": [
    "Wallet",
    "Wallet"
    ],
    "summary": "Get Organization Wallets",
    "description": "Get all the wallets of an organization",
    "operationId": "get_organization_wallets_wallets__organization_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Organization Id",
    "type": "string"
    },
    "name": "organization_id",
    "in": "path"
    },
    {
    "required": false,
    "schema": {
    "title": "Page",
    "minimum": 1,
    "type": "integer",
    "default": 1
    },
    "name": "page",
    "in": "query"
    },
    {
    "required": false,
    "schema": {
    "title": "Size",
    "maximum": 100,
    "minimum": 1,
    "type": "integer",
    "default": 50
    },
    "name": "size",
    "in": "query"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Page_Wallet_"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/wallets/{organization_id}/{currency}": {
    "get": {
    "tags": [
    "Wallet",
    "Wallet"
    ],
    "summary": "Get Organization Wallet",
    "description": "Gets the wallet of an organization",
    "operationId": "get_organization_wallet_wallets__organization_id___currency__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Organization Id",
    "type": "string"
    },
    "name": "organization_id",
    "in": "path"
    },
    {
    "required": true,
    "schema": {
    "title": "Currency",
    "type": "string"
    },
    "name": "currency",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Wallet"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/wallets/{organization_id}/{currency}/transactions": {
    "get": {
    "tags": [
    "Wallet",
    "Wallet"
    ],
    "summary": "Get Wallet Transactions",
    "description": "Get wallet transactions",
    "operationId": "get_wallet_transactions_wallets__organization_id___currency__transactions_get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Organization Id",
    "type": "string"
    },
    "name": "organization_id",
    "in": "path"
    },
    {
    "required": true,
    "schema": {
    "title": "Currency",
    "type": "string"
    },
    "name": "currency",
    "in": "path"
    },
    {
    "required": false,
    "schema": {
    "title": "Page",
    "minimum": 1,
    "type": "integer",
    "default": 1
    },
    "name": "page",
    "in": "query"
    },
    {
    "required": false,
    "schema": {
    "title": "Size",
    "maximum": 100,
    "minimum": 1,
    "type": "integer",
    "default": 50
    },
    "name": "size",
    "in": "query"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Page_WalletTransaction_"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/credits/rates": {
    "get": {
    "tags": [
    "CreditWallet",
    "CreditWallet"
    ],
    "summary": "Get Rates",
    "operationId": "get_rates_credits_rates_get",
    "parameters": [
    {
    "required": false,
    "schema": {
    "title": "Page",
    "minimum": 1,
    "type": "integer",
    "default": 1
    },
    "name": "page",
    "in": "query"
    },
    {
    "required": false,
    "schema": {
    "title": "Size",
    "maximum": 100,
    "minimum": 1,
    "type": "integer",
    "default": 50
    },
    "name": "size",
    "in": "query"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Page_CreditWalletConversion_"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    },
    "post": {
    "tags": [
    "CreditWallet",
    "CreditWallet"
    ],
    "summary": "Add Rate",
    "operationId": "add_rate_credits_rates_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CreditWalletConversion"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CreditWalletConversion"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/credits/rates/{currency}": {
    "get": {
    "tags": [
    "CreditWallet",
    "CreditWallet"
    ],
    "summary": "Get Rate",
    "operationId": "get_rate_credits_rates__currency__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Currency",
    "type": "string"
    },
    "name": "currency",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CreditWalletConversion"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/credits/callback": {
    "get": {
    "tags": [
    "CreditWallet",
    "CreditWallet"
    ],
    "summary": "Verify Payment Transaction",
    "operationId": "verify_payment_transaction_credits_callback_get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Status",
    "type": "string"
    },
    "name": "status",
    "in": "query"
    },
    {
    "required": true,
    "schema": {
    "title": "Tx Ref",
    "type": "string"
    },
    "name": "tx_ref",
    "in": "query"
    },
    {
    "required": false,
    "schema": {
    "title": "Transaction Id",
    "default": ""
    },
    "name": "transaction_id",
    "in": "query"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/credits/{organization_id}": {
    "get": {
    "tags": [
    "CreditWallet",
    "CreditWallet"
    ],
    "summary": "Get Credit",
    "description": "Gets the credit of an organization",
    "operationId": "get_credit_credits__organization_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Organization Id",
    "type": "string"
    },
    "name": "organization_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CreditWalletResponse"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    },
    "post": {
    "tags": [
    "CreditWallet",
    "CreditWallet"
    ],
    "summary": "Add Credit",
    "description": "Creates and returns a payment link",
    "operationId": "add_credit_credits__organization_id__post",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Organization Id",
    "type": "string"
    },
    "name": "organization_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CreditWalletFund"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CreditWalletFundResponse"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/credits/{organization_id}/history": {
    "get": {
    "tags": [
    "CreditWallet",
    "CreditWallet"
    ],
    "summary": "Get Credit History",
    "description": "Returns credit wallet history",
    "operationId": "get_credit_history_credits__organization_id__history_get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Organization Id",
    "type": "string"
    },
    "name": "organization_id",
    "in": "path"
    },
    {
    "required": false,
    "schema": {
    "title": "Page",
    "minimum": 1,
    "type": "integer",
    "default": 1
    },
    "name": "page",
    "in": "query"
    },
    {
    "required": false,
    "schema": {
    "title": "Size",
    "maximum": 100,
    "minimum": 1,
    "type": "integer",
    "default": 50
    },
    "name": "size",
    "in": "query"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Page_CreditWalletHistory_"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/notification/{notification_id}": {
    "get": {
    "tags": [
    "Notification",
    "Notification"
    ],
    "summary": "Get A Notification",
    "description": "intro-This endpoint allows you to details of a particular notification. You need to make a get request to the /notification/{notification_id} \n\nparamDesc- On get request the url takes a query parameter \"notification_id\" i.e /notification/notification_id:\n    param-notification_id: This is the unique identifier of the notification\n\nreturnDesc-On sucessful request, it returns\n    returnBody- details of the notification.",
    "operationId": "get_a_notification_notification__notification_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Notification Id",
    "type": "string"
    },
    "name": "notification_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Notification"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    },
    "delete": {
    "tags": [
    "Notification",
    "Notification"
    ],
    "summary": "Delete Notification",
    "description": "intro-This endpoint allows you to delete a particular notification from the database. You need to make a delete request to the /notification/{notification_id} endpoint.\n\nparamDesc- -On delete request the url takes a query parameter \"notification_id\" i.e /notification/notification_id:\n    param-notification_id: This is the unique identifier of the notification\n\nreturnDesc-On sucessful request, it returns\n    returnBody- \"success\".",
    "operationId": "delete_notification_notification__notification_id__delete",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Notification Id",
    "type": "string"
    },
    "name": "notification_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/notifications": {
    "get": {
    "tags": [
    "Notification",
    "Notification"
    ],
    "summary": "Get All Notifications",
    "description": "intro-This endpoint allows you to retrieve all notifications from the database. To retrieve you need to make a get request to the /notifications endpoint\n\n\nreturnDesc-On sucessful request, it returns\n    returnBody- an array of notifications.",
    "operationId": "get_all_notifications_notifications_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Get All Notifications Notifications Get",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/Notification"
    }
    }
    }
    }
    }
    }
    }
    },
    "/notification": {
    "post": {
    "tags": [
    "Notification",
    "Notification"
    ],
    "summary": "Create Notification",
    "description": "intro-This endpoint allows you to create a new notification. To create, you need to make a post request to the /notification endpoint\n\n    reqBody-content: This is the content of the notification\n    reqBody-recipient: This the receiver of the notification\n    reqBody-reference: This is a unique identifier of the notification\n    reqBody-creator: This is the creator of the notification\n\nreturnDesc-On sucessful request, it returns\n    returnBody- the details of the newly created notification.",
    "operationId": "create_notification_notification_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/NotificationCreate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Notification"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/notification/{notification_id}/read": {
    "put": {
    "tags": [
    "Notification",
    "Notification"
    ],
    "summary": "Mark Notification Read",
    "description": "intro-This endpoint allows you mark a queried notifications as read. To use, you need to make a put request to the /notification/{notification_id}/read enpoint. \n\nparamDesc- On put request the url takes a query parameter \"notification_id\" i.e /notification/notification_id/read:\n    param-notification_id: This is the unique identifier of the notification\n\nreturnDesc-On sucessful request, it returns\n    returnBody- details of the updated notification.",
    "operationId": "mark_notification_read_notification__notification_id__read_put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Notification Id",
    "type": "string"
    },
    "name": "notification_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Notification"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/notifications/read": {
    "put": {
    "tags": [
    "Notification",
    "Notification"
    ],
    "summary": "Mark Notifications Read",
    "description": "intro-This endpoint allows you mark all notifications as read. To use, you need to make a put request to the /notification/read enpoint. \n\nreturnDesc-On sucessful request, it returns\n    returnBody- an array of the notifications.",
    "operationId": "mark_notifications_read_notifications_read_put",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Mark Notifications Read Notifications Read Put",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/Notification"
    }
    }
    }
    }
    }
    }
    }
    },
    "/notifications/{notification_id}": {
    "put": {
    "tags": [
    "Notification",
    "Notification"
    ],
    "summary": "Update Notification",
    "description": "intro-This endpoint allows you to update a particular notification. You need to make a put request to the /notification/{notification_id} endpoint.\n\nparamDesc- -On put request the url takes a query parameter \"notification_id\" i.e /notification/notification_id:\n    param-notification_id: This is the unique identifier of the notification\n    reqBody-content: This is the content of the notification\n    reqBody-recipient: This the receiver of the notification\n    reqBody-reference: This is a unique identifier of the notification\n\nreturnDesc-On sucessful request, it returns\n    returnBody- \"success\".",
    "operationId": "update_notification_notifications__notification_id__put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Notification Id",
    "type": "string"
    },
    "name": "notification_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/NotificationUpdate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Notification"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/exporttopdf": {
    "post": {
    "summary": "Converttopdf",
    "operationId": "convertToPdf_exporttopdf_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Format"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/File"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/sendreceipt": {
    "post": {
    "summary": "Sendreceipt",
    "operationId": "sendReceipt_sendreceipt_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/atrributes"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/customers": {
    "get": {
    "tags": [
    "Customers 💁"
    ],
    "summary": "Get Customers",
    "operationId": "get_customers_customers_get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Organization Id",
    "type": "string"
    },
    "name": "organization_id",
    "in": "query"
    },
    {
    "required": false,
    "schema": {
    "title": "Search Value",
    "type": "string"
    },
    "name": "search_value",
    "in": "query"
    },
    {
    "required": false,
    "schema": {
    "title": "Sorting Key",
    "type": "string"
    },
    "name": "sorting_key",
    "in": "query"
    },
    {
    "required": false,
    "schema": {
    "title": "Reverse Sort",
    "type": "boolean",
    "default": false
    },
    "name": "reverse_sort",
    "in": "query"
    },
    {
    "required": false,
    "schema": {
    "title": "Page",
    "minimum": 1,
    "type": "integer",
    "default": 1
    },
    "name": "page",
    "in": "query"
    },
    {
    "required": false,
    "schema": {
    "title": "Size",
    "maximum": 100,
    "minimum": 1,
    "type": "integer",
    "default": 50
    },
    "name": "size",
    "in": "query"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Page_Customer_"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    },
    "post": {
    "tags": [
    "Customers 💁"
    ],
    "summary": "Create Customer",
    "operationId": "create_customer_customers_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CustomerCreate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "201": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CustomerCreateResponse"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/customers/import/{organization_id}": {
    "post": {
    "tags": [
    "Customers 💁"
    ],
    "summary": "Create Bulk Customer",
    "operationId": "create_bulk_customer_customers_import__organization_id__post",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Organization Id",
    "type": "string"
    },
    "name": "organization_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "multipart/form-data": {
    "schema": {
    "$ref": "#/components/schemas/Body_create_bulk_customer_customers_import__organization_id__post"
    }
    }
    },
    "required": true
    },
    "responses": {
    "201": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Create Bulk Customer Customers Import  Organization Id  Post",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/CustomerCreateResponse"
    }
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/customers/{customer_id}": {
    "get": {
    "tags": [
    "Customers 💁"
    ],
    "summary": "Get Customer",
    "operationId": "get_customer_customers__customer_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Customer Id",
    "type": "string"
    },
    "name": "customer_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/Customer"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    },
    "put": {
    "tags": [
    "Customers 💁"
    ],
    "summary": "Update Customer",
    "operationId": "update_customer_customers__customer_id__put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Customer Id",
    "type": "string"
    },
    "name": "customer_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CustomerUpdate"
    }
    }
    },
    "required": true
    },
    "responses": {
    "202": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CustomerCreateResponse"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    },
    "delete": {
    "tags": [
    "Customers 💁"
    ],
    "summary": "Soft Delete Customer",
    "operationId": "soft_delete_customer_customers__customer_id__delete",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Customer Id",
    "type": "string"
    },
    "name": "customer_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/bigfastapi__schemas__customer_schemas__ResponseModel"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/customers/organization/{organization_id}": {
    "delete": {
    "tags": [
    "Customers 💁"
    ],
    "summary": "Soft Delete All Customers",
    "operationId": "soft_delete_all_customers_customers_organization__organization_id__delete",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Organization Id",
    "type": "string"
    },
    "name": "organization_id",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/bigfastapi__schemas__customer_schemas__ResponseModel"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/sms/send": {
    "post": {
    "tags": [
    "SMS"
    ],
    "summary": "Send Sms",
    "description": "An endpoint used to send an sms\n\nReturns:\n    object (dict): status code, message",
    "operationId": "send_sms_sms_send_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/SMS"
    }
    }
    },
    "required": true
    },
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/bigfastapi__sms__ResponseModel"
    }
    }
    }
    },
    "422": {
    "description": "Validation Error",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/HTTPValidationError"
    }
    }
    }
    }
    }
    }
    },
    "/": {
    "get": {
    "tags": [
    "Home"
    ],
    "summary": "Get Root",
    "operationId": "get_root__get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    }
    }
    }
    },
    "/test": {
    "get": {
    "tags": [
    "Test"
    ],
    "summary": "Run Test",
    "operationId": "run_test_test_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {}
    }
    }
    }
    }
    }
    }
    },
    "components": {
    "schemas": {
    "AddBank": {
    "title": "AddBank",
    "required": [
    "account_number",
    "bank_name",
    "country",
    "date_created"
    ],
    "type": "object",
    "properties": {
    "account_number": {
    "title": "Account Number",
    "type": "integer"
    },
    "bank_name": {
    "title": "Bank Name",
    "type": "string"
    },
    "account_name": {
    "title": "Account Name",
    "type": "string"
    },
    "bank_type": {
    "title": "Bank Type",
    "type": "string"
    },
    "organisation_id": {
    "title": "Organisation Id",
    "type": "string"
    },
    "address": {
    "title": "Address",
    "type": "string"
    },
    "swift_code": {
    "title": "Swift Code",
    "type": "string"
    },
    "sort_code": {
    "title": "Sort Code",
    "type": "string"
    },
    "country": {
    "$ref": "#/components/schemas/Countries"
    },
    "aba_routing_number": {
    "title": "Aba Routing Number",
    "type": "string"
    },
    "iban": {
    "title": "Iban",
    "type": "string"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "BankResponse": {
    "title": "BankResponse",
    "required": [
    "account_number",
    "bank_name",
    "country",
    "date_created",
    "id",
    "creator_id"
    ],
    "type": "object",
    "properties": {
    "account_number": {
    "title": "Account Number",
    "type": "integer"
    },
    "bank_name": {
    "title": "Bank Name",
    "type": "string"
    },
    "account_name": {
    "title": "Account Name",
    "type": "string"
    },
    "bank_type": {
    "title": "Bank Type",
    "type": "string"
    },
    "organisation_id": {
    "title": "Organisation Id",
    "type": "string"
    },
    "address": {
    "title": "Address",
    "type": "string"
    },
    "swift_code": {
    "title": "Swift Code",
    "type": "string"
    },
    "sort_code": {
    "title": "Sort Code",
    "type": "string"
    },
    "country": {
    "$ref": "#/components/schemas/Countries"
    },
    "aba_routing_number": {
    "title": "Aba Routing Number",
    "type": "string"
    },
    "iban": {
    "title": "Iban",
    "type": "string"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    },
    "id": {
    "title": "Id",
    "type": "string"
    },
    "creator_id": {
    "title": "Creator Id",
    "type": "string"
    }
    }
    },
    "Blog": {
    "title": "Blog",
    "required": [
    "title",
    "content",
    "id",
    "creator",
    "date_created",
    "last_updated"
    ],
    "type": "object",
    "properties": {
    "title": {
    "title": "Title",
    "type": "string"
    },
    "content": {
    "title": "Content",
    "type": "string"
    },
    "id": {
    "title": "Id",
    "type": "string"
    },
    "creator": {
    "title": "Creator",
    "type": "string"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    },
    "last_updated": {
    "title": "Last Updated",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "BlogCreate": {
    "title": "BlogCreate",
    "required": [
    "title",
    "content"
    ],
    "type": "object",
    "properties": {
    "title": {
    "title": "Title",
    "type": "string"
    },
    "content": {
    "title": "Content",
    "type": "string"
    }
    }
    },
    "BlogUpdate": {
    "title": "BlogUpdate",
    "required": [
    "title",
    "content"
    ],
    "type": "object",
    "properties": {
    "title": {
    "title": "Title",
    "type": "string"
    },
    "content": {
    "title": "Content",
    "type": "string"
    }
    }
    },
    "Body_create_bulk_customer_customers_import__organization_id__post": {
    "title": "Body_create_bulk_customer_customers_import__organization_id__post",
    "required": [
    "file"
    ],
    "type": "object",
    "properties": {
    "file": {
    "title": "File",
    "type": "string",
    "format": "binary"
    }
    }
    },
    "Body_organization_image_upload_organizations__organization_id__update_image_put": {
    "title": "Body_organization_image_upload_organizations__organization_id__update_image_put",
    "required": [
    "file"
    ],
    "type": "object",
    "properties": {
    "file": {
    "title": "File",
    "type": "string",
    "format": "binary"
    }
    }
    },
    "Body_updatePassword_users_image_upload_patch": {
    "title": "Body_updatePassword_users_image_upload_patch",
    "required": [
    "file"
    ],
    "type": "object",
    "properties": {
    "file": {
    "title": "File",
    "type": "string",
    "format": "binary"
    }
    }
    },
    "Body_upload_file_upload_file__bucket_name___post": {
    "title": "Body_upload_file_upload_file__bucket_name___post",
    "required": [
    "file"
    ],
    "type": "object",
    "properties": {
    "file": {
    "title": "File",
    "type": "string",
    "format": "binary"
    }
    }
    },
    "ClosedTicket": {
    "title": "ClosedTicket",
    "required": [
    "title",
    "issue",
    "opened_by",
    "short_id",
    "closed",
    "date_created",
    "closed_by"
    ],
    "type": "object",
    "properties": {
    "title": {
    "title": "Title",
    "type": "string"
    },
    "issue": {
    "title": "Issue",
    "type": "string"
    },
    "opened_by": {
    "title": "Opened By",
    "type": "string"
    },
    "short_id": {
    "title": "Short Id",
    "type": "string"
    },
    "closed": {
    "title": "Closed",
    "type": "boolean"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    },
    "closed_by": {
    "title": "Closed By",
    "type": "string"
    }
    }
    },
    "CommentBase": {
    "title": "CommentBase",
    "required": [
    "text",
    "name",
    "email"
    ],
    "type": "object",
    "properties": {
    "text": {
    "title": "Text",
    "type": "string"
    },
    "name": {
    "title": "Name",
    "type": "string"
    },
    "email": {
    "title": "Email",
    "type": "string"
    },
    "commenter_id": {
    "title": "Commenter Id",
    "type": "string"
    }
    }
    },
    "CommentCreate": {
    "title": "CommentCreate",
    "required": [
    "text",
    "name",
    "email"
    ],
    "type": "object",
    "properties": {
    "text": {
    "title": "Text",
    "type": "string"
    },
    "name": {
    "title": "Name",
    "type": "string"
    },
    "email": {
    "title": "Email",
    "type": "string"
    },
    "commenter_id": {
    "title": "Commenter Id",
    "type": "string"
    }
    }
    },
    "CommentUpdate": {
    "title": "CommentUpdate",
    "required": [
    "text",
    "name",
    "email"
    ],
    "type": "object",
    "properties": {
    "text": {
    "title": "Text",
    "type": "string"
    },
    "name": {
    "title": "Name",
    "type": "string"
    },
    "email": {
    "title": "Email",
    "type": "string"
    },
    "commenter_id": {
    "title": "Commenter Id",
    "type": "string"
    }
    }
    },
    "Contact": {
    "title": "Contact",
    "required": [
    "address",
    "phone",
    "map_coordinates",
    "id",
    "date_created",
    "last_updated"
    ],
    "type": "object",
    "properties": {
    "address": {
    "title": "Address",
    "type": "string"
    },
    "phone": {
    "title": "Phone",
    "type": "string"
    },
    "map_coordinates": {
    "title": "Map Coordinates",
    "type": "string"
    },
    "id": {
    "title": "Id",
    "type": "string"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    },
    "last_updated": {
    "title": "Last Updated",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "ContactBase": {
    "title": "ContactBase",
    "required": [
    "address",
    "phone",
    "map_coordinates"
    ],
    "type": "object",
    "properties": {
    "address": {
    "title": "Address",
    "type": "string"
    },
    "phone": {
    "title": "Phone",
    "type": "string"
    },
    "map_coordinates": {
    "title": "Map Coordinates",
    "type": "string"
    }
    }
    },
    "ContactUS": {
    "title": "ContactUS",
    "required": [
    "name",
    "email",
    "message",
    "id",
    "date_created"
    ],
    "type": "object",
    "properties": {
    "name": {
    "title": "Name",
    "type": "string"
    },
    "email": {
    "title": "Email",
    "type": "string"
    },
    "subject": {
    "title": "Subject",
    "type": "string"
    },
    "message": {
    "title": "Message",
    "type": "string"
    },
    "id": {
    "title": "Id",
    "type": "string"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "ContactUSB": {
    "title": "ContactUSB",
    "required": [
    "name",
    "email",
    "message"
    ],
    "type": "object",
    "properties": {
    "name": {
    "title": "Name",
    "type": "string"
    },
    "email": {
    "title": "Email",
    "type": "string"
    },
    "subject": {
    "title": "Subject",
    "type": "string"
    },
    "message": {
    "title": "Message",
    "type": "string"
    }
    }
    },
    "Countries": {
    "title": "Countries",
    "enum": [
    "Nigeria",
    "USA",
    "Australia",
    "Ireland"
    ],
    "type": "string",
    "description": "Provides choices for supported countries.\n    "
    },
    "Country": {
    "title": "Country",
    "required": [
    "name",
    "iso3",
    "iso2",
    "dial_code",
    "states"
    ],
    "type": "object",
    "properties": {
    "name": {
    "title": "Name",
    "type": "string"
    },
    "iso3": {
    "title": "Iso3",
    "type": "string"
    },
    "iso2": {
    "title": "Iso2",
    "type": "string"
    },
    "dial_code": {
    "title": "Dial Code",
    "type": "string"
    },
    "states": {
    "title": "States",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/State"
    }
    }
    }
    },
    "CreateFaqRes": {
    "title": "CreateFaqRes",
    "required": [
    "message",
    "faq"
    ],
    "type": "object",
    "properties": {
    "message": {
    "title": "Message",
    "type": "string"
    },
    "faq": {
    "$ref": "#/components/schemas/Faq"
    }
    }
    },
    "CreateTicketRes": {
    "title": "CreateTicketRes",
    "required": [
    "message",
    "ticket"
    ],
    "type": "object",
    "properties": {
    "message": {
    "title": "Message",
    "type": "string"
    },
    "ticket": {
    "$ref": "#/components/schemas/TicketInDB"
    }
    }
    },
    "CreditWalletConversion": {
    "title": "CreditWalletConversion",
    "required": [
    "rate",
    "currency_code"
    ],
    "type": "object",
    "properties": {
    "rate": {
    "title": "Rate",
    "type": "number"
    },
    "currency_code": {
    "title": "Currency Code",
    "type": "string"
    }
    }
    },
    "CreditWalletFund": {
    "title": "CreditWalletFund",
    "required": [
    "currency",
    "amount",
    "redirect_url"
    ],
    "type": "object",
    "properties": {
    "currency": {
    "title": "Currency",
    "type": "string"
    },
    "amount": {
    "title": "Amount",
    "type": "number"
    },
    "redirect_url": {
    "title": "Redirect Url",
    "type": "string"
    }
    }
    },
    "CreditWalletFundResponse": {
    "title": "CreditWalletFundResponse",
    "required": [
    "link"
    ],
    "type": "object",
    "properties": {
    "link": {
    "title": "Link",
    "type": "string"
    }
    }
    },
    "CreditWalletHistory": {
    "title": "CreditWalletHistory",
    "required": [
    "id",
    "amount",
    "date",
    "reference",
    "credit_wallet_id"
    ],
    "type": "object",
    "properties": {
    "id": {
    "title": "Id",
    "type": "string"
    },
    "amount": {
    "title": "Amount",
    "type": "number"
    },
    "date": {
    "title": "Date",
    "type": "string",
    "format": "date-time"
    },
    "reference": {
    "title": "Reference",
    "type": "string"
    },
    "credit_wallet_id": {
    "title": "Credit Wallet Id",
    "type": "string"
    }
    }
    },
    "CreditWalletResponse": {
    "title": "CreditWalletResponse",
    "required": [
    "type",
    "amount",
    "last_updated",
    "id"
    ],
    "type": "object",
    "properties": {
    "type": {
    "title": "Type",
    "type": "string"
    },
    "amount": {
    "title": "Amount",
    "type": "number"
    },
    "last_updated": {
    "title": "Last Updated",
    "type": "string",
    "format": "date-time"
    },
    "id": {
    "title": "Id",
    "type": "string"
    }
    }
    },
    "Customer": {
    "title": "Customer",
    "required": [
    "first_name",
    "last_name",
    "unique_id",
    "organization_id",
    "customer_id",
    "date_created",
    "last_updated"
    ],
    "type": "object",
    "properties": {
    "first_name": {
    "title": "First Name",
    "type": "string"
    },
    "last_name": {
    "title": "Last Name",
    "type": "string"
    },
    "unique_id": {
    "title": "Unique Id",
    "type": "string"
    },
    "email": {
    "title": "Email",
    "type": "string",
    "format": "email"
    },
    "phone_number": {
    "title": "Phone Number",
    "type": "string"
    },
    "business_name": {
    "title": "Business Name",
    "type": "string"
    },
    "location": {
    "title": "Location",
    "type": "string"
    },
    "gender": {
    "title": "Gender",
    "type": "string"
    },
    "age": {
    "title": "Age",
    "type": "integer"
    },
    "postal_code": {
    "title": "Postal Code",
    "type": "string"
    },
    "language": {
    "title": "Language",
    "type": "string"
    },
    "country": {
    "title": "Country",
    "type": "string"
    },
    "city": {
    "title": "City",
    "type": "string"
    },
    "region": {
    "title": "Region",
    "type": "string"
    },
    "country_code": {
    "title": "Country Code",
    "type": "string"
    },
    "other_information": {
    "title": "Other Information",
    "default": {}
    },
    "organization_id": {
    "title": "Organization Id",
    "type": "string"
    },
    "customer_id": {
    "title": "Customer Id",
    "type": "string"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    },
    "last_updated": {
    "title": "Last Updated",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "CustomerCreate": {
    "title": "CustomerCreate",
    "required": [
    "first_name",
    "last_name",
    "unique_id",
    "organization_id"
    ],
    "type": "object",
    "properties": {
    "first_name": {
    "title": "First Name",
    "type": "string"
    },
    "last_name": {
    "title": "Last Name",
    "type": "string"
    },
    "unique_id": {
    "title": "Unique Id",
    "type": "string"
    },
    "email": {
    "title": "Email",
    "type": "string",
    "format": "email"
    },
    "phone_number": {
    "title": "Phone Number",
    "type": "string"
    },
    "business_name": {
    "title": "Business Name",
    "type": "string"
    },
    "location": {
    "title": "Location",
    "type": "string"
    },
    "gender": {
    "title": "Gender",
    "type": "string"
    },
    "age": {
    "title": "Age",
    "type": "integer"
    },
    "postal_code": {
    "title": "Postal Code",
    "type": "string"
    },
    "language": {
    "title": "Language",
    "type": "string"
    },
    "country": {
    "title": "Country",
    "type": "string"
    },
    "city": {
    "title": "City",
    "type": "string"
    },
    "region": {
    "title": "Region",
    "type": "string"
    },
    "country_code": {
    "title": "Country Code",
    "type": "string"
    },
    "other_information": {
    "title": "Other Information",
    "default": {}
    },
    "organization_id": {
    "title": "Organization Id",
    "type": "string"
    }
    }
    },
    "CustomerCreateResponse": {
    "title": "CustomerCreateResponse",
    "required": [
    "message",
    "customer"
    ],
    "type": "object",
    "properties": {
    "message": {
    "title": "Message",
    "type": "string"
    },
    "customer": {
    "$ref": "#/components/schemas/Customer"
    }
    }
    },
    "CustomerUpdate": {
    "title": "CustomerUpdate",
    "type": "object",
    "properties": {
    "unique_id": {
    "title": "Unique Id",
    "type": "string"
    },
    "first_name": {
    "title": "First Name",
    "type": "string"
    },
    "last_name": {
    "title": "Last Name",
    "type": "string"
    },
    "email": {
    "title": "Email",
    "type": "string",
    "format": "email"
    },
    "phone_number": {
    "title": "Phone Number",
    "type": "string"
    },
    "organization_id": {
    "title": "Organization Id",
    "type": "string"
    },
    "business_name": {
    "title": "Business Name",
    "type": "string"
    },
    "location": {
    "title": "Location",
    "type": "string"
    },
    "gender": {
    "title": "Gender",
    "type": "string"
    },
    "age": {
    "title": "Age",
    "type": "integer"
    },
    "postal_code": {
    "title": "Postal Code",
    "type": "string"
    },
    "language": {
    "title": "Language",
    "type": "string"
    },
    "country": {
    "title": "Country",
    "type": "string"
    },
    "city": {
    "title": "City",
    "type": "string"
    },
    "region": {
    "title": "Region",
    "type": "string"
    },
    "country_code": {
    "title": "Country Code",
    "type": "string"
    },
    "other_information": {
    "title": "Other Information",
    "default": {}
    }
    }
    },
    "Email": {
    "title": "Email",
    "required": [
    "subject",
    "recipient",
    "title",
    "first_name",
    "sender_address",
    "sender_city",
    "sender_state"
    ],
    "type": "object",
    "properties": {
    "subject": {
    "title": "Subject",
    "type": "string"
    },
    "recipient": {
    "title": "Recipient",
    "type": "array",
    "items": {
    "type": "string",
    "format": "email"
    }
    },
    "title": {
    "title": "Title",
    "type": "string"
    },
    "first_name": {
    "title": "First Name",
    "type": "string"
    },
    "body": {
    "title": "Body",
    "type": "string"
    },
    "amount": {
    "title": "Amount",
    "type": "string"
    },
    "due_date": {
    "title": "Due Date",
    "type": "string"
    },
    "link": {
    "title": "Link",
    "type": "string"
    },
    "extra_link": {
    "title": "Extra Link",
    "type": "string"
    },
    "invoice_id": {
    "title": "Invoice Id",
    "type": "string"
    },
    "description": {
    "title": "Description",
    "type": "string"
    },
    "receipt_id": {
    "title": "Receipt Id",
    "type": "string"
    },
    "promo_product_name": {
    "title": "Promo Product Name",
    "type": "string"
    },
    "promo_product_description": {
    "title": "Promo Product Description",
    "type": "string"
    },
    "promo_product_price": {
    "title": "Promo Product Price",
    "type": "string"
    },
    "product_name": {
    "title": "Product Name",
    "type": "string"
    },
    "product_description": {
    "title": "Product Description",
    "type": "string"
    },
    "product_price": {
    "title": "Product Price",
    "type": "string"
    },
    "extra_product_name": {
    "title": "Extra Product Name",
    "type": "string"
    },
    "extra_product_description": {
    "title": "Extra Product Description",
    "type": "string"
    },
    "extra_product_price": {
    "title": "Extra Product Price",
    "type": "string"
    },
    "sender_address": {
    "title": "Sender Address",
    "type": "string"
    },
    "sender_city": {
    "title": "Sender City",
    "type": "string"
    },
    "sender_state": {
    "title": "Sender State",
    "type": "string"
    }
    }
    },
    "Faq": {
    "title": "Faq",
    "required": [
    "question",
    "answer"
    ],
    "type": "object",
    "properties": {
    "question": {
    "title": "Question",
    "type": "string"
    },
    "answer": {
    "title": "Answer",
    "type": "string"
    }
    }
    },
    "FaqInDB": {
    "title": "FaqInDB",
    "required": [
    "question",
    "answer",
    "created_by",
    "date_created"
    ],
    "type": "object",
    "properties": {
    "question": {
    "title": "Question",
    "type": "string"
    },
    "answer": {
    "title": "Answer",
    "type": "string"
    },
    "created_by": {
    "title": "Created By",
    "type": "string"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "File": {
    "title": "File",
    "required": [
    "id",
    "filename",
    "bucketname",
    "filesize"
    ],
    "type": "object",
    "properties": {
    "id": {
    "title": "Id",
    "type": "string"
    },
    "filename": {
    "title": "Filename",
    "type": "string"
    },
    "bucketname": {
    "title": "Bucketname",
    "type": "string"
    },
    "filesize": {
    "title": "Filesize",
    "type": "integer"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    },
    "last_updated": {
    "title": "Last Updated",
    "type": "string",
    "format": "date-time"
    }
    },
    "example": {
    "filename": "test.jpeg",
    "fileid": "Ki7n2ZD4hyP3FyW3XX",
    "bucketid": "photos",
    "filesize": 2333
    }
    },
    "Format": {
    "title": "Format",
    "required": [
    "htmlString",
    "pdfName"
    ],
    "type": "object",
    "properties": {
    "htmlString": {
    "title": "Htmlstring",
    "type": "string"
    },
    "pdfName": {
    "title": "Pdfname",
    "type": "string"
    }
    }
    },
    "HTTPValidationError": {
    "title": "HTTPValidationError",
    "type": "object",
    "properties": {
    "detail": {
    "title": "Detail",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/ValidationError"
    }
    }
    }
    },
    "Notification": {
    "title": "Notification",
    "required": [
    "content",
    "recipient",
    "reference",
    "id",
    "creator",
    "has_read",
    "date_created",
    "last_updated"
    ],
    "type": "object",
    "properties": {
    "content": {
    "title": "Content",
    "type": "string"
    },
    "recipient": {
    "title": "Recipient",
    "type": "string"
    },
    "reference": {
    "title": "Reference",
    "type": "string"
    },
    "id": {
    "title": "Id",
    "type": "string"
    },
    "creator": {
    "title": "Creator",
    "type": "string"
    },
    "has_read": {
    "title": "Has Read",
    "type": "boolean"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    },
    "last_updated": {
    "title": "Last Updated",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "NotificationCreate": {
    "title": "NotificationCreate",
    "required": [
    "content",
    "recipient",
    "reference",
    "creator"
    ],
    "type": "object",
    "properties": {
    "content": {
    "title": "Content",
    "type": "string"
    },
    "recipient": {
    "title": "Recipient",
    "type": "string"
    },
    "reference": {
    "title": "Reference",
    "type": "string"
    },
    "creator": {
    "title": "Creator",
    "type": "string",
    "description": "creator='' makes the authenticated user email the creator. If you want to override it, pass the email you want to use eg. creator='support@admin.com'"
    }
    }
    },
    "NotificationUpdate": {
    "title": "NotificationUpdate",
    "required": [
    "content",
    "recipient",
    "reference"
    ],
    "type": "object",
    "properties": {
    "content": {
    "title": "Content",
    "type": "string"
    },
    "recipient": {
    "title": "Recipient",
    "type": "string"
    },
    "reference": {
    "title": "Reference",
    "type": "string"
    }
    }
    },
    "Organization": {
    "title": "Organization",
    "required": [
    "name",
    "country",
    "state",
    "address",
    "currency_preference",
    "id",
    "creator",
    "date_created",
    "last_updated"
    ],
    "type": "object",
    "properties": {
    "mission": {
    "title": "Mission",
    "type": "string"
    },
    "vision": {
    "title": "Vision",
    "type": "string"
    },
    "name": {
    "title": "Name",
    "type": "string"
    },
    "country": {
    "title": "Country",
    "type": "string"
    },
    "state": {
    "title": "State",
    "type": "string"
    },
    "address": {
    "title": "Address",
    "type": "string"
    },
    "currency_preference": {
    "title": "Currency Preference",
    "type": "string"
    },
    "phone_number": {
    "title": "Phone Number",
    "type": "string"
    },
    "email": {
    "title": "Email",
    "type": "string"
    },
    "current_subscription": {
    "title": "Current Subscription",
    "type": "string"
    },
    "tagline": {
    "title": "Tagline",
    "type": "string"
    },
    "image": {
    "title": "Image",
    "type": "string"
    },
    "values": {
    "title": "Values",
    "type": "string"
    },
    "image_full_path": {
    "title": "Image Full Path",
    "type": "string"
    },
    "add_template": {
    "title": "Add Template",
    "type": "boolean"
    },
    "id": {
    "title": "Id",
    "type": "string"
    },
    "creator": {
    "title": "Creator",
    "type": "string"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    },
    "last_updated": {
    "title": "Last Updated",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "OrganizationCreate": {
    "title": "OrganizationCreate",
    "required": [
    "name",
    "country",
    "state",
    "address",
    "currency_preference"
    ],
    "type": "object",
    "properties": {
    "mission": {
    "title": "Mission",
    "type": "string"
    },
    "vision": {
    "title": "Vision",
    "type": "string"
    },
    "name": {
    "title": "Name",
    "type": "string"
    },
    "country": {
    "title": "Country",
    "type": "string"
    },
    "state": {
    "title": "State",
    "type": "string"
    },
    "address": {
    "title": "Address",
    "type": "string"
    },
    "currency_preference": {
    "title": "Currency Preference",
    "type": "string"
    },
    "phone_number": {
    "title": "Phone Number",
    "type": "string"
    },
    "email": {
    "title": "Email",
    "type": "string"
    },
    "current_subscription": {
    "title": "Current Subscription",
    "type": "string"
    },
    "tagline": {
    "title": "Tagline",
    "type": "string"
    },
    "image": {
    "title": "Image",
    "type": "string"
    },
    "values": {
    "title": "Values",
    "type": "string"
    },
    "image_full_path": {
    "title": "Image Full Path",
    "type": "string"
    },
    "add_template": {
    "title": "Add Template",
    "type": "boolean"
    }
    }
    },
    "OrganizationUpdate": {
    "title": "OrganizationUpdate",
    "required": [
    "name",
    "country",
    "state",
    "address",
    "currency_preference"
    ],
    "type": "object",
    "properties": {
    "mission": {
    "title": "Mission",
    "type": "string"
    },
    "vision": {
    "title": "Vision",
    "type": "string"
    },
    "name": {
    "title": "Name",
    "type": "string"
    },
    "country": {
    "title": "Country",
    "type": "string"
    },
    "state": {
    "title": "State",
    "type": "string"
    },
    "address": {
    "title": "Address",
    "type": "string"
    },
    "currency_preference": {
    "title": "Currency Preference",
    "type": "string"
    },
    "phone_number": {
    "title": "Phone Number",
    "type": "string"
    },
    "email": {
    "title": "Email",
    "type": "string"
    },
    "current_subscription": {
    "title": "Current Subscription",
    "type": "string"
    },
    "tagline": {
    "title": "Tagline",
    "type": "string"
    },
    "image": {
    "title": "Image",
    "type": "string"
    },
    "values": {
    "title": "Values",
    "type": "string"
    },
    "image_full_path": {
    "title": "Image Full Path",
    "type": "string"
    },
    "add_template": {
    "title": "Add Template",
    "type": "boolean"
    }
    }
    },
    "Page": {
    "title": "Page",
    "required": [
    "title",
    "content"
    ],
    "type": "object",
    "properties": {
    "title": {
    "title": "Title",
    "type": "string"
    },
    "content": {
    "title": "Content",
    "type": "string"
    },
    "id": {
    "title": "Id",
    "type": "string"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    },
    "last_updated": {
    "title": "Last Updated",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "PageInput": {
    "title": "PageInput",
    "required": [
    "title",
    "content"
    ],
    "type": "object",
    "properties": {
    "title": {
    "title": "Title",
    "type": "string"
    },
    "content": {
    "title": "Content",
    "type": "string"
    }
    }
    },
    "Page_BankResponse_": {
    "title": "Page[BankResponse]",
    "required": [
    "items",
    "total",
    "page",
    "size"
    ],
    "type": "object",
    "properties": {
    "items": {
    "title": "Items",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/BankResponse"
    }
    },
    "total": {
    "title": "Total",
    "minimum": 0,
    "type": "integer"
    },
    "page": {
    "title": "Page",
    "minimum": 1,
    "type": "integer"
    },
    "size": {
    "title": "Size",
    "minimum": 1,
    "type": "integer"
    }
    }
    },
    "Page_CreditWalletConversion_": {
    "title": "Page[CreditWalletConversion]",
    "required": [
    "items",
    "total",
    "page",
    "size"
    ],
    "type": "object",
    "properties": {
    "items": {
    "title": "Items",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/CreditWalletConversion"
    }
    },
    "total": {
    "title": "Total",
    "minimum": 0,
    "type": "integer"
    },
    "page": {
    "title": "Page",
    "minimum": 1,
    "type": "integer"
    },
    "size": {
    "title": "Size",
    "minimum": 1,
    "type": "integer"
    }
    }
    },
    "Page_CreditWalletHistory_": {
    "title": "Page[CreditWalletHistory]",
    "required": [
    "items",
    "total",
    "page",
    "size"
    ],
    "type": "object",
    "properties": {
    "items": {
    "title": "Items",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/CreditWalletHistory"
    }
    },
    "total": {
    "title": "Total",
    "minimum": 0,
    "type": "integer"
    },
    "page": {
    "title": "Page",
    "minimum": 1,
    "type": "integer"
    },
    "size": {
    "title": "Size",
    "minimum": 1,
    "type": "integer"
    }
    }
    },
    "Page_Customer_": {
    "title": "Page[Customer]",
    "required": [
    "items",
    "total",
    "page",
    "size"
    ],
    "type": "object",
    "properties": {
    "items": {
    "title": "Items",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/Customer"
    }
    },
    "total": {
    "title": "Total",
    "minimum": 0,
    "type": "integer"
    },
    "page": {
    "title": "Page",
    "minimum": 1,
    "type": "integer"
    },
    "size": {
    "title": "Size",
    "minimum": 1,
    "type": "integer"
    }
    }
    },
    "Page_WalletTransaction_": {
    "title": "Page[WalletTransaction]",
    "required": [
    "items",
    "total",
    "page",
    "size"
    ],
    "type": "object",
    "properties": {
    "items": {
    "title": "Items",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/WalletTransaction"
    }
    },
    "total": {
    "title": "Total",
    "minimum": 0,
    "type": "integer"
    },
    "page": {
    "title": "Page",
    "minimum": 1,
    "type": "integer"
    },
    "size": {
    "title": "Size",
    "minimum": 1,
    "type": "integer"
    }
    }
    },
    "Page_Wallet_": {
    "title": "Page[Wallet]",
    "required": [
    "items",
    "total",
    "page",
    "size"
    ],
    "type": "object",
    "properties": {
    "items": {
    "title": "Items",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/Wallet"
    }
    },
    "total": {
    "title": "Total",
    "minimum": 0,
    "type": "integer"
    },
    "page": {
    "title": "Page",
    "minimum": 1,
    "type": "integer"
    },
    "size": {
    "title": "Size",
    "minimum": 1,
    "type": "integer"
    }
    }
    },
    "Period": {
    "title": "Period",
    "enum": [
    "days",
    "weeks",
    "months",
    "years"
    ],
    "type": "string",
    "description": "Provides choices for the roles of a user in a room.\nADMIN ['admin'] -> The admin role is the only one that can add or remove users from a room.\nMEMBER ['member'] -> The member role cannot add or remove users from a room"
    },
    "Plan": {
    "title": "Plan",
    "required": [
    "title",
    "description",
    "id",
    "created_by",
    "date_created",
    "last_updated"
    ],
    "type": "object",
    "properties": {
    "title": {
    "title": "Title",
    "type": "string"
    },
    "description": {
    "title": "Description",
    "type": "string"
    },
    "price_offers": {
    "title": "Price Offers",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/PriceOffer"
    }
    },
    "available_geographies": {
    "title": "Available Geographies",
    "type": "array",
    "items": {
    "type": "string"
    }
    },
    "features": {
    "title": "Features",
    "type": "array",
    "items": {
    "type": "string"
    }
    },
    "id": {
    "title": "Id",
    "type": "string"
    },
    "created_by": {
    "title": "Created By",
    "type": "string"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    },
    "last_updated": {
    "title": "Last Updated",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "PlanDTO": {
    "title": "PlanDTO",
    "required": [
    "title",
    "description"
    ],
    "type": "object",
    "properties": {
    "title": {
    "title": "Title",
    "type": "string"
    },
    "description": {
    "title": "Description",
    "type": "string"
    },
    "price_offers": {
    "title": "Price Offers",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/PriceOffer"
    }
    },
    "available_geographies": {
    "title": "Available Geographies",
    "type": "array",
    "items": {
    "type": "string"
    }
    },
    "features": {
    "title": "Features",
    "type": "array",
    "items": {
    "type": "string"
    }
    }
    }
    },
    "PlanReqBase": {
    "title": "PlanReqBase",
    "required": [
    "credit_price",
    "access_type",
    "duration"
    ],
    "type": "object",
    "properties": {
    "credit_price": {
    "title": "Credit Price",
    "type": "integer"
    },
    "access_type": {
    "title": "Access Type",
    "type": "string"
    },
    "duration": {
    "title": "Duration",
    "type": "integer"
    }
    }
    },
    "PlanResponse": {
    "title": "PlanResponse",
    "required": [
    "credit_price",
    "access_type",
    "duration",
    "id",
    "date_created",
    "last_updated"
    ],
    "type": "object",
    "properties": {
    "credit_price": {
    "title": "Credit Price",
    "type": "integer"
    },
    "access_type": {
    "title": "Access Type",
    "type": "string"
    },
    "duration": {
    "title": "Duration",
    "type": "integer"
    },
    "id": {
    "title": "Id",
    "type": "string"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    },
    "last_updated": {
    "title": "Last Updated",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "PriceOffer": {
    "title": "PriceOffer",
    "required": [
    "price",
    "period"
    ],
    "type": "object",
    "properties": {
    "price": {
    "title": "Price",
    "type": "number"
    },
    "duration": {
    "title": "Duration",
    "type": "integer",
    "default": 1
    },
    "period": {
    "$ref": "#/components/schemas/Period"
    }
    }
    },
    "SMS": {
    "title": "SMS",
    "required": [
    "sender",
    "recipient",
    "user",
    "passkey"
    ],
    "type": "object",
    "properties": {
    "sender": {
    "title": "Sender",
    "type": "string"
    },
    "recipient": {
    "title": "Recipient",
    "type": "string"
    },
    "body": {
    "title": "Body",
    "type": "string"
    },
    "provider": {
    "title": "Provider",
    "type": "string",
    "default": "nuobject"
    },
    "user": {
    "title": "User",
    "type": "string"
    },
    "passkey": {
    "title": "Passkey",
    "type": "string"
    }
    }
    },
    "Settings": {
    "title": "Settings",
    "required": [
    "email",
    "location"
    ],
    "type": "object",
    "properties": {
    "email": {
    "title": "Email",
    "type": "string"
    },
    "location": {
    "title": "Location",
    "type": "string"
    },
    "phone_number": {
    "title": "Phone Number",
    "type": "string"
    },
    "organization_size": {
    "title": "Organization Size",
    "type": "string"
    },
    "organization_type": {
    "title": "Organization Type",
    "type": "string"
    },
    "country": {
    "title": "Country",
    "type": "string"
    },
    "state": {
    "title": "State",
    "type": "string"
    },
    "city": {
    "title": "City",
    "type": "string"
    },
    "zip_code": {
    "title": "Zip Code",
    "type": "integer"
    }
    }
    },
    "SettingsUpdate": {
    "title": "SettingsUpdate",
    "required": [
    "email",
    "location"
    ],
    "type": "object",
    "properties": {
    "email": {
    "title": "Email",
    "type": "string"
    },
    "location": {
    "title": "Location",
    "type": "string"
    },
    "phone_number": {
    "title": "Phone Number",
    "type": "string"
    },
    "organization_size": {
    "title": "Organization Size",
    "type": "string"
    },
    "organization_type": {
    "title": "Organization Type",
    "type": "string"
    },
    "country": {
    "title": "Country",
    "type": "string"
    },
    "state": {
    "title": "State",
    "type": "string"
    },
    "city": {
    "title": "City",
    "type": "string"
    },
    "zip_code": {
    "title": "Zip Code",
    "type": "integer"
    }
    }
    },
    "State": {
    "title": "State",
    "required": [
    "name",
    "state_code"
    ],
    "type": "object",
    "properties": {
    "name": {
    "title": "Name",
    "type": "string"
    },
    "state_code": {
    "title": "State Code",
    "type": "string"
    }
    }
    },
    "StoreUser": {
    "title": "StoreUser",
    "required": [
    "user_id",
    "organization_id"
    ],
    "type": "object",
    "properties": {
    "user_email": {
    "title": "User Email",
    "type": "string"
    },
    "user_id": {
    "title": "User Id",
    "type": "string"
    },
    "user_role": {
    "title": "User Role",
    "type": "string"
    },
    "is_accepted": {
    "title": "Is Accepted",
    "type": "boolean"
    },
    "is_revoked": {
    "title": "Is Revoked",
    "type": "boolean"
    },
    "is_deleted": {
    "title": "Is Deleted",
    "type": "boolean"
    },
    "organization_id": {
    "title": "Organization Id",
    "type": "string"
    }
    }
    },
    "SubcriptionBase": {
    "title": "SubcriptionBase",
    "required": [
    "plan",
    "organization_id",
    "id",
    "date_created"
    ],
    "type": "object",
    "properties": {
    "plan": {
    "title": "Plan",
    "type": "string"
    },
    "organization_id": {
    "title": "Organization Id",
    "type": "string"
    },
    "id": {
    "title": "Id",
    "type": "string"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "Ticket": {
    "title": "Ticket",
    "required": [
    "title",
    "issue"
    ],
    "type": "object",
    "properties": {
    "title": {
    "title": "Title",
    "type": "string"
    },
    "issue": {
    "title": "Issue",
    "type": "string"
    }
    }
    },
    "TicketCloseRes": {
    "title": "TicketCloseRes",
    "required": [
    "message"
    ],
    "type": "object",
    "properties": {
    "message": {
    "title": "Message",
    "type": "string"
    }
    }
    },
    "TicketInDB": {
    "title": "TicketInDB",
    "required": [
    "title",
    "issue",
    "opened_by",
    "short_id",
    "closed",
    "date_created"
    ],
    "type": "object",
    "properties": {
    "title": {
    "title": "Title",
    "type": "string"
    },
    "issue": {
    "title": "Issue",
    "type": "string"
    },
    "opened_by": {
    "title": "Opened By",
    "type": "string"
    },
    "short_id": {
    "title": "Short Id",
    "type": "string"
    },
    "closed": {
    "title": "Closed",
    "type": "boolean"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "TicketReply": {
    "title": "TicketReply",
    "required": [
    "reply"
    ],
    "type": "object",
    "properties": {
    "reply": {
    "title": "Reply",
    "type": "string"
    }
    }
    },
    "TicketReplyInDB": {
    "title": "TicketReplyInDB",
    "required": [
    "reply",
    "reply_by",
    "date_created"
    ],
    "type": "object",
    "properties": {
    "reply": {
    "title": "Reply",
    "type": "string"
    },
    "reply_by": {
    "title": "Reply By",
    "type": "string"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "TicketReplyRes": {
    "title": "TicketReplyRes",
    "required": [
    "message",
    "reply"
    ],
    "type": "object",
    "properties": {
    "message": {
    "title": "Message",
    "type": "string"
    },
    "reply": {
    "$ref": "#/components/schemas/TicketReply"
    }
    }
    },
    "TutorialDTO": {
    "title": "TutorialDTO",
    "required": [
    "category",
    "title",
    "description",
    "added_by",
    "id",
    "date_created",
    "last_updated"
    ],
    "type": "object",
    "properties": {
    "category": {
    "title": "Category",
    "type": "string"
    },
    "title": {
    "title": "Title",
    "type": "string"
    },
    "description": {
    "title": "Description",
    "type": "string"
    },
    "thumbnail": {
    "title": "Thumbnail",
    "type": "string"
    },
    "stream_url": {
    "title": "Stream Url",
    "type": "string"
    },
    "text": {
    "title": "Text",
    "type": "string"
    },
    "added_by": {
    "title": "Added By",
    "type": "string"
    },
    "id": {
    "title": "Id",
    "type": "string"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    },
    "last_updated": {
    "title": "Last Updated",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "TutorialListRes": {
    "title": "TutorialListRes",
    "required": [
    "data",
    "total",
    "count",
    "pagination"
    ],
    "type": "object",
    "properties": {
    "data": {
    "title": "Data",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/TutorialDTO"
    }
    },
    "total": {
    "title": "Total",
    "type": "integer"
    },
    "count": {
    "title": "Count",
    "type": "integer"
    },
    "pagination": {
    "title": "Pagination",
    "type": "object"
    }
    }
    },
    "TutorialRequest": {
    "title": "TutorialRequest",
    "required": [
    "category",
    "title",
    "description",
    "added_by"
    ],
    "type": "object",
    "properties": {
    "category": {
    "title": "Category",
    "type": "string"
    },
    "title": {
    "title": "Title",
    "type": "string"
    },
    "description": {
    "title": "Description",
    "type": "string"
    },
    "thumbnail": {
    "title": "Thumbnail",
    "type": "string"
    },
    "stream_url": {
    "title": "Stream Url",
    "type": "string"
    },
    "text": {
    "title": "Text",
    "type": "string"
    },
    "added_by": {
    "title": "Added By",
    "type": "string"
    }
    }
    },
    "TutorialSingleRes": {
    "title": "TutorialSingleRes",
    "required": [
    "data"
    ],
    "type": "object",
    "properties": {
    "data": {
    "$ref": "#/components/schemas/TutorialDTO"
    }
    }
    },
    "UpdateUserReq": {
    "title": "UpdateUserReq",
    "required": [
    "email"
    ],
    "type": "object",
    "properties": {
    "email": {
    "title": "Email",
    "type": "string"
    },
    "first_name": {
    "title": "First Name",
    "type": "string"
    },
    "last_name": {
    "title": "Last Name",
    "type": "string"
    },
    "country_code": {
    "title": "Country Code",
    "type": "string"
    },
    "phone_number": {
    "title": "Phone Number",
    "type": "string"
    },
    "country": {
    "title": "Country",
    "type": "string"
    },
    "state": {
    "title": "State",
    "type": "string"
    }
    }
    },
    "User": {
    "title": "User",
    "required": [
    "email",
    "id",
    "is_active",
    "is_verified",
    "is_superuser",
    "is_deleted",
    "date_created",
    "last_updated"
    ],
    "type": "object",
    "properties": {
    "email": {
    "title": "Email",
    "type": "string"
    },
    "id": {
    "title": "Id",
    "type": "string"
    },
    "first_name": {
    "title": "First Name",
    "type": "string"
    },
    "last_name": {
    "title": "Last Name",
    "type": "string"
    },
    "phone_number": {
    "title": "Phone Number",
    "type": "string"
    },
    "is_active": {
    "title": "Is Active",
    "type": "boolean"
    },
    "is_verified": {
    "title": "Is Verified",
    "type": "boolean"
    },
    "is_superuser": {
    "title": "Is Superuser",
    "type": "boolean"
    },
    "country_code": {
    "title": "Country Code",
    "type": "string"
    },
    "image": {
    "title": "Image",
    "type": "string"
    },
    "is_deleted": {
    "title": "Is Deleted",
    "type": "boolean"
    },
    "device_id": {
    "title": "Device Id",
    "type": "string"
    },
    "country": {
    "title": "Country",
    "type": "string"
    },
    "state": {
    "title": "State",
    "type": "string"
    },
    "google_id": {
    "title": "Google Id",
    "type": "string"
    },
    "google_image": {
    "title": "Google Image",
    "type": "string"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    },
    "last_updated": {
    "title": "Last Updated",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "UserActivate": {
    "title": "UserActivate",
    "required": [
    "email",
    "is_active"
    ],
    "type": "object",
    "properties": {
    "email": {
    "title": "Email",
    "type": "string"
    },
    "is_active": {
    "title": "Is Active",
    "type": "boolean"
    }
    }
    },
    "UserCreate": {
    "title": "UserCreate",
    "required": [
    "password"
    ],
    "type": "object",
    "properties": {
    "email": {
    "title": "Email",
    "type": "string"
    },
    "password": {
    "title": "Password",
    "type": "string"
    },
    "first_name": {
    "title": "First Name",
    "type": "string"
    },
    "last_name": {
    "title": "Last Name",
    "type": "string"
    },
    "phone_number": {
    "title": "Phone Number",
    "type": "string"
    },
    "country_code": {
    "title": "Country Code",
    "type": "string"
    },
    "image": {
    "title": "Image",
    "type": "string"
    },
    "device_id": {
    "title": "Device Id",
    "type": "string"
    },
    "country": {
    "title": "Country",
    "type": "string"
    },
    "state": {
    "title": "State",
    "type": "string"
    },
    "google_id": {
    "title": "Google Id",
    "type": "string"
    },
    "google_image": {
    "title": "Google Image",
    "type": "string"
    }
    }
    },
    "UserInvite": {
    "title": "UserInvite",
    "required": [
    "store",
    "app_url",
    "email_details"
    ],
    "type": "object",
    "properties": {
    "user_email": {
    "title": "User Email",
    "type": "string"
    },
    "user_id": {
    "title": "User Id",
    "type": "string"
    },
    "user_role": {
    "title": "User Role",
    "type": "string"
    },
    "is_accepted": {
    "title": "Is Accepted",
    "type": "boolean"
    },
    "is_revoked": {
    "title": "Is Revoked",
    "type": "boolean"
    },
    "is_deleted": {
    "title": "Is Deleted",
    "type": "boolean"
    },
    "store": {
    "title": "Store",
    "type": "object"
    },
    "app_url": {
    "title": "App Url",
    "type": "string"
    },
    "email_details": {
    "$ref": "#/components/schemas/Email"
    }
    }
    },
    "UserLogin": {
    "title": "UserLogin",
    "required": [
    "password"
    ],
    "type": "object",
    "properties": {
    "email": {
    "title": "Email",
    "type": "string"
    },
    "phone_number": {
    "title": "Phone Number",
    "type": "string"
    },
    "country_code": {
    "title": "Country Code",
    "type": "string"
    },
    "password": {
    "title": "Password",
    "type": "string"
    }
    }
    },
    "UserPasswordUpdate": {
    "title": "UserPasswordUpdate",
    "required": [
    "code",
    "password"
    ],
    "type": "object",
    "properties": {
    "code": {
    "title": "Code",
    "type": "string"
    },
    "password": {
    "title": "Password",
    "type": "string"
    }
    }
    },
    "UserRecoverPassword": {
    "title": "UserRecoverPassword",
    "required": [
    "email"
    ],
    "type": "object",
    "properties": {
    "email": {
    "title": "Email",
    "type": "string"
    }
    }
    },
    "UserResetPassword": {
    "title": "UserResetPassword",
    "required": [
    "code",
    "password"
    ],
    "type": "object",
    "properties": {
    "email": {
    "title": "Email",
    "type": "string"
    },
    "code": {
    "title": "Code",
    "type": "string"
    },
    "password": {
    "title": "Password",
    "type": "string"
    }
    }
    },
    "UserTokenVerification": {
    "title": "UserTokenVerification",
    "required": [
    "email",
    "redirect_url"
    ],
    "type": "object",
    "properties": {
    "email": {
    "title": "Email",
    "type": "string"
    },
    "redirect_url": {
    "title": "Redirect Url",
    "type": "string"
    }
    }
    },
    "ValidationError": {
    "title": "ValidationError",
    "required": [
    "loc",
    "msg",
    "type"
    ],
    "type": "object",
    "properties": {
    "loc": {
    "title": "Location",
    "type": "array",
    "items": {
    "type": "string"
    }
    },
    "msg": {
    "title": "Message",
    "type": "string"
    },
    "type": {
    "title": "Error Type",
    "type": "string"
    }
    }
    },
    "Wallet": {
    "title": "Wallet",
    "required": [
    "organization_id",
    "currency_code",
    "id",
    "balance",
    "last_updated"
    ],
    "type": "object",
    "properties": {
    "organization_id": {
    "title": "Organization Id",
    "type": "string"
    },
    "currency_code": {
    "title": "Currency Code",
    "type": "string"
    },
    "user_id": {
    "title": "User Id",
    "type": "string"
    },
    "id": {
    "title": "Id",
    "type": "string"
    },
    "balance": {
    "title": "Balance",
    "type": "number"
    },
    "last_updated": {
    "title": "Last Updated",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "WalletCreate": {
    "title": "WalletCreate",
    "required": [
    "organization_id",
    "currency_code"
    ],
    "type": "object",
    "properties": {
    "organization_id": {
    "title": "Organization Id",
    "type": "string"
    },
    "currency_code": {
    "title": "Currency Code",
    "type": "string"
    },
    "user_id": {
    "title": "User Id",
    "type": "string"
    }
    }
    },
    "WalletTransaction": {
    "title": "WalletTransaction",
    "required": [
    "amount",
    "transaction_ref",
    "transaction_date",
    "currency_code",
    "id",
    "status",
    "wallet_id"
    ],
    "type": "object",
    "properties": {
    "amount": {
    "title": "Amount",
    "type": "number"
    },
    "transaction_ref": {
    "title": "Transaction Ref",
    "type": "string"
    },
    "transaction_date": {
    "title": "Transaction Date",
    "type": "string",
    "format": "date-time"
    },
    "currency_code": {
    "title": "Currency Code",
    "type": "string"
    },
    "id": {
    "title": "Id",
    "type": "string"
    },
    "status": {
    "title": "Status",
    "type": "boolean"
    },
    "wallet_id": {
    "title": "Wallet Id",
    "type": "string"
    }
    }
    },
    "_SubBAse": {
    "title": "_SubBAse",
    "required": [
    "plan",
    "organization_id"
    ],
    "type": "object",
    "properties": {
    "plan": {
    "title": "Plan",
    "type": "string"
    },
    "organization_id": {
    "title": "Organization Id",
    "type": "string"
    }
    }
    },
    "atrributes": {
    "title": "atrributes",
    "required": [
    "sender",
    "message",
    "subject"
    ],
    "type": "object",
    "properties": {
    "sender": {
    "title": "Sender",
    "type": "string",
    "format": "email"
    },
    "recipient": {
    "title": "Recipient",
    "type": "array",
    "items": {
    "type": "string",
    "format": "email"
    },
    "default": []
    },
    "message": {
    "title": "Message",
    "type": "string"
    },
    "subject": {
    "title": "Subject",
    "type": "string"
    }
    }
    },
    "bigfastapi__email__ResponseModel": {
    "title": "ResponseModel",
    "required": [
    "message"
    ],
    "type": "object",
    "properties": {
    "message": {
    "title": "Message",
    "type": "string"
    }
    }
    },
    "bigfastapi__schemas__customer_schemas__ResponseModel": {
    "title": "ResponseModel",
    "required": [
    "message"
    ],
    "type": "object",
    "properties": {
    "message": {
    "title": "Message",
    "type": "string"
    }
    }
    },
    "bigfastapi__schemas__plan_schema__ResponseList": {
    "title": "ResponseList",
    "required": [
    "status",
    "resource_type",
    "data"
    ],
    "type": "object",
    "properties": {
    "status": {
    "title": "Status",
    "type": "string"
    },
    "resource_type": {
    "title": "Resource Type",
    "type": "string"
    },
    "data": {
    "title": "Data",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/PlanResponse"
    }
    }
    }
    },
    "bigfastapi__schemas__plan_schema__ResponseSingle": {
    "title": "ResponseSingle",
    "required": [
    "status",
    "resource_type",
    "data"
    ],
    "type": "object",
    "properties": {
    "status": {
    "title": "Status",
    "type": "string"
    },
    "resource_type": {
    "title": "Resource Type",
    "type": "string"
    },
    "data": {
    "$ref": "#/components/schemas/PlanResponse"
    }
    }
    },
    "bigfastapi__schemas__store_user_schemas__UserUpdate": {
    "title": "UserUpdate",
    "required": [
    "store_id",
    "user_id",
    "role",
    "is_deleted",
    "date_created"
    ],
    "type": "object",
    "properties": {
    "store_id": {
    "title": "Store Id",
    "type": "string"
    },
    "user_id": {
    "title": "User Id",
    "type": "string"
    },
    "role": {
    "title": "Role",
    "type": "string"
    },
    "is_deleted": {
    "title": "Is Deleted",
    "type": "string"
    },
    "date_created": {
    "title": "Date Created",
    "type": "string"
    }
    }
    },
    "bigfastapi__schemas__subscription_schema__ResponseList": {
    "title": "ResponseList",
    "required": [
    "status",
    "resource_type",
    "data"
    ],
    "type": "object",
    "properties": {
    "status": {
    "title": "Status",
    "type": "string"
    },
    "resource_type": {
    "title": "Resource Type",
    "type": "string"
    },
    "data": {
    "title": "Data",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/SubcriptionBase"
    }
    }
    }
    },
    "bigfastapi__schemas__subscription_schema__ResponseSingle": {
    "title": "ResponseSingle",
    "required": [
    "status",
    "resource_type",
    "data"
    ],
    "type": "object",
    "properties": {
    "status": {
    "title": "Status",
    "type": "string"
    },
    "resource_type": {
    "title": "Resource Type",
    "type": "string"
    },
    "data": {
    "$ref": "#/components/schemas/SubcriptionBase"
    }
    }
    },
    "bigfastapi__schemas__users_schemas__UserUpdate": {
    "title": "UserUpdate",
    "required": [
    "email",
    "first_name",
    "last_name",
    "phone_number"
    ],
    "type": "object",
    "properties": {
    "email": {
    "title": "Email",
    "type": "string"
    },
    "first_name": {
    "title": "First Name",
    "type": "string"
    },
    "last_name": {
    "title": "Last Name",
    "type": "string"
    },
    "phone_number": {
    "title": "Phone Number",
    "type": "string"
    }
    }
    },
    "bigfastapi__sms__ResponseModel": {
    "title": "ResponseModel",
    "required": [
    "message"
    ],
    "type": "object",
    "properties": {
    "message": {
    "title": "Message",
    "type": "string"
    }
    }
    },
    "updatePasswordRequest": {
    "title": "updatePasswordRequest",
    "required": [
    "password",
    "password_confirmation"
    ],
    "type": "object",
    "properties": {
    "password": {
    "title": "Password",
    "type": "string"
    },
    "password_confirmation": {
    "title": "Password Confirmation",
    "type": "string"
    }
    }
    }
    },
    "securitySchemes": {
    "OAuth2PasswordBearer": {
    "type": "oauth2",
    "flows": {
    "password": {
    "scopes": {},
    "tokenUrl": "login"
    }
    }
    }
    }
    },
    "tags": [
    {
    "name": "blog",
    "description": " BigFast's blog api includes various standard blog api patterns from blog creation to various api querying operations. With this group you can easily get your blog client up and running in no time 📝"
    },
    {
    "name": "auth",
    "description": "BigFast's auth api allows you to manage creation and authentication of users in a seamless manner. You can create new users and authenticate existing users based on specific parameters"
    },
    {
    "name": "countries",
    "description": "BigFast's countries api allows you to get all countries in the world and thier respective states, you can also query for country codes including dial codes and sample phone formats"
    },
    {
    "name": "pages",
    "description": "BigFast's pages api allows you to manage creation, retrieval, updating, and deletion on pages seamlessly. You can create pages with a specified title and content body"
    },
    {
    "name": "notification",
    "description": "BigFast's notifications api  allows you to create notifications and manage the notification flow in your application. You can easily make queries like marking a specific notification as read, marking all notifications as read e.t.c."
    }
    ]
    }