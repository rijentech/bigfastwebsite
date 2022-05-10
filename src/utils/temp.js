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
    "description": "intro-->This endpoint allows creation of a new user. To create a new user, you need to send a post request to the /auth/signup endpoint with a body of request containing details of the new user.\nparamDesc-->\n\n    reqBody-->email: This is the email of the new user.\n    reqBody-->password: This is the unique password of the new user .\n    reqBody-->first_name: This is the first name of the new user.\n    reqBody-->last_name: This is the last name of the new user.\n    reqBody-->phone_number: This is the phone number of the new user.\n    reqBody-->country_code: This is the country code of the new user.\n    reqBody-->image: This is an image file of the new user, can be of any format.\n    reqBody-->device_id: This is the id of the device used at signup.\n    reqBody-->country: This is the country name of the new user.\n    reqBody-->state: This is the state name of the new user.\n    reqBody-->google_id: This is a unique id of the new user's google account.\n    reqBody-->google_image: This is the image of the user's google account.\n\nreturnDesc-->On sucessful request, it returns\n    returnBody--> \"success\".",
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
    "description": "intro-->This endpoint allows you to login an existing user, to login a user you need to make a post request to the /auth/login endpoint with a required body of requst as specified below\n\nparamDesc-->\n    param-->auth: /auth/login\n    reqBody-->email: This is the email of the existing user.\n    reqBody-->phone_number: This is the phone number of the existing user.\n    reqBody-->country_code: This is the country code of the existing user.\n    reqBody-->password: This is the password of the existing user.\n\nreturnDesc-->On sucessful request, it returns\n    returnBody--> \"success\".",
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
    "description": "intro-->This endpoint allows you to retrieve details about the currently logged in user, to use this endpoint you need to make a get request to the  /users/me endpoint \n\nreturnDesc-->On sucessful request, it returns\n    returnBody--> details of the currently logged in user",
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
    "description": "intro-->This endpoint allows you to update details about the currently logged in user, to use this endpoint you need to make a put request to the  /users/me endpoint with a specified body of request\n\nreturnDesc-->On sucessful request, it returns the\n    returnBody--> updated details of the currently logged in user",
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
    "description": "intro-->This endpoint allows a super user to activate a user, to use this endpoint user must be a super user. You need to make a put request to the  /users/{user_id}/activate endpoint with a specified body of request to activate a user \n\nparamDesc--> On put request the url takes a query parameter \"user_id\" \n    param-->notification_id: This is the unique identifier of the user\n    reqBody-->email: This is the email address of the user\n    reqBody-->is_active: This is the current state of user, this is set to true when the user is active and false otherwise.\n\nreturnDesc-->On sucessful request, it returns message,\n    returnBody--> \"success\".",
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
    "description": "intro-->This endpoint allows for password recovery, to use this endpoint you need to make a post request to the /users/recover-password endpoint\n\n    reqBody-->email: This is the email address of the user\n\nreturnDesc--> On sucessful request, it returns message,\n    returnBody--> \"success\".",
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
    "description": "intro-->This endpoint allows a user to reset their password after recieving a given code on password recovery, to use this endpoint you need to make a post request to the /users/reset-password endpoint\n\n    reqBody-->email: This is the email address of the user\n    reqBody-->code: This is a unique code sent to the user on password recovery\n    reqBody-->password: This is the registered password of the user\n\nreturnDesc--> On sucessful request, it returns message,\n    returnBody--> \"success\".",
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
    "description": "intro-->This endpoint allows for users to update their profile details. To use this endpoint you need to make a put request to the /users/profile/update enpoint with a specified body of request with details to be updated\n\n    reqBody-->email: This is the email address of the user\n    reqBody-->first_name: This is a unique code sent to the user on password recovery\n    reqBody-->last_name: This is the registered password of the user   \n    reqBody-->country_code: This is the registered password of the user   \n    reqBody-->phone_number: This is the registered password of the user   \n    reqBody-->country: This is the registered password of the user   \n    reqBody-->state: This is the registered password of the user   \n\n\nreturnDesc--> On sucessful request, it returns message,\n    returnBody--> \"success\".",
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
    "description": "intro-->This endpoint allows for users to update their password. To use this endpoint you need to make a patch request to the /users/password/update endpoint with a body of request with details of the new password.\n\n    reqBody-->email: This is the email address of the user\n    reqBody-->first_name: This is a unique code sent to the user on password recovery\n    reqBody-->last_name: This is the registered password of the user   \n    reqBody-->country_code: This is the registered password of the user   \n    reqBody-->phone_number: This is the registered password of the user   \n    reqBody-->country: This is the registered password of the user   \n    reqBody-->state: This is the registered password of the user   \n\n\nreturnDesc--> On sucessful request, it returns message,\n    returnBody--> \"success\".",
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
    "description": "intro-->This endpoint allows for a user to accept an invite. To use this endpoint you need to make a put request to the /users/accept-invite/{token} where token is a unique value recieved by the user on invite. It also takes a specified body of request\n\nparamDesc-->On put request this enpoint takes the query parameter \"token\" \n    param-->token: This is a unique token recieved by the user on invite\n    reqBody-->user_email: This is the email address of the user \n    reqBody-->user_id: This is the unique user id\n    reqBody-->user_role: This specifies the role of the user in the organization  \n    reqBody-->is_accepted: This is the the acceptance state of the invite  \n    reqBody-->is_revoked: This is the revoke state of the user  \n    reqBody-->is_deleted: This specifies if the invite is deleted/expired  \n    reqBody-->organization_id: This is a unique id of the registered organization\n\nreturnDesc--> On sucessful request, it returns message,\n    returnBody--> \"success\".",
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
    "description": "intro-->This endpoint is used to trigger a user invite. To use this endpoint you need to make a post request to the /users/invite/ endpoint with a specified body of request \n\n    reqBody-->user_email: This is the email address of the user \n    reqBody-->user_id: This is the unique user id\n    reqBody-->user_role: This specifies the role of the user in the organization  \n    reqBody-->is_accepted: This is the the acceptance state of the invite  \n    reqBody-->is_revoked: This is the revoke state of the user  \n    reqBody-->is_deleted: This specifies if the invite is deleted/expired  \n    reqBody-->organization_id: This is a unique id of the registered organization\n    reqBody-->store: This is a collection of users in the a store\n    reqBody-->app_url: This is the url to be navigated to on invite accept\n    reqBody-->email_details: This is the email of the user to be invited\n\nreturnDesc--> On sucessful request, it returns message,\n    returnBody--> \"success\".",
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
    },
    "security": [
    {
    "OAuth2PasswordBearer": []
    }
    ]
    }
    },
    "/users/invite/{invite_code}": {
    "get": {
    "tags": [
    "User",
    "User"
    ],
    "summary": "Get Single Invite",
    "description": "intro-->This endpoint is used to get an invite link for a single user. To use this endpoint you need to make a get request to the /users/invite/{invite_code} endpoint\n\nparamDesc-->On get request, the url takes an invite code\n    param-->invite_code: This is a unique code needed to get an invite link\n    \n\nreturnDesc--> On sucessful request, it returns\n    returnBody--> \"invite link\".",
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
    "description": "intro-->This endpoint is used to decline an invite. To use this endpoint you need to make a put request to the /users/invite/{invite_code}/decline endpoint\n\nparamDesc-->On put request, the url takes an invite code\n    param-->invite_code: This is a unique code linked to invite\n    \n\nreturnDesc--> On sucessful request, it returns message,\n    returnBody--> \"success\".",
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
    "description": "intro-->This endpoint is used to revoke the invitation of a previously invited user. To use this endpoint you need to make a delete request to the /users/revoke-invite/{invite_code} endpoint\n\nparamDesc-->On delete request, the url takes an invite code\n    param-->invite_code: This is a unique code linked to invite\n    \n\nreturnDesc--> On sucessful request, it returns message,\n    returnBody--> \"success\".",
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
    "/users/{user_id}/change": {
    "patch": {
    "tags": [
    "User",
    "User"
    ],
    "summary": "Update User Role",
    "description": "intro-->This endpoint is used to update a user's role. To use this endpoint you need to make a patch request to the /users/{user_id}/change endpoint\n\nparamDesc-->On patch request, the url takes a user's id\n    param-->user_id: This is the user id of the user\n    \n\nreturnDesc--> On sucessful request, it returns message\n    returnBody--> \"User role successfully updated\"",
    "operationId": "update_user_role_users__user_id__change_patch",
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
    "description": "intro-->This endpoint is used to trigger a resend of a user's verification token. To use this endpoint you need to make a post request to the /users/resend-verification/token endpoint\n\nparamDesc-->On post request, the url takes a user's id\n    param-->user_id: This is the user id of the user\n    reqBody-->email: This is the user email where the verification token will be sent to\n    reqBody-->redirect_url: This is the url the user will be redirected to after verification\n\nreturnDesc--> On sucessful request, it returns message\n    returnBody--> \"success\"",
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
    "description": "intro-->This endpoint is used verify a user on api request. To use this endpoint you need to make a post request to the /users/verify/token/{token} endpoint\n\nparamDesc-->On post request, the url takes the verification token\n    param-->token: This is the token sent to the user's email\n\nreturnDesc--> On sucessful request, it returns message\n    returnBody--> \"success\"",
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
    "description": "intro-->This endpoint is used to change a user's password. To use this endpoint you need to make a put request to the /users/password-change/token/{token} endpoint with a specified body of request\n\nparamDesc-->On post request, the url takes the verification token\n    param-->token: This is the token sent to the user's email\n    reqBody-->code: This code sent to the user's email\n    reqBody-->password: This is the new user of the password\n\nreturnDesc--> On sucessful request, it returns message\n    returnBody--> \"success\" ",
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
    "description": "intro-->This endpoint is used to update a user's image. To use this endpoint you need to make a patch request to the /users/image/upload endpoint\n\n\nreturnDesc--> On sucessful request, it returns message\n    returnBody--> \"success\"",
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
    "description": "intro-->This endpoint returns a list of all countries in the world and their respective states. To get this data you need to make a get request to the /countries endpoint.\n\nreturnDesc-->On sucessful request, it returns\n    returnBody--> \"an array country objects\".",
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
    "description": "intro-->This endpoint returns a list of all states in a queried country. To get this data you need to make a get request to the /countries/{country_code}/states endpoint.\n\nparamDesc-->On get request, the url takes a query parameter \"country_code\":\n    param-->country_code: This is the country code of the country of interest\n\nreturnDesc-->On sucessful request, it returns\n    returnBody--> \"an array of states\".",
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
    "description": "intro-->This endpoint returns a list of all countries and thier respective codes including dial codes and sample phone formats. To use this endpoint, you need to make a get request to the /countries/codes enpoint\n\nparamDesc-->To query for a particular country, you need to make a get request to /countries/codes endpoint and make query using the format /countries/codes?country_code={country_code}\n    param-->country_code: This is the country code of the country of interest\n\nreturnDesc-->On sucessful request, it returns\n    returnBody--> an array of countries and their codes.",
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
    "description": "intro-->This endpoint returns all created frequently asked questions that have been created in an organization. To use this endpoint you need to make a get request to the support/faqs endpoint\n\n\nreturnDesc--> On sucessful request, it returns \n    returnBody--> an array of faqs",
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
    "description": "intro-->This endpoint allows for creation of frequently asked questions and their respective answers. To use this endpoint you need to make a post request to the /support/faqs endpoint\n\n    reqBody-->question: This is the the faq\n    reqBody-->answer: This is the answer to the faq\n\nreturnDesc--> On sucessful request, it returns \n    returnBody--> the details of the just created faq",
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
    "description": "intro-->This endpoint allows you to retireve all tickets. To use this endpoint you need to make a get request to the /support/tickets endpoint with a specified body of request\n\n\nreturnDesc--> On sucessful request, it returns \n    returnBody--> an array of all tickets and their details",
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
    "description": "intro-->This endpoint allows for creation of issue tickets. Tickets are issues raised by users concerning a service. To use this endpoint you need to make a post request to the /support/tickets endpoint with a specified body of request\n\nreqBody-->title: This is the title/subject of the ticket\nreqBody--> issue: This is a description of the issue\n\nreturnDesc--> On sucessful request, it returns \n    returnBody--> details of the just created ticket",
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
    "description": "intro-->This endpoint allows you to retireve a particular tickets. To use this endpoint you need to make a get request to the /support/tickets/{short_id}\n\nparamDesc-->On get request the request url takes a query parameter \"short_id\"\n    param-->short_id: This is a unique identifier of the ticket\n\nreturnDesc--> On sucessful request, it returns \n    returnBody--> details of the queried ticket",
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
    "description": "intro-->This endpoint offers support for replying to a ticket. To use this endpoint you need to make a post request to the /support/tickets/{short_id}/reply endpoint with a specified body of request\n\nparamDesc-->On get request the request url takes a query parameter \"short_id\"\n    param-->short_id: This is a unique identifier of the ticket\n    reqBody-->reply: This is the reply to the ticket raised\nreturnDesc--> On sucessful request, it returns \n    returnBody--> details of the reply",
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
    "description": "intro-->This endpoint is used to close a ticket after it has been resolved. To use this endpoint you need to make a put request to the /support/tickets/{short_id}/close endpoint \n\nparamDesc-->On get request the request url takes a query parameter \"short_id\"\n    param-->short_id: This is a unique identifier of the ticket\n\nreturnDesc--> On sucessful request, it returns message\n    returnBody--> \"success\"",
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
    "description": "intro-->This endpoint is used get all replies to a ticket. To use this endpoint you need to make a get request to the /support/tickets/{short_id}/replies endpoint \n\nparamDesc-->On get request the request url takes a query parameter \"short_id\"\n    param-->short_id: This is a unique identifier of the ticket\n\nreturnDesc--> On sucessful request, it returns\n    returnBody--> an array of all replies",
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
    "description": "intro-->This endpoint returns all open tickets on request. To use this endpoint you need to make a get request to the /support/tickets/open endpoint \n\nreturnDesc--> On sucessful request, it returns\n    returnBody--> an array of all open tickets",
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
    "description": "intro-->This endpoint returns all closed tickets on request. To use this endpoint you need to make a get request to the /support/tickets/closed endpoint \n\nreturnDesc--> On sucessful request, it returns\n    returnBody--> an array of all closed tickets",
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
    "description": "intro-->This endpoint is used get all contacts. To use this endpoint you need to make a get request to the /contact endpoint \n\nreturnDesc--> On sucessful request, it returns\n    returnBody--> an array of all contact's details",
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
    "description": "intro-->This endpoint is used get all contacts. To use this endpoint you need to make a get request to the /contact endpoint \n\nreturnDesc--> On sucessful request, it returns\n    returnBody--> an array of all contact's details",
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
    "description": "intro-->This endpoint is used get a particular contact. To use this endpoint you need to make a get request to the /contact/{contact_id} endpoint \n\nreturnDesc--> On successful request, it returns\n    returnBody--> details of queried contact",
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
    "description": "intro-->This endpoint allows you to delete a contact. To use this endpoint you need to make a delete request to the /contact/{contact_id} endpoint \n        paramDesc-->On get request the url takes a query parameter contact_id\n            param-->contact_id: This the unique identifier of the contact\nreturnDesc--> On successful request, it returns message\n    returnBody--> \"success\"",
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
    "description": "intro-->This endpoint allows you to retrieve all contact-us message. To use this endpoint you need to make a get request to the /contactus\nreturnDesc--> On successful request, it returns message\n    returnBody--> \"success\"",
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
    "description": "intro-->This endpoint is used to send a contact-us message. To use this endpoint you need to make a post request to the /contactus endpoint with a specified body of request\n    reqBody-->name: This requires the name of the person the message\n    reqBody-->email: This requires the email of the person sending the message\n    reqBody-->subject: This is the subject of the message\n    reqBody-->message: This is the body of the contact-us message\n    \nreturnDesc--> On successful request, it returns message\n    returnBody--> \"message sent successfully\"",
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
    "description": "intro-->This endpoint allows you to retrieve a particular contact-us message. To use this endpoint you need to make a get request to the /contactus/{contactus_id}\n    paramDesc-->On get request the url takes a query parameter contactus_id\n        param-->contactus_id: This the unique identifier of the contact-us message\nreturnDesc--> On successful request, it returns \n    returnBody--> details of the contact us",
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
    "description": "intro-->This endpoint allows you to delete a contact-us message. To use this endpoint you need to make a delete request to the /contactus/{contactus_id}\n    paramDesc-->On get request the url takes a query parameter contactus_id\n        param-->contactus_id: This the unique identifier of the contact-us message\nreturnDesc--> On successful request, it returns message\n    returnBody--> \"success\"",
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
    "description": "intro-->This endpoint allows you to create a create a new blog post on the fly and takes in about two paramenters. To create a blog, you need to make a post request to the /blog endpoint\n\nparamDesc-->\n    reqBody-->title: This is the title of the blog post to be created.\n    reqBody-->content: This is the content of the blog post to be created.\n\nreturnDesc-->On sucessful request, it returns\n    returnBody--> the blog object with details specified below.",
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
    "description": "intro-->This endpoint allows you to retreive a blog post based on it's id which is included in the request url. To get a blog post, you need to make a get request to the /blog/blog_id endpoint in which \"id\" is the unique identifier of the blog item.\n\nparamDesc-->On get request the url takes a query parameter \"blog_id\":\n    url-: /blog/${blog_id}\n    param-->blog_id: This is the id of the blog item\n\nreturnDesc-->On sucessful request, it returns message,\n    returnBody--> \"success\"",
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
    "description": "intro-->This endpoint allows you to update a particular blog post. To update a blog posts, you need to make a put request to the /blog/blog_id endpoint where blog_id is the unique identifier for the blog.\n\nparamDesc-->On query, this request takes the blod id of the blog to be updated:\n    reqBody-->title: This is the title of the blog post to be created.\n    reqBody-->content: This is the content of the blog post to be created.\n\nreturnDesc-->On sucessful request, it returns\n   returnBody--> a refreshed object of the updated blog",
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
    "description": "intro-->This endpoint allows you to delete a particular blog post. To delete a blog posts, you need to make a delete request to the /blog/blog_id endpoint where blog_id is the unique identifier for the blog.\n\nparamDesc-->On delete request the url takes a query parameter \"blog_id\":\n    param-->blog_id: This is the unique id of the blog item\n\n\nreturnDesc-->On sucessful request, it returns an Object with message\n   returnBody--> \"successfully deleted\"",
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
    "description": "intro-->This endpoint allows you to retreive all blog posts in the database. To retreive all blog posts, you need to make a get request to the /blog endpoint.\n\nreturnDesc-->On sucessful request, it returns:\n   returnBody--> an array of blog objects.",
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
    "description": "intro-->This endpoint allows you to retreive all blog posts created by a particular user. To retreive all blog posts by a user, you need to make a get request to the /blog/userId endpoint where userId is the unique identifier for the user.\n\nparamDesc-->On get request the url takes a query parameter \"user_id\"   \n     param-->user_id: This is the id of the user\n\n returnDesc-->On sucessful request, it returns\n      returnBody--> an array of blog post objects created by the queried user.\n ",
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
    "description": "intro-->This endpoint returns a list of all created pages, and their details. To get this data, you need to make a get request to the /pages endpoint with a body of request specifying the title and content of the page\n\nreturnDesc-->On sucessful request, it returns\n    returnBody--> an array of page objects.",
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
    "description": "intro-->This endpoint allows you to create a new page. To create a new page you need to make a post request to the /page endpoint\n\n    reqBody-->title: This is the title of the new page\n    reqBody-->content: This is the content body of the new page \n\nreturnDesc-->On sucessful request, it returns\n    returnBody--> a page object.",
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
    "description": "intro-->This endpoint allows you to retrieve an existing page. To retreive an existing page you need to make a get request to the /page/{page_id} endpoint where page_id is the unique identifier of the page\n\nparamDesc--> On get request the url takes a query parameter \"page_id\"\n    param-->page_id: This is the id of the existing page to be updated\n    reqBody-->title: This is the title of the page\n    reqBody-->content: This is the content body of the page \n\nreturnDesc-->On sucessful request, it returns \n    returnBody--> the page object.",
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
    "description": "intro-->This endpoint allows you to update an existing page. To update an existing page you need to make a put request to the /page/{page_id} endpoint where page_id is the unique identifier of the page\n\nparamDesc--> On put request the url takes a query parameter \"page_id\"\n    param-->page_id: This is the id of the existing page to be updated\n\nreturnDesc-->On sucessful request, it returns \n    returnBody--> page object.",
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
    "description": "intro-->This endpoint allows you to delete a page. To delete a page you need to make a delete request to the /page/{page_id} endpoint where page_id is the unique identifier of the page\n\nparamDesc--> On get request the url takes a query parameter \"page_id\"\n    param-->page_id: This is the id of the existing page to be updated \n\nreturnDesc-->On sucessful request, it returns message,\n    returnBody--> \"success\"",
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
    "description": "intro-->This endpoint allows you to retrieve all plans. To use this endpoint you need to make a get request to the /plans endpoint \n\nreturnDesc--> On successful request, it returns message\n    returnBody--> \"success\"",
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
    "description": "intro-->This endpoint allows you to create a plan. To use this endpoint you need to make a post request to the /plans endpoint with a specified body of request\n    reqBody-->credit_price: This is the credit pice of the plan\n    reqBody-->access_type: This is the type of access the plan would have\n    reqBody-->duration: This is time span of the plan\n\nreturnDesc--> On successful request, it returns\n    returnBody--> details of queried contact",
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
    "description": "intro-->This endpoint is used to retrieve a particular plan. To use this endpoint you need to make a get request to the /plans/{plan_id} endpoint\n\n   paramDesc-->On get request, the url takes the plan id\n        param-->plan_id: This is the unique id of the plan\n\nreturnDesc--> On sucessful request, it returns message\n    returnBody--> \"success\"\n\nArgs:\n    plan_id (str): id of the plan\n    db (orm.Session, optional): [description]. Defaults to Depends(get_db).\n\nReturns:\n    [dict]: key value pair of the following keys:\n        message (str): success message\n        data (plan_schemas.Plan): the plan",
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
    "description": "intro-->This endpoint is used to update a particular plan. To use this endpoint you need to make a put request to the /plans/{plan_id} endpoint\n\n   paramDesc-->On put request, the url takes the plan id\n        param-->plan_id: This is the unique id of the plan\n\n        reqBody-->title: This is the title of the plan\n        reqBody-->description: This is the description of the plan\n        reqBody-->price_offers: This is an array of price offers\n        reqBody-->available_geographies: This is an array of available geographies\n        reqBody-->features: This is an array of the plan's features\n\nreturnDesc--> On sucessful request, it returns \n    returnBody--> details of the deleted plan\n\nArgs:\n    plan (plan_schemas.PlanDTO): body of the request\n    plan_id (str): id of the plan to update\n    db (orm.Session, optional): [description]. Defaults to Depends(get_db).\n    user (plan_schemas.User, optional): [description]. user initiating the request\n\nRaises:\n    HTTPException: if user is not an admin or if plan does not exist\n\nReturns:\n    [dict]: key value pair of the following keys:\n        message (str): success message\n        data (plan_schemas.Plan): the updated plan",
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
    "description": "intro-->This endpoint is used to delete a particular plan. To use this endpoint you need to make a delete request to the /plans/{plan_id} endpoint\n\n   paramDesc-->On delete request, the url takes the plan id\n        param-->plan_id: This is the unique id of the plan\n\nreturnDesc--> On sucessful request, it returns \n    returnBody--> details of the deleted plan\n\nArgs:\n    plan_id (str): id of the plan\n    db (orm.Session, optional): [description]. Defaults to Depends(get_db).\n\nReturns:\n    [dict]: key value pair of the following keys:\n        message (str): success message\n        data (plan_schemas.Plan): the deleted plan",
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
    "description": "intro-->This endpoint is used to retrieve a plans by their geography id. To use this endpoint you need to make a get request to the /plans/geography/{geography_id} endpoint\n\n    paramDesc-->On get request, the url takes the geography id\n        param-->geography_id: This is the geography id of the plans\n\nreturnDesc--> On sucessful request, array of plans with the same geography id\n    returnBody--> \"success\"\n\nArgs:\n    geography_id (str): id of the geography\n    db (orm.Session, optional): [description]. Defaults to Depends(get_db).\n\nReturns:\n    [dict]: key value pair of the following keys:\n        message (str): success message\n        data (List[plan_schemas.Plan]): list of plans",
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
    "description": "intro-->This endpoint is used to send an email. To use this endpoint you need to make a post request to the /email/send endpoint with a specified body of request\n\n    reqBody-->subject: This is the subject of the email\n    reqBody-->recipient: This is an array of emails you want to send the email to\n    reqBody-->title: This is the title of the email\n    reqBody-->first_name: This is the first name of the user\n    reqBody-->sender_address: This is the address of the user\n    reqBody-->sender_city: This is the city of the user\n    reqBody-->sender_state: This is the state of the user\n    reqBody-->body: This is the body of the email\n\nreturnDesc--> On sucessful request, it returns message,\n    returnBody--> \"Email will be sent in the background\" ",
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
    "description": "intro-->This endpoint is used to send a notification email. To use this endpoint you need to make a post request to the /email/send/notification endpoint with a specified body of request\n\n    reqBody-->subject: This is the subject of the email\n    reqBody-->recipient: This is an array of emails you want to send the email to\n    reqBody-->title: This is the title of the email\n    reqBody-->first_name: This is the first name of the user\n    reqBody-->sender_address: This is the address of the user\n    reqBody-->sender_city: This is the city of the user\n    reqBody-->sender_state: This is the state of the user\n    reqBody-->body: This is the body of the email\n\nreturnDesc--> On sucessful request, it returns message,\n    returnBody--> \"Notification Email will be sent in the background\" ",
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
    "description": "intro-->This endpoint is used to send an invoice email. To use this endpoint you need to make a post request to the /email/send/invoice endpoint with a specified body of request\n\n    reqBody-->subject: This is the subject of the email\n    reqBody-->recipient: This is an array of emails you want to send the email to\n    reqBody-->title: This is the title of the email\n    reqBody-->first_name: This is the first name of the user\n    reqBody-->sender_address: This is the address of the user\n    reqBody-->sender_city: This is the city of the user\n    reqBody-->sender_state: This is the state of the user\n    reqBody-->body: This is the body of the email\n\nreturnDesc--> On sucessful request, it returns message,\n    returnBody--> \"Invoice Email will be sent in the background\" ",
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
    "description": "intro-->This endpoint is used to send a receipt email. To use this endpoint you need to make a post request to the /email/send/receipt endpoint with a specified body of request\n\n    reqBody-->subject: This is the subject of the email\n    reqBody-->recipient: This is an array of emails you want to send the email to\n    reqBody-->title: This is the title of the email\n    reqBody-->first_name: This is the first name of the user\n    reqBody-->sender_address: This is the address of the user\n    reqBody-->sender_city: This is the city of the user\n    reqBody-->sender_state: This is the state of the user\n    reqBody-->body: This is the body of the email\n\nreturnDesc--> On sucessful request, it returns message,\n    returnBody--> \"Receipt Email will be sent in the background\" ",
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
    "description": "intro-->This endpoint is used to send a welcome email. To use this endpoint you need to make a post request to the /email/send/welcome endpoint with a specified body of request\n\n    reqBody-->subject: This is the subject of the email\n    reqBody-->recipient: This is an array of emails you want to send the email to\n    reqBody-->title: This is the title of the email\n    reqBody-->first_name: This is the first name of the user\n    reqBody-->sender_address: This is the address of the user\n    reqBody-->sender_city: This is the city of the user\n    reqBody-->sender_state: This is the state of the user\n    reqBody-->body: This is the body of the email\n\nreturnDesc--> On sucessful request, it returns message,\n    returnBody--> \"Welcome Email will be sent in the background\" ",
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
    "description": "intro-->This endpoint is used to send a Verification email. To use this endpoint you need to make a post request to the /email/send/verification endpoint with a specified body of request\n\n    reqBody-->subject: This is the subject of the email\n    reqBody-->recipient: This is an array of emails you want to send the email to\n    reqBody-->title: This is the title of the email\n    reqBody-->first_name: This is the first name of the user\n    reqBody-->sender_address: This is the address of the user\n    reqBody-->sender_city: This is the city of the user\n    reqBody-->sender_state: This is the state of the user\n    reqBody-->body: This is the body of the email\n\nreturnDesc--> On sucessful request, it returns message,\n    returnBody--> \"Verification Email will be sent in the background\" ",
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
    "description": "intro-->This endpoint is used to send a reset password email. To use this endpoint you need to make a post request to the /email/send/reset-password endpoint with a specified body of request\n\n    reqBody-->subject: This is the subject of the email\n    reqBody-->recipient: This is an array of emails you want to send the email to\n    reqBody-->title: This is the title of the email\n    reqBody-->first_name: This is the first name of the user\n    reqBody-->sender_address: This is the address of the user\n    reqBody-->sender_city: This is the city of the user\n    reqBody-->sender_state: This is the state of the user\n    reqBody-->body: This is the body of the email\n\nreturnDesc--> On sucessful request, it returns message,\n    returnBody--> \"Reset Password Email will be sent in the background\" ",
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
    "description": "intro-->This endpoint is used to send a marketing email. To use this endpoint you need to make a post request to the /email/send/marketing-email endpoint with a specified body of request\n\n    reqBody-->subject: This is the subject of the email\n    reqBody-->recipient: This is an array of emails you want to send the email to\n    reqBody-->title: This is the title of the email\n    reqBody-->first_name: This is the first name of the user\n    reqBody-->sender_address: This is the address of the user\n    reqBody-->sender_city: This is the city of the user\n    reqBody-->sender_state: This is the state of the user\n    reqBody-->body: This is the body of the email\n\nreturnDesc--> On sucessful request, it returns message,\n    returnBody--> \"Marketing Email will be sent in the background\" ",
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
    "description": "intro-->This endpoint is used for scheduling a marketing email to be sent at a particular time. To use this endpoint you need to make a post request to the /email/send/marketing-email/schedule endpoint with a specified body of request\n\n    reqBody-->subject: This is the subject of the email\n    reqBody-->recipient: This is an array of emails you want to send the email to\n    reqBody-->title: This is the title of the email\n    reqBody-->first_name: This is the first name of the user\n    reqBody-->sender_address: This is the address of the user\n    reqBody-->sender_city: This is the city of the user\n    reqBody-->sender_state: This is the state of the user\n    reqBody-->body: This is the body of the email\n\nreturnDesc--> On sucessful request, it returns message,\n    returnBody--> \"Scheduled Marketing Email will be sent in the background\" ",
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
    "description": "intro-->This endpoint returns all files that are in a single bucket. To use this endpoint you need to make a get request to the /files/{bucket_name}/ endpoint \n        paramDesc-->On get request the url takes a query parameter bucket_name\n            param-->bucket_name: This is the name of the bucket containing files of interest\nreturnDesc--> On successful request, it returns \n    returnBody--> a list of all files in the bucket",
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
    "description": "intro-->This endpoint allows you to retireve a single file from the bucket/storage. To use this endpoint you need to make a get request to the /files/{bucket_name}/{file_name} endpoint \n        paramDesc-->On get request the url takes two query parameters bucket_name & file_name\n            param-->bucket_name: This is the name of the bucket containing files of interest\n            param-->file_name: This is the name of the file of interest in the bucket/storage\nreturnDesc--> On successful request, it returns details of the file\n    returnBody--> ",
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
    "description": "intro-->This endpoint allows you to upload a file to a bucket/storage. To use this endpoint you need to make a post request to the /upload-file/{bucket_name}/ endpoint \n        paramDesc-->On post request the url takes the query parameter bucket_name\n            param-->bucket_name: This is the name of the bucket you want to save the file to, You can request a list of files in a single folder if you nee to iterate.\n            reqBody-->file_name: This is the name of the file to be uploaded\nreturnDesc--> On successful request, it returns \n    returnBody--> details of the file just created",
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
    "/comments/{model_type}": {
    "get": {
    "tags": [
    "Comments",
    "Comments"
    ],
    "summary": "Get All Comments Related To Model",
    "description": "intro-->This endpoint allows you to retrieve all comments of the same model type. To use this endpoint you need to make a get request to the /comments/{model_type} endpoint \n        paramDesc-->On get request the url takes the parameter, model_type\n            param-->model_type: This is the model type of the comment\n\nreturnDesc--> On sucessful request, it returns \n    returnBody--> an array of comments",
    "operationId": "get_all_comments_related_to_model_comments__model_type__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Model Type",
    "type": "string"
    },
    "name": "model_type",
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
    "/comments/{model_type}/{object_id}": {
    "get": {
    "tags": [
    "Comments",
    "Comments"
    ],
    "summary": "Get All Comments For Object",
    "description": "intro-->This endpoint allows you to retrieve all comments related to a specific object. To use this endpoint you need to make a get request to the /comments/{model_type}/{object_id} endpoint \n        paramDesc-->On get request the url takes two parameters, model_type & object_id\n            param-->model_type: This is the model type of the comment\n            param-->object_id: This is the id of the object that contains the comment\n\nreturnDesc--> On sucessful request, it returns \n    returnBody--> an array of comments and their threads for a specified object",
    "operationId": "get_all_comments_for_object_comments__model_type___object_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Model Type",
    "type": "string"
    },
    "name": "model_type",
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
    "description": "intro-->This endpoint is used to create a top level comment for an object. To use this endpoint you need to make a post request to the /comments/{model_type}/{object_id} endpoint \n        paramDesc-->On post request the url takes two parameters, model_type & object_id\n            param-->model_type: This is the model type of the comment\n            param-->object_id: This is the id of the comment to edit\n\nreturnDesc--> On sucessful request, it returns \n    returnBody--> details of the refreshed comment",
    "operationId": "create_new_comment_for_object_comments__model_type___object_id__post",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Model Type",
    "type": "string"
    },
    "name": "model_type",
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
    "/comments/{model_type}/{comment_id}/reply": {
    "post": {
    "tags": [
    "Comments",
    "Comments"
    ],
    "summary": "Reply To Comment",
    "description": "intro-->This endpoint is used to add a reply to a comment. To use this endpoint you need to make a post request to the /comments/{model_type}/{comment_id}/reply endpoint \n        paramDesc-->On post request the url takes two parameters, model_type & object_id\n            param-->model_type: This is the model type of the comment\n            param-->comment_id: This is the unique id of the comment\n\nreturnDesc--> On sucessful request, it returns \n    returnBody--> The newly created comment",
    "operationId": "reply_to_comment_comments__model_type___comment_id__reply_post",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Model Type",
    "type": "string"
    },
    "name": "model_type",
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
    "/comments/{model_type}/{comment_id}/update": {
    "put": {
    "tags": [
    "Comments",
    "Comments"
    ],
    "summary": "Update Comment By Id",
    "description": "intro-->This endpoint is used to edit a comment object. To use this endpoint you need to make a put request to the /comments/{model_type}/{comment_id}/update endpoint \n        paramDesc-->On put request the url takes two parameters, model_type & comment_id\n            param-->model_type: This is the model type of the comment\n            param-->comment_id: This is the unique id of the comment\n\nreturnDesc--> On sucessful request, it returns \n    returnBody--> details of the updated comment",
    "operationId": "update_comment_by_id_comments__model_type___comment_id__update_put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Model Type",
    "type": "string"
    },
    "name": "model_type",
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
    "/comments/{model_type}/{comment_id}/delete": {
    "delete": {
    "tags": [
    "Comments",
    "Comments"
    ],
    "summary": "Delete Comment By Id",
    "description": "intro-->This endpoint is used to delete a comment. To use this endpoint you need to make a delete request to the /comments/{model_type}/{comment_id}/delete endpoint \n        paramDesc-->On delete request the url takes two parameters, model_type & comment_id\n            param-->model_type: This is the model type of the comment\n            param-->comment_id: This is the id of the comment to edit\n\nreturnDesc--> On sucessful request, it returns \n    returnBody--> details of the deleted comment",
    "operationId": "delete_comment_by_id_comments__model_type___comment_id__delete_delete",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Model Type",
    "type": "string"
    },
    "name": "model_type",
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
    "/comments/{model_type}/{comment_id}/vote": {
    "post": {
    "tags": [
    "Comments",
    "Comments"
    ],
    "summary": "Vote On Comment",
    "description": "intro-->This endpoint allows you to downvote or upvote a comment. To use this endpoint you need to make a post request to the /comments/{model_type}/{comment_id}/vote endpoint \n        paramDesc-->On post request the url takes in three parameters \n            param-->model_type: This is the model type of the comment\n            param-->comment_id: This is the comment id of the comment to vote for\n            param-->action: This is a query parameter, this determines the voting action you want to perform. Must be either \"upvote\" | \"downvote\"\n\n            db (_orm.Session): DB Session to commit to. Automatically determined by FastAPI\n\nreturnDesc--> On sucessful request, it returns \n    returnBody--> a refreshed Comment object reflecting the changed votes",
    "operationId": "vote_on_comment_comments__model_type___comment_id__vote_post",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Model Type",
    "type": "string"
    },
    "name": "model_type",
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
    "description": "intro-->This endpoint is used to retrieve a users subscription details to an organization. To use this endpoint you need to make a get request to the /subscriptions/{org_Id} endpoint \n        paramDesc-->On get request the url takes in the parameter, org_id\n            param-->org_id: This is the organization Id of the organization subscribed to\n\nreturnDesc--> On sucessful request, it returns \n    returnBody--> details of the subscription",
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
    "description": "intro-->This endpoint is used to process subscription to an organization. To use this endpoint you need to make a post request to the /subscriptions endpoint with a specified body of request \n\nreturnDesc--> On sucessful request, it returns \n    returnBody--> details of the subscription",
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
    "description": "intro-->This endpoint allows you to retrieve a particular plan. To use this endpoint you need to make a get request to the /plans/{planId} endpoint \n        paramDesc-->On get request the url takes a query parameter \n            param-->planId: This is the unique identifier of the plan\nreturnDesc--> On successful request, it returns \n    returnBody--> details of the plan",
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
    "description": "intro-->This endpoint allows you to create a tutorial. To use this endpoint you need to make a post request to the /tutorial endpoint with a specified body of request \n\n    reqBody-->category: This is the tutorial category you want the tutorial to be in\n    reqBody-->title: This is the title of the tutorial\n    reqBody-->description: This is the description of the tutorial\n    reqBody-->added_by: This is the name of the user that adds the tutorial\n    reqBody-->thumbnail: This is an desciptive placeholder\n    reqBody-->stream_url: This is the streaming link of the tutorial broadcast \n    reqBody-->text: This is the text body of tutorial\n\nreturnDesc--> On sucessful request, it returns \n    returnBody--> details of the newly created tutorial",
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
    "description": "intro-->This endpoint allows you retrieve tutorials. To use this endpoint you need to make a get request to the /tutorials with a chain of query parameters \n\n    paramDesc-->On get request, the url takes four optional query parameters\n        param-->category: This is the category of the tutorial\n        param-->title: This is the title of the tutorial\n        param-->page_size: This is the size per page, this is 10 by default\n        param-->page: This is the page of interest, this is 1 by default\n    \nreturnDesc--> On sucessful request, it returns \n    returnBody--> an array of queried tutorials",
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
    "description": "intro-->This endpoint allows you to retrieve tutorials in grouped categories. To use this endpoint you need to make a get request to the /tutorials/group/categories endpoint\n\n    paramDesc-->On get request, this endpoint takes two optional query parameters\n        param-->page_size: This is the size per page, this is 10 by default\n        param-->page: This is the page of interest, this is 1 by default\n    \nreturnDesc--> On sucessful request, it returns the \n    returnBody--> grouped list of queried tutorials",
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
    "description": "intro-->This endpoint allows you to retrieve a list of all available tutorial categories. To use this endpoint you need to make a get request to the /tutorials/categories endpoint\n\n    paramDesc-->On get request, this endpoint takes two optional query parameters\n        param-->page_size: This is the size per page, this is 10 by default\n        param-->page: This is the page of interest, this is 1 by default\n    \nreturnDesc--> On sucessful request, it returns a \n    returnBody--> list of all available tutorial categories",
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
    "description": "intro-->This endpoint allows you to retrieve a list of tutorials based on a keyword query. To use this endpoint you need to make a get request to the /tutorials/search/{keyword} endpoint\n\nparamDesc-->On get request, this endpoint takes three query parameters\n    param-->keyword: This is the keyword of interest to be used for querying tutorials\n    param-->page_size: This is the size per page, this is 10 by default\n    param-->page: This is the page of interest, this is 1 by default\n\nreturnDesc--> On sucessful request, it returns a \n    returnBody--> list of all tutorials that contains the queried keyword",
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
    "description": "intro-->This endpoint allows you to update the details of a particular tutorial. To use this endpoint you need to make a put request to the /tutorials/{itemId} endpoint\n\nparamDesc-->On get request, this endpoint takes two optional query parameters\n    param-->page_size: This is the size per page, this is 10 by default\n    param-->page: This is the page of interest, this is 1 by default\n\nreturnDesc--> On sucessful request, it returns a \n    returnBody--> list of all available tutorial categories",
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
    "description": "intro-->This endpoint allows a super user to delete a tutorial. To use this endpoint you need to make a delete request to the /tutorials/{itemId}/user/{userId} endpoint\n\nparamDesc-->On delete request, this endpoint takes two parameters\n    param-->itemId: This is the unique id of the tutorial\n    param-->userId: This is the id of the user making the request, user must be a super user for this to go through\n\nreturnDesc--> On sucessful request, it returns a \n    returnBody--> list of all available tutorial categories",
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
    "/banks": {
    "post": {
    "tags": [
    "Banks"
    ],
    "summary": "Add Bank Detail",
    "description": "intro-->This endpoint allows you to bank detail object. To use this endpoint you need to make a post request to the /banks endpoint\n\nreqBody-->account_number: This is the user's bank account number\nreqBody-->bank_name: This is the user's bank name\nreqBody-->recipient_name: This is the name of the account owner\nreqBody-->account_type: This is the type of bank account\nreqBody-->organisation_id: This is the organization Id of the organization requiring the bank detail\nreqBody-->bank_addres: This is the branch address of the user's account creation \nreqBody-->swift_code: This is the bank's swift code\nreqBody-->sort_code: This is the bank's sort code\nreqBody-->country: This is the country where the bank exists\nreqBody-->aba_routing_number: This is the accounts's routing number\nreqBody-->iban: This is account's international bank account number\nreqBody-->is_preferred: This is a boolean account preference value\nreqBody-->date_created: This is the date of creation of the bank account\n\nreturnDesc--> On sucessful request, it returns \n    returnBody--> the newly created bank details\n\nArgs:\n    request: A pydantic schema that defines the room request parameters\n    db (Session): The database for storing the article object\nReturns:\n    HTTP_201_CREATED (new bank details added)\nRaises\n    HTTP_424_FAILED_DEPENDENCY: failed to create bank object\n    HTTP_403_FORBIDDEN: incomplete details",
    "operationId": "add_bank_detail_banks_post",
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
    "/banks/organizations/{organization_id}": {
    "get": {
    "tags": [
    "Banks"
    ],
    "summary": "Get Organization Bank Accounts",
    "description": "intro-->This endpoint allows you retrieve all available bank details in the database. To use this endpoint you need to make a get request to the /banks/organizations/{organization_id} endpoint\n\nparamDesc-->On get request, the request url takes the query parameter organization id and four(4) other optional query parameters\n    param-->org_id: This is the organization Id of the user's current organization\n    \nreturnDesc--> On sucessful request, it returns a \n    returnBody--> details of queried bank accounts\n\nArgs:\n    user: authenticates that the user is a logged in user\n    db (Session): The database for storing the article object\nReturns:\n    HTTP_200_OK (list of all registered bank details)\nRaises\n    HTTP_424_FAILED_DEPENDENCY: failed to fetch banks",
    "operationId": "get_organization_bank_accounts_banks_organizations__organization_id__get",
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
    "/banks/{bank_id}": {
    "get": {
    "tags": [
    "Banks"
    ],
    "summary": "Get Single Bank",
    "description": "intro-->This endpoint allows you retrieve a particular bank account. To use this endpoint you need to make a get request to the /banks/{bank_id} endpoint\n\nparamDesc-->On get request, the request url takes the  parameters bank_id and a query parameter organization id \n    param-->bank_id: This is the bank id of the bank detail\n    param-->organization_id: This is the organization Id of the user's current organization\n    \nreturnDesc--> On sucessful request, it returns a \n    returnBody--> details of queried bank account\n\nArgs:\n    bank_id: a unique identifier of the bank object.\n    user: authenticates that the user is a logged in user.\n    db (Session): The database for storing the article object.\nReturns:\n    HTTP_200_OK (bank object)\nRaises\n    HTTP_424_FAILED_DEPENDENCY: failed to create bank object\n    HTTP_4O4_NOT_FOUND: Bank does not exist.",
    "operationId": "get_single_bank_banks__bank_id__get",
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
    "put": {
    "tags": [
    "Banks"
    ],
    "summary": "Update Bank Details",
    "description": "intro-->This endpoint allows you update a bank detail. To use this endpoint you need to make a put request to the /banks/{bank_id} endpoint\n\nparamDesc-->On put request, the request url takes the parameter bank_id \n    param-->bank_id: This is the bank id of the bank detail\n\n    reqBody-->account_number: This is the user's bank account number\n    reqBody-->bank_name: This is the user's bank name\n    reqBody-->recipient_name: This is the name of the account owner\n    reqBody-->account_type: This is the type of bank account\n    reqBody-->organisation_id: This is the organization Id of the organization requiring the bank detail\n    reqBody-->bank_addres: This is the branch address of the user's account creation \n    reqBody-->swift_code: This is the bank's swift code\n    reqBody-->sort_code: This is the bank's sort code\n    reqBody-->country: This is the country where the bank exists\n    reqBody-->aba_routing_number: This is the accounts's routing number\n    reqBody-->iban: This is account's international bank account number\n    reqBody-->is_preferred: This is a boolean account preference value\n    reqBody-->date_created: This is the date of creation of the bank account\n    \nreturnDesc--> On sucessful request, it returns the\n    returnBody--> updated bank details\n\nArgs:\n    bank_id: a unique identifier of the bank object.\n    user: authenticates that the user is a logged in user.\n    db (Session): The database for storing the article object.\nReturns:\n    HTTP_200_OK (bank object)\nRaises\n    HTTP_424_FAILED_DEPENDENCY: failed to create bank object\n    HTTP_4O4_NOT_FOUND: Bank does not exist.",
    "operationId": "update_bank_details_banks__bank_id__put",
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
    "description": "intro-->This endpoint allows you delete a particular bank detail. To use this endpoint you need to make a delete request to the /banks/{bank_id} endpoint\n\nparamDesc-->On delete request, the request url takes the  parameter bank_id  \n    param-->bank_id: This is the bank id of the bank detail\n    \nreturnDesc--> On sucessful request, it returns the \n    returnBody-->  deleted bank detail\n\nArgs:\n    bank_id: a unique identifier of the bank object.\n    user: authenticates that the user is a logged in user.\n    db (Session): The database for storing the article object.\nReturns:\n    HTTP_200_OK (sucess response))\nRaises\n    HTTP_424_FAILED_DEPENDENCY: failed to delete bank details\n    HTTP_4O4_NOT_FOUND: Bank does not exist.",
    "operationId": "delete_bank_banks__bank_id__delete",
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
    "/banks/schema": {
    "get": {
    "tags": [
    "Banks"
    ],
    "summary": "Get Country Schema",
    "description": "intro-->This endpoint allows you get the valid schema for every country. To use this endpoint you need to make a get request to the /banks/schema endpoint\n\nparamDesc-->On get request, the request url takes the query parameter country \n    param-->country: This is the country of interest\n    \nreturnDesc--> On sucessful request, it returns the \n    returnBody--> valid schema for queried country\n\nArgs:\n    country: Country whose schema structure is to be fetched.\nReturns:\n    HTTP_200_OK (bank object)\nRaises: \n    HTTP_4O4_NOT_FOUND: Country not in the list of supported countries.",
    "operationId": "get_country_schema_banks_schema_get",
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
    "/banks/validator": {
    "get": {
    "tags": [
    "Banks"
    ],
    "summary": "Validate Bank Details",
    "description": "intro-->This endpoint allows you to fetch details needed to add bank details based on country provided. To use this endpoint you need to make a get request to the /banks/validator endpoint\n\nparamDesc-->On get request, the request url takes the query parameter country \n    param-->country: This is the country of interest\n    \nreturnDesc--> On sucessful request, it returns the\n    returnBody-->  details needed to add bank details based on country provided\n\nArgs:\n    country: Country whose schema structure is to be fetched.\nReturns:\n    HTTP_200_OK (bank object)\nRaises\n    HTTP_4O4_NOT_FOUND: Country not in the list of supported countries.",
    "operationId": "validate_bank_details_banks_validator_get",
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
    "description": "intro-->This endpoint allows you to retrieve all organizations. To use this endpoint you need to make a get request to the /organizations endpoint \n\n        paramDesc-->On get request, the request url takes two(2) optional query parameters\n            param-->page_size: This is the size per page, this is 10 by default\n            param-->page_number: This is the page of interest, this is 1 by default\n    \nreturnDesc--> On sucessful request, it returns \n    returnBody--> a list of organizations",
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
    "description": "intro-->This endpoint allows you to create a new organization. To use this endpoint you need to make a post request to the /organization endpoint with a specified body of request\n\n        reqBody-->mission: This is the mission f the organization\n        reqBody-->vision: This is the vision of the organization\n        reqBody-->name: This is the name of the organization\n        reqBody-->country: This is the organization's country of operation\n        reqBody-->state: This is the organization's state of operation\n        reqBody-->address: This is a descriptive address of where the organization is located\n        reqBody-->currency_preference: This is the currency of preference of the organization\n        reqBody-->phone_number: This is the phone contact detail of the organization\n        reqBody-->email This is the email contact address of the organization\n        reqBody-->current_subscription: This is the current subscription plan of the organization\n        reqBody-->tagline: This is a tagline to identify the organization with\n        reqBody-->image: This is a link to cover image for the organization\n        reqBody-->values: This describes the values of the organization\n        reqBody-->business_type: This is the type of business the organization runs\n        reqBody-->credit_balance: This is a value representing the organization's credit balance\n        reqBody-->image_full_path: This is full url path to the company's cover image\n        reqBody-->add_template: This is a boolean value that determines wether to add already available templates for the organization.\n    \nreturnDesc--> On sucessful request, it returns\n    returnBody--> details of the newly created organization",
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
    "/organizations/{organization_id}": {
    "get": {
    "tags": [
    "Organization",
    "Organization"
    ],
    "summary": "Get Organization",
    "description": "intro-->This endpoint allows you to retrieve details of a particular organizations. To use this endpoint you need to make a get request to the /organizations/{organization_id} endpoint \n\n        paramDesc-->On get request, the request url takes the parameter, organization id\n            param-->organization_id: This is unique Id of the organization of interest\n    \nreturnDesc--> On sucessful request, it returns \n    returnBody--> details of the queried organization",
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
    "description": "intro-->This endpoint allows you to update the details of a particular organization organization. To use this endpoint you need to make a put request to the /organizations/{organization_id} endpoint with a specified body of request\n\n    paramDesc-->On put request, the request url takes the parameter, organization id \n        param-->organization_id: This is the unique Id of the organization of interest\n\n        reqBody-->mission: This is the mission f the organization\n        reqBody-->vision: This is the vision of the organization\n        reqBody-->name: This is the name of the organization\n        reqBody-->country: This is the organization's country of operation\n        reqBody-->state: This is the organization's state of operation\n        reqBody-->address: This is a descriptive address of where the organization is located\n        reqBody-->currency_preference: This is the currency of preference of the organization\n        reqBody-->phone_number: This is the phone contact detail of the organization\n        reqBody-->email This is the email contact address of the organization\n        reqBody-->current_subscription: This is the current subscription plan of the organization\n        reqBody-->tagline: This is a tagline to identify the organization with\n        reqBody-->image: This is a link to cover image for the organization\n        reqBody-->values: This describes the values of the organization\n        reqBody-->business_type: This is the type of business the organization runs\n        reqBody-->credit_balance: This is a value representing the organization's credit balance\n        reqBody-->image_full_path: This is full url path to the company's cover image\n        reqBody-->add_template: This is a boolean value that determines wether to add already available templates for the organization.\n    \nreturnDesc--> On sucessful request, it returns,\n    returnBody--> details of the updated organization",
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
    "Organization",
    "Organization"
    ],
    "summary": "Delete Organization",
    "description": "intro-->This endpoint allows you to delete an organization. To use this endpoint you need to make a delete request to the /organizations/{organization_id} endpoint\n\n    paramDesc-->On delete request, the request url takes the parameter, organization id \n        param-->organization_id: This is the unique Id of the organization of interest\n    \nreturnDesc--> On sucessful request, it returns\n    returnBody--> \"success\"",
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
    "description": "intro-->This endpoint allows you to get all users in an organization. To use this endpoint you need to make a get request to the /organizations/{organization_id}/users endpoint \n\n    paramDesc-->On get request, the request url takes the parameter, organization id\n        param-->organization_id: This is unique Id of the organization of interest\n    \nreturnDesc--> On sucessful request, it returns the \n    returnBody--> details of all users in the queried organization",
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
    "/organizations/{organization_id}/users/{user_id}": {
    "delete": {
    "tags": [
    "Organization",
    "Organization"
    ],
    "summary": "Delete Organization User",
    "description": "intro-->This endpoint allows you to delete a particular user from an organization. To use this endpoint you need to make a delete request to the /organizations/{organization_id}/users/{user_id} endpoint \n\n    paramDesc-->On delete request, the request url takes two(2) parameters, organization id and user id\n        param-->organization_id: This is unique Id of the organization of interest\n        param-->user_id: This is the unique id of the user to be removed from the organization\n    \nreturnDesc--> On sucessful request, it returns message,\n    returnBody--> User with email {email} successfully removed from the store",
    "operationId": "delete_organization_user_organizations__organization_id__users__user_id__delete",
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
    "/organizations/{organization_id}/roles": {
    "get": {
    "tags": [
    "Organization",
    "Organization"
    ],
    "summary": "Get Roles",
    "description": "intro-->This endpoint allows you to retrieve all available roles in an organization. To use this endpoint you need to make a get request to the /organizations/{organization_id}/roles endpoint \n\n    paramDesc-->On get request, the request url takes the parameter, organization id \n        param-->organization_id: This is the unique Id of the organization of interest\n    \nreturnDesc--> On sucessful request, it returns,\n    returnBody--> all available roles in the queried organization",
    "operationId": "get_roles_organizations__organization_id__roles_get",
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
    },
    "post": {
    "tags": [
    "Organization",
    "Organization"
    ],
    "summary": "Add Role",
    "description": "intro-->This endpoint allows you to create roles in an organization. To use this endpoint you need to make a post request to the /organizations/{organization_id}/roles endpoint with a specified body of request\n\n    paramDesc-->On get request, the request url takes the parameter, organization id \n        param-->organization_id: This is the unique Id of the organization of interest\n\n        reqBody-->organization_id: This is a unique Id of the organization of interest\n        reqBody-->role_name: This is the name of the new role to be created in the organization\n    \nreturnDesc--> On sucessful request, it returns,\n    returnBody--> details of the newly created organization role",
    "operationId": "add_role_organizations__organization_id__roles_post",
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
    "$ref": "#/components/schemas/AddRole"
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
    "/organizations/invites/{organization_id}": {
    "get": {
    "tags": [
    "Organization",
    "Organization"
    ],
    "summary": "Get Pending Invites",
    "description": "intro-->This endpoint allows you to retrieve all pending invites to an organization. To use this endpoint you need to make a get request to the /organizations/invites/{organization_id} endpoint\n\n    paramDesc-->On get request, the request url takes the parameter, organization id \n        param-->organization_id: This is the unique Id of the organization of interest\n\n    \nreturnDesc--> On sucessful request, it returns,\n    returnBody--> all pending invites in the queried organization",
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
    "description": "intro-->This endpoint allows you to update the cover image of an organization. To use this endpoint you need to make a put request to the /organizations/{organization_id}/update-image endpoint with a specified body of request\n\n    paramDesc-->On put request, the request url takes the parameter, organization id \n        param-->organization_id: This is the unique Id of the organization of interest\n    \nreturnDesc--> On sucessful request, it returns,\n    returnBody--> details of the updated organization",
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
    "description": "intro-->This endpoint allows you to retrieve the cover image of an organization. To use this endpoint you need to make a get request to the /organizations/{organization_id}/image endpoint\n\n    paramDesc-->On get request, the request url takes the parameter, organization id \n        param-->organization_id: This is the unique Id of the organization of interest\n    \nreturnDesc--> On sucessful request, it returns the\n    returnBody--> full_image_path property of the organization",
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
    "description": "intro-->This endpoint allows get a personalized qr code. To use this endpoint you need to make a get request to the /qrcode\n\n    paramDesc-->On get request, the url takes the query parameter data\n        param-->data: This is the info mapped to the qr code\n    \nreturnDesc--> On sucessful request, it returns \n    returnBody--> a unique qr code",
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
    "description": "intro-->This endpoint allows you to retrieve an organization's setting. To use this endpoint you need to make a get request to the /organization/{org_id}/settings endpoint\n\n    paramDesc-->On get request, the request url takes the parameter, org id \n        param-->org_id: This is unique Id of the organization of interest\n\n    \nreturnDesc--> On sucessful request, it returns\n    returnBody--> details of the queried organization's settings",
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
    "description": "intro-->This endpoint allows you to update an organization's setting. To use this endpoint you need to make a put request to the /organization/{org_id}/settings endpoint\n\n    paramDesc-->On get request, the request url takes the parameter, org id \n        param-->org_id: This is unique Id of the organization of interest\n    \n        reqBody-->email: This is the email address of the organization\n        reqBody-->location: This is the location address of the organization\n        reqBody-->phone_number: This is the phone number of the organization\n        reqBody-->organization_size: This is the size of the organization\n        reqBody-->organization_type: This is the type of the organization\n        reqBody-->country: This is the country of operation of the organization\n        reqBody-->state: This is the state of operation if the organization\n        reqBody-->city: This is the city of operation of the organization\n        reqBody-->zip_code: This is the unique zip code of the organization's location\n    \nreturnDesc--> On sucessful request, it returns\n    returnBody--> details of the updated organization settings",
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
    "description": "intro-->This endpoint allows you to add new organization settings. To use this endpoint you need to make a post request to the /organization/{org_id}/settings endpoint with a specified body of request\n\n    paramDesc-->On post request, the request url takes the parameter, org id \n        param-->org_id: This is the unique Id of the organization of interest\n\n        reqBody-->email: This is the email address of the organization\n        reqBody-->location: This is the location address of the organization\n        reqBody-->phone_number: This is the phone number of the organization\n        reqBody-->organization_size: This is the size of the organization\n        reqBody-->organization_type: This is the type of the organization\n        reqBody-->country: This is the country of operation of the organization\n        reqBody-->state: This is the state of operation if the organization\n        reqBody-->city: This is the city of operation of the organization\n        reqBody-->zip_code: This is the unique zip code of the organization's location\n    \nreturnDesc--> On sucessful request, it returns\n    returnBody--> details of the newly created organization settings",
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
    "/settings": {
    "get": {
    "tags": [
    "Settings",
    "Settings"
    ],
    "summary": "Get App Settings",
    "description": "intro-->This endpoint allows you to retrieve all settings in the application . To use this endpoint you need to make a get request to the /settings endpoint\n\n    \nreturnDesc--> On sucessful request, it returns\n    returnBody--> a list of all settings in the application",
    "operationId": "get_app_settings_settings_get",
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "title": "Response Get App Settings Settings Get",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/AppSetting"
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
    "Settings",
    "Settings"
    ],
    "summary": "Add App Settings",
    "description": "intro-->This endpoint allows you to create an app setting. To use this endpoint you need to make a post request to the /settings endpoint\n        \n        reqBody-->value: This is the value/description of the setting\n        reqBody-->name: This is the name of the new app setting\n        \nreturnDesc--> On sucessful request, it returns\n    returnBody--> details of the newly created setting",
    "operationId": "add_app_settings_settings_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CreateAppSetting"
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
    "$ref": "#/components/schemas/AppSetting"
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
    "/settings/{name}": {
    "get": {
    "tags": [
    "Settings",
    "Settings"
    ],
    "summary": "Get App Setting",
    "description": "intro-->This endpoint allows you to retrieve a particular setting based on it's name. To use this endpoint you need to make a get request to the /settings/{name} endpoint\n        paramDesc-->On get request, the request url takes the parameter name\n            param-->name: This is the name of the app setting of interest\n\nreturnDesc--> On sucessful request, it returns the\n    returnBody--> details of the queried setting",
    "operationId": "get_app_setting_settings__name__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Name",
    "type": "string"
    },
    "name": "name",
    "in": "path"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/AppSetting"
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
    "/settings/{id}": {
    "put": {
    "tags": [
    "Settings",
    "Settings"
    ],
    "summary": "Update App Setting",
    "description": "intro-->This endpoint allows you to update a particular application setting. To use this endpoint you need to make a put request to the /settings/{id} endpoint\n        paramDesc-->On get request, the request url takes the parameter id\n            param-->id: This is the unique id of the app setting of interest\n    \nreturnDesc--> On sucessful request, it returns the\n    returnBody--> details of the queried setting",
    "operationId": "update_app_setting_settings__id__put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Id",
    "type": "string"
    },
    "name": "id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CreateAppSetting"
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
    "$ref": "#/components/schemas/AppSetting"
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
    "Settings",
    "Settings"
    ],
    "summary": "Delete App Settings",
    "description": "intro-->This endpoint allows you to delete a particular setting. To use this endpoint you need to make a delete request to the /settings/{id} endpoint\n        paramDesc-->On get request, the request url takes the parameter name\n            param-->id: This is the unique id of the app setting of interest\n        \nreturnDesc--> On sucessful request, it returns message,\n    returnBody--> \"deleted\"",
    "operationId": "delete_app_settings_settings__id__delete",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Id",
    "type": "string"
    },
    "name": "id",
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
    "/wallets": {
    "post": {
    "tags": [
    "Wallet",
    "Wallet"
    ],
    "summary": "Create Wallet",
    "description": "intro-->This endpoint allows you to create a wallet. To use this endpoint you need to make a post request to the /wallets endpoint with s specified body of request\n        \n        reqBody-->organization_id: This is the user's current organization\n        reqBody-->currency_code: This is the short code of the currency the wallet will accept\n        reqBody-->user_id: This is the unique id of the user the wallet will be created for \n        \nreturnDesc--> On sucessful request, it returns\n    returnBody--> details of the newly created wallet",
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
    "description": "intro-->This endpoint allows you to retrieve all the wallets in an organization. To use this endpoint you need to make a get request to the /wallets/{organization_id} endpoint\n        \n        paramDesc-->On get request, the request url takes the  parameter organization id and two(2) optional query parameters \n            param-->organization_id: This is unique id of the organization of interest\n            param-->page: This is the page of interest, this is 1 by default\n            param-->size: This is the size per page, this is 10 by default\n\n        \nreturnDesc--> On sucessful request, it returns a\n    returnBody--> list of queried wallets",
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
    "description": "intro-->This endpoint allows you to retrieve the wallet of an organization. To use this endpoint you need to make a get request to the /wallets/{organization_id}/{currency} endpoint\n        \n        paramDesc-->On get request, the request url takes two(2) parameters, organization id and currency\n            param-->organization_id: This is unique id of the organization of interest\n            param-->currency: This is the currency you want to retrieve the organization's wallet in\n\n        \nreturnDesc--> On sucessful request, it returns \n    returnBody--> details of the queried organization's wallet",
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
    "description": "intro-->This endpoint allows you to retrieve an organization's wallet transactions. To use this endpoint you need to make a get request to the /wallets/{organization_id}/{currency}/transactions endpoint\n        \n        paramDesc-->On get request, the request url takes two(2) parameters, organization id and currency and two(2) optional query parameters\n            param-->organization_id: This is unique id of the organization of interest\n            param-->currency: This is the currency you want to retrieve the organization's wallet in\n            param-->page: This is the page of interest, this is 1 by default\n            param-->size: This is the size per page, this is 10 by default\n        \nreturnDesc--> On sucessful request, it returns \n    returnBody--> wallet transactions details of the queried organization",
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
    "description": "intro-->This endpoint allows you to retrieve all available credit rates. To use this endpoint you need to make a get request to the /credits/rates endpoint\n\n    ParamDesc-->On get request, the request url takes two(2) optional query parameters\n        param-->page: This is the page of interest, this is 1 by default\n        param-->size: This is the size per page, this is 10 by default\n\nreturnDesc--> On sucessful request, it returns  \n    returnBody--> a list of all available credit rates",
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
    "description": "intro-->This endpoint allows a super user to add a credit rate. To use this endpoint you need to make a post request to the /credits/rates endpoint\n\n    reqBody-->rate: This is the value of the credit rate\n    reqBody-->currency_code: This is the short code of the currency of interest\n\nreturnDesc--> On sucessful request, it returns  \n    returnBody--> details of the newly created credit rate",
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
    "description": "intro-->This endpoint allows you to retrieve the credit rate for a particular currency. To use this endpoint you need to make a get request to the /credits/rates/{currency} endpoint\n\n    ParamDesc-->On get request, the request url takes the parameter, currency\n        param-->currency: This is the currency of interest\n\nreturnDesc--> On sucessful request, it returns\n    returnBody--> the details of the queried currency",
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
    },
    "put": {
    "tags": [
    "CreditWallet",
    "CreditWallet"
    ],
    "summary": "Update Rate",
    "description": "intro-->This endpoint allows you to update the credit rate for a particular currency. To use this endpoint you need to make a put request to the /credits/rates/{currency} endpoint\n\n    ParamDesc-->On get request, the request url takes the parameter, currency\n        param-->currency: This is the currency of interest\n\n        reqBody-->rate: This is the credit rate of the currency to be updated\n\nreturnDesc--> On sucessful request, it returns\n    returnBody--> the details of the updated rate",
    "operationId": "update_rate_credits_rates__currency__put",
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
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/UpdateCreditWalletConversion"
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
    "/credits/callback/stripe": {
    "get": {
    "tags": [
    "CreditWallet",
    "CreditWallet"
    ],
    "summary": "Verify Stripe Payment",
    "description": "intro-->This endpoint allows you to verify a stripe payment. To use this endpoint you need to make a get request to the /credits/callback/stripe endpoint\n\n    ParamDesc-->On get request, the request url takes three(3) query parameters\n        param-->status: This is the the status of the payment\n        param-->tx_ref: This is the transaction reference \n        param-->transaction_id: This is the unique id of the transaction\n\nreturnDesc--> On sucessful request, it returns the\n    returnBody--> details of the transacation",
    "operationId": "verify_stripe_payment_credits_callback_stripe_get",
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
    "required": true,
    "schema": {
    "title": "Transaction Id",
    "type": "string"
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
    "/credits/callback/flutterwave": {
    "get": {
    "tags": [
    "CreditWallet",
    "CreditWallet"
    ],
    "summary": "Verify Flutterwave Payment",
    "description": "intro-->This endpoint allows you to verify a flutterwave payment. To use this endpoint you need to make a get request to the /credits/callback/flutterwave endpoint\n\n    ParamDesc-->On get request, the request url takes three(3) query parameters\n        param-->status: This is the the status of the payment\n        param-->tx_ref: This is the transaction reference \n        param-->transaction_id: This is the unique id of the transaction\n\nreturnDesc--> On sucessful request, it returns the\n    returnBody--> details of the transacation",
    "operationId": "verify_flutterwave_payment_credits_callback_flutterwave_get",
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
    "description": "intro-->This endpoint allows you to retrieve the credit  detail for a particular organization. To use this endpoint you need to make a get request to the /credits/{organization_id} endpoint\n\n    ParamDesc-->On get request, the request url takes the parameter, organization id\n        param-->organization_id: This is the unique id of the organization\n        \n\nreturnDesc--> On sucessful request, it returns\n    returnBody--> the details of the queried organization's credit",
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
    "description": "intro-->This endpoint allows you to add a credit detail for a particular organization, on creation it returns a payment link. To use this endpoint you need to make a post request to the /credits/{organization_id} endpoint with a specified body of request\n\n    ParamDesc-->On get request, the request url takes the parameter, organization id\n        param-->organization_id: This is the unique id of the organization\n        \n        reqBody-->currency: This is the currency of the credit detail\n        reqBody-->amount: This is the amount/value of the credit action\n        reqBody-->provider: This is the payment provider for the credit action\n        reqBody-->redirect_url: This is the redirect url to the payment provider platform\n\nreturnDesc--> On sucessful request, it returns \n    returnBody--> a payment link",
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
    "description": "intro-->This endpoint allows you to retrieve the credit wallet history of a particular organization. To use this endpoint you need to make a get request to the /credits/{organization_id}/history endpoint\n\n    ParamDesc-->On get request, the request url takes the parameter organization id and two(2) optional query parameters    \n        param-->organization_id: This is the unique id of the organization\n        param-->page: This is the page of interest, this is 1 by default\n        param-->size: This is the size per page, this is 10 by default\n\nreturnDesc--> On sucessful request, it returns the\n    returnBody--> details of the credit wallet history of the queried organization",
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
    "description": "intro-->This endpoint allows you to details of a particular notification. You need to make a get request to the /notification/{notification_id} \n\nparamDesc--> On get request the url takes a query parameter \"notification_id\"\n    param-->notification_id: This is the unique identifier of the notification\n\nreturnDesc-->On sucessful request, it returns\n    returnBody--> details of the notification.",
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
    "description": "intro-->This endpoint allows you to delete a particular notification from the database. You need to make a delete request to the /notification/{notification_id} endpoint.\n\nparamDesc-->On delete request the url takes a query parameter \"notification_id\" \n    param-->notification_id: This is the unique identifier of the notification\n\nreturnDesc-->On sucessful request, it returns message,\n    returnBody--> \"success\".",
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
    "description": "intro-->This endpoint allows you to retrieve all notifications from the database. To retrieve you need to make a get request to the /notifications endpoint\n\n\nreturnDesc-->On sucessful request, it returns\n    returnBody--> an array of notifications.",
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
    "description": "intro-->This endpoint allows you to create a new notification. To create, you need to make a post request to the /notification endpoint with a required body of request as specified below\n\n    reqBody-->content: This is the content of the notification\n    reqBody-->recipient: This the receiver of the notification\n    reqBody-->reference: This is a unique identifier of the notification\n    reqBody-->creator: This is the creator of the notification\n\nreturnDesc-->On sucessful request, it returns\n    returnBody--> the details of the newly created notification.",
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
    "description": "intro-->This endpoint allows you mark a queried notifications as read. To use, you need to make a put request to the /notification/{notification_id}/read enpoint. \n\nparamDesc--> On put request the url takes a query parameter \"notification_id\" \n    param-->notification_id: This is the unique identifier of the notification\n\nreturnDesc-->On sucessful request, it returns\n    returnBody--> details of the updated notification.",
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
    "description": "intro-->This endpoint allows you mark all notifications as read. To use, you need to make a put request to the /notification/read enpoint. \n\nreturnDesc-->On sucessful request it returns \n    returnBody--> an array of the notifications.",
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
    "description": "intro-->This endpoint allows you to update a particular notification. You need to make a put request to the /notification/{notification_id} endpoint.\n\nparamDesc-->On put request the url takes a query parameter \"notification_id\" \n    param-->notification_id: This is the unique identifier of the notification\n    reqBody-->content: This is the content of the notification\n    reqBody-->recipient: This the receiver of the notification\n    reqBody-->reference: This is a unique identifier of the notification\n\nreturnDesc-->On sucessful request, it returns message,\n    returnBody--> \"success\".",
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
    "summary": "Convert To Pdf",
    "operationId": "convert_to_pdf_exporttopdf_post",
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
    "/receipts": {
    "get": {
    "summary": "Fetch Receipts",
    "description": "An endpoint to fetch all receipts. \nNote: The message field in the payload should be HTML formatted.",
    "operationId": "fetch_receipts_receipts_get",
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
    "title": "Page",
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
    "summary": "Send Receipt",
    "description": "An endpoint to send receipts. \nNote: The message field in the payload should be HTML formatted.",
    "operationId": "send_receipt_receipts_post",
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
    "201": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/bigfastapi__schemas__receipt_schemas__ResponseModel"
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
    "/customers": {
    "get": {
    "tags": [
    "Customers 💁"
    ],
    "summary": "Get Customers",
    "description": "intro-->This endpoint allows you to fetch all customers registered in an organisation sorted by most recently added. To use this endpoint you need to make a get request to the /customers endpoint\n\n    paramDesc-->On get request, the request url takes in the query parameter organization_id and a number of other optional query parameters\n        param-->organization_id: This is the unique id of the organization of interest\n        param-->search_value: A search string for filtering customers to be fetch\n        param-->sorting_key: A string by which to sort the list of customers\n        param-->reverse_sort: A boolean to determine if objects should be sorted in ascending or descending order. defaults to True (ascending order)\n        param-->size: This is the size per page, this is 10 by default\n        param-->page: This is the page of interest, this is 1 by default\n    returnDesc--> On sucessful request, it returns \n    returnBody--> details of the customers\n\n    db (Session): Session database connection for storing the customer object.\n    user: user authentication validator\n    \nReturns:\n    status_code: HTTP_200_OK (request successful)\n    response_model: paginated list of customers\nRaises\n    HTTP_404_NOT_FOUND: orgainization not found\n    HTTP_401_FORBIDDEN: Not Authenticated\n    HTTP_422_UNPROCESSABLE_ENTITY: request Validation error",
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
    "title": "Page",
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
    "type": "integer",
    "default": 50
    },
    "name": "size",
    "in": "query"
    },
    {
    "required": false,
    "schema": {
    "title": "Reverse Sort",
    "type": "boolean",
    "default": true
    },
    "name": "reverse_sort",
    "in": "query"
    }
    ],
    "responses": {
    "200": {
    "description": "Successful Response",
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/PaginatedCustomerResponse"
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
    "post": {
    "tags": [
    "Customers 💁"
    ],
    "summary": "Create Customer",
    "description": "intro-->This endpoint allows you to create a new customer. To use this endpoint you need to make a post request to the /customers endpoint with a specified body of request\n\nreturnDesc--> On sucessful request, it returns a \n    returnBody--> \nArgs:\n    customer: A pydantic schema that defines the customer request parameters. e.g\n                    { \"first_name\" (required): \"string\", \n                    \"last_name\" (required): \"string\",\n                    \"unique_id\" (required): \"string\",\n                    \"organization_id\" (required): \"09512826638748bd9bd06d22812cc06b\",\n                    \"email\": \"string@gmail.com\",\n                    \"phone_number\": \"string\",\n                    \"business_name\": \"string\",\n                    \"location\": \"string\",\n                    \"gender\": \"string\",\n                    \"age\": 0,\n                    \"postal_code\": \"string\",\n                    \"language\": \"string\",\n                    \"country\": \"string\",\n                    \"city\": \"string\",\n                    \"region\": \"string\",\n                    \"country_code\": \"string\",\n                    \"other_info\": [{\"value\": \"string\",\n                        \"key\": \"string\"}]}\n    db (Session): Session database connection for storing the customer object.\n    background_tasks: A parameter that allows tasks to be performed at the background\n    user: user authentication validator\n    \nReturns:\n    status_code: HTTP_201_CREATED (new customer created)\n    response_model: CustomerResponse e.g\n            {message: str, customer: customer_instance}\nRaises\n    HTTP_404_NOT_FOUND: object does not exist in db\n    HTTP_401_FORBIDDEN: Not Authenticated\n    HTTP_422_UNPROCESSABLE_ENTITY: request Validation error",
    "operationId": "create_customer_customers_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CustomerBase"
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
    "$ref": "#/components/schemas/CustomerResponse"
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
    "description": "intro-->This endpoint creates customer objects from a valid csv file. To use this endpoint you need to make a post request to the /customers/import/{organization_id} endpoint\n\n\nreturnDesc--> On sucessful request, it returns \n    returnBody--> details of the newly created customers\n\nCreates a multiple customer objects from a valid csv file.\nArgs:\n    organization_id: A unique identifier of an organisation\n    background_tasks: A parameter that allows tasks to be performed at the background\n    file: A standard csv file containing specific customer information to be created. e.g\n                    { \"first_name\" (required): \"string\", \n                    \"last_name\" (required): \"string\",\n                    \"unique_id\" (required): \"string\",\n                    \"organization_id\" (required): \"09512826638748bd9bd06d22812cc06b\",\n                    \"email\": \"string@gmail.com\",\n                    \"phone_number\": \"string\",\n                    \"business_name\": \"string\",\n                    \"location\": \"string\",\n                    \"gender\": \"string\",\n                    \"age\": 0,\n                    \"postal_code\": \"string\",\n                    \"language\": \"string\",\n                    \"country\": \"string\",\n                    \"city\": \"string\",\n                    \"region\": \"string\",\n                    \"country_code\": \"string\",\n                    \"other_info\": [{\"value\": \"string\",\n                        \"key\": \"string\"}]\n                    }\n    db (Session): Session database connection for storing the customer object.\n    user: user authentication validator\n    \nReturns:\n    status_code: HTTP_201_CREATED (new customer created)\n    response_model: CustomerResponse e.g\n            {message: str, customer: customer_instance}\nRaises\n    HTTP_404_NOT_FOUND: object does not exist in db\n    HTTP_401_FORBIDDEN: Not Authenticated\n    HTTP_406_NOT_ACCEPTABLE: missing required fields or invalid file\n    HTTP_500_INTERNAL_SERVER_ERROR: unexpected error types",
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
    "/customers/{customer_id}": {
    "get": {
    "tags": [
    "Customers 💁"
    ],
    "summary": "Get Customer",
    "description": "intro-->This endpoint allows you to fetch a single customer object from the database using a unique customer id. To use this endpoint you need to make a get request to the /customers endpoint\n\n    paramDesc-->On get request, the request url takes in the query parameter customer_id\n        param-->customer_id: This is a unique identifier of the customer of interest\n        \n    returnDesc--> On sucessful request, it returns \n    returnBody--> details of the customer\n\nArgs:\n    customer_id: A unique identifier of a customer\n    db (Session): Session database connection for storing the customer object.\n    user: user authentication validator\n    \nReturns:\n    status_code: HTTP_200_OK (request successful)\n    response_model: CustomerResponse (schema)\nRaises\n    HTTP_404_NOT_FOUND: object does not exist in db\n    HTTP_401_FORBIDDEN: Not Authenticated",
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
    "$ref": "#/components/schemas/CustomerResponse"
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
    "description": "intro-->This endpoint allows you to update a customer's details. To use this endpoint you need to make a put request to the /customers/{customer_id} endpoint\n\n    paramDesc-->On get request, the request url takes the parameter, customer_id\n        param-->customer_id: This is a unique identifier of the customer of interest\n        \n    returnDesc--> On sucessful request, it returns \n    returnBody--> updated details of the customer\n\nArgs:\n    customer_id: A unique identifier of a customer\n    background_tasks: A parameter that allows tasks to be performed at the background\n    db (Session): Session database connection for storing the customer object.\n    user: user authentication validator\n    customer: A pydantic schema that defines the customer request parameters to be updated.\n            All fields are optional e.g\n                    { unique_id: Optional[str] =None\n                    first_name: Optional[str] = None\n                    last_name: Optional[str] = None\n                    email: Optional[str] = None\n                    phone_number: Optional[str] = None\n                    organization_id: Optional[str] = None\n                    business_name: str =None\n                    location: str =None\n                    gender: Optional[str] = None\n                    age: Optional[int] = None\n                    postal_code: Optional[str] = None\n                    language: Optional[str] = None\n                    country: Optional[str] = None\n                    city: Optional[str] = None\n                    region: Optional[str] = None\n                    country_code: Optional[str] = None\n                    other_info: [{\"value\": \"string\",\n                        \"key\": \"string\"}]\n                    }\nReturns:\n    status_code: HTTP_200_OK (request successful)\n    response_model: CustomerResponse (schema)\nRaises\n    HTTP_404_NOT_FOUND: object does not exist in db\n    HTTP_401_FORBIDDEN: Not Authenticated",
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
    "$ref": "#/components/schemas/CustomerBase"
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
    "$ref": "#/components/schemas/CustomerResponse"
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
    "description": "intro-->This endpoint allows you to delete a particular customer from the database. To use this endpoint you need to make a delete request to the /customers/{customer_id} endpoint\n\n    paramDesc-->On delete request, the request url takes the parameter, customer_id\n        param-->customer_id: This is a unique identifier of the customer of interest\n        \n    returnDesc--> On sucessful request, it returns message,\n    returnBody-->  Customer deleted succesfully\n\nArgs:\n    customer_id: A unique identifier of a customer\n    db (Session): Session database connection for storing the customer object.\n    user: user authentication validator\n    \nReturns:\n    status_code: HTTP_200_OK (request successful)\n    response_model: {\"message\": \"Customer deleted succesfully\"}\nRaises\n    HTTP_404_NOT_FOUND: object does not exist in db\n    HTTP_401_FORBIDDEN: Not Authenticated",
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
    "$ref": "#/components/schemas/CustomerResponse"
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
    "description": "intro-->This endpoint allows you to delete all customers in a particular organization. To use this endpoint you need to make a delete request to the /customers/organization/{organization_id} endpoint\n\n    paramDesc-->On delete request, the request url takes the parameter, customer_id\n        param-->customer_id: This is a unique identifier of the customer of interest\n        \n    returnDesc--> On sucessful request, it returns message,\n    returnBody-->  Customers deleted succesfully\n\nArgs:\n    organization_id: A unique identifier of an organisation\n    db (Session): Session database connection for storing the customer object.\n    user: user authentication validator\n    \nReturns:\n    status_code: HTTP_200_OK (request successful)\n    response_model: {\"message\": \"Customers deleted succesfully\"}\nRaises\n    HTTP_404_NOT_FOUND: object does not exist in db\n    HTTP_401_FORBIDDEN: Not Authenticated",
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
    "$ref": "#/components/schemas/CustomerResponse"
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
    "/customers/inactive/selected": {
    "put": {
    "tags": [
    "Customers 💁"
    ],
    "summary": "Make Customers Inactive",
    "description": "intro-->This endpoint allows you to render customers inactive. To use this endpoint you need to make a put request to the /customers/inactive/selected endpoint\n\nreturnDesc--> On sucessful request, it returns a \n    returnBody--> list of the customers rendered inactive",
    "operationId": "make_customers_inactive_customers_inactive_selected_put",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "title": "List Customer Id",
    "type": "array",
    "items": {
    "type": "string"
    }
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
    "$ref": "#/components/schemas/CustomerResponse"
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
    "description": "intro-->This endpoint allows you to send an sms. To use this endpoint you need to make a post request to the /sms/send endpoint\n\n    reqBody-->sender: This is the name of the sender\n    reqBody-->recipient: This is the recipient of the sms\n    reqBody-->body: This is the content of the sms\n    reqBody-->provider: This is the network provider\n    reqBody-->user: This the current user \n    reqBody-->passkey: This is unique passkey\n\nreturnDesc--> On sucessful request, it returns message,\n    returnBody--> \"success\"",
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
    "/schedule": {
    "get": {
    "summary": "Get Schedules",
    "operationId": "get_schedules_schedule_get",
    "parameters": [
    {
    "required": false,
    "schema": {
    "title": "Organization Id",
    "type": "string",
    "default": ""
    },
    "name": "organization_id",
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
    "summary": "Create Schedule",
    "operationId": "create_schedule_schedule_post",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/CreateReminderSchedule"
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
    "/single-schedule/{schedule_id}": {
    "get": {
    "summary": "Get Schedules",
    "operationId": "get_schedules_single_schedule__schedule_id__get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Schedule Id",
    "type": "string"
    },
    "name": "schedule_id",
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
    "/schedule/{schedule_id}": {
    "put": {
    "summary": "Update Schedule",
    "operationId": "update_schedule_schedule__schedule_id__put",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Schedule Id",
    "type": "string"
    },
    "name": "schedule_id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/UpdateSchedule"
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
    "/schedule/delete/{schedule_id}": {
    "delete": {
    "summary": "Delete Schedule",
    "operationId": "delete_schedule_schedule_delete__schedule_id__delete",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Schedule Id",
    "type": "string"
    },
    "name": "schedule_id",
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
    "/logs/{model_name}/{object_id}": {
    "post": {
    "tags": [
    "Activitieslog"
    ],
    "summary": "Addactivitieslog",
    "description": "intro-->This endpoint allows you record an activity log. To use this endpoint you need to make a post request to the /logs/{model_name}/{object_id} endpoint\n\n    paramDesc-->On get request, the url takes two parameters\n        param-->model_name: This is the model name\n        param-->object_id: This is the object id\n\n        reqBody-->action: This is the activity description\n        reqBody-->object_url: This is the url link to the log\n        reqBody-->organization_id: This is the user's current organization\n    \nreturnDesc--> On sucessful request, it returns message,\n    returnBody--> log successfully recorded",
    "operationId": "addActivitiesLog_logs__model_name___object_id__post",
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
    "$ref": "#/components/schemas/ActivitiesLogBase"
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
    "/logs/details": {
    "get": {
    "tags": [
    "Activitieslog"
    ],
    "summary": "Getactivitieslog",
    "description": "intro-->This endpoint allows you retrieve details of all logs. To use this endpoint you need to make a get request to the /logs/details endpoint\n\n    paramDesc-->On get request, the url takes the parameter, organization_id\n        param-->organization_id: This is the user's current organization\n    \nreturnDesc--> On sucessful request, it returns \n    returnBody--> details of the organization's activity logs",
    "operationId": "getActivitiesLog_logs_details_get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Organization Id",
    "type": "string"
    },
    "name": "organization_id",
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
    }
    },
    "/logs/{id}": {
    "delete": {
    "tags": [
    "Activitieslog"
    ],
    "summary": "Deleteactivitieslog",
    "description": "intro-->This endpoint allows you delete a particular log. To use this endpoint you need to make a delete request to the /logs/{id} endpoint\n\n    paramDesc-->On delete request, the url takes the parameter, id\n        param-->id: This is the the unique id of the log\n\n        reqBody-->organization_id: This is the user's current organization\n    \nreturnDesc--> On sucessful request, it returns \n    returnBody--> details of the deleted log",
    "operationId": "deleteActivitiesLog_logs__id__delete",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Id",
    "type": "string"
    },
    "name": "id",
    "in": "path"
    }
    ],
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/DeleteActivitiesLogBase"
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
    "/logs": {
    "delete": {
    "tags": [
    "Activitieslog"
    ],
    "summary": "Deleteallactivitieslog",
    "description": "intro-->This endpoint allows you delete all logs in an organization. To use this endpoint you need to make a delete request to the /logs endpoint with a specified body of request\n\n        reqBody-->organization_id: This is the user's current organization\n    \nreturnDesc--> On sucessful request, it returns message,\n    returnBody--> \"deleted successfully\"",
    "operationId": "deleteAllActivitiesLog_logs_delete",
    "requestBody": {
    "content": {
    "application/json": {
    "schema": {
    "$ref": "#/components/schemas/DeleteActivitiesLogBase"
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
    "/failedimports": {
    "get": {
    "tags": [
    "failed_imports"
    ],
    "summary": "Create Bulk Customer",
    "operationId": "create_bulk_customer_failedimports_get",
    "parameters": [
    {
    "required": true,
    "schema": {
    "title": "Organization Id",
    "type": "string"
    },
    "name": "organization_id",
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
    "ActivitiesLogBase": {
    "title": "ActivitiesLogBase",
    "required": [
    "organization_id"
    ],
    "type": "object",
    "properties": {
    "action": {
    "title": "Action",
    "type": "string",
    "default": ""
    },
    "object_url": {
    "title": "Object Url",
    "type": "string",
    "default": ""
    },
    "organization_id": {
    "title": "Organization Id",
    "type": "string"
    }
    }
    },
    "AddBank": {
    "title": "AddBank",
    "required": [
    "account_number",
    "bank_name",
    "organisation_id",
    "bank_address",
    "country"
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
    "recipient_name": {
    "title": "Recipient Name",
    "type": "string"
    },
    "account_type": {
    "title": "Account Type",
    "type": "string"
    },
    "currency": {
    "title": "Currency",
    "type": "string"
    },
    "frequency": {
    "$ref": "#/components/schemas/Frequencies"
    },
    "organisation_id": {
    "title": "Organisation Id",
    "type": "string"
    },
    "bank_address": {
    "title": "Bank Address",
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
    "title": "Country",
    "type": "string"
    },
    "aba_routing_number": {
    "title": "Aba Routing Number",
    "type": "string"
    },
    "iban": {
    "title": "Iban",
    "type": "string"
    },
    "is_preferred": {
    "title": "Is Preferred",
    "type": "boolean",
    "default": false
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time"
    }
    }
    },
    "AddRole": {
    "title": "AddRole",
    "required": [
    "role_name"
    ],
    "type": "object",
    "properties": {
    "organization_id": {
    "title": "Organization Id",
    "type": "string"
    },
    "role_name": {
    "title": "Role Name",
    "type": "string"
    }
    }
    },
    "AppSetting": {
    "title": "AppSetting",
    "required": [
    "value",
    "name",
    "id"
    ],
    "type": "object",
    "properties": {
    "value": {
    "title": "Value",
    "type": "string"
    },
    "name": {
    "title": "Name",
    "type": "string"
    },
    "id": {
    "title": "Id",
    "type": "string"
    }
    }
    },
    "BankResponse": {
    "title": "BankResponse",
    "required": [
    "account_number",
    "bank_name",
    "organisation_id",
    "bank_address",
    "country",
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
    "recipient_name": {
    "title": "Recipient Name",
    "type": "string"
    },
    "account_type": {
    "title": "Account Type",
    "type": "string"
    },
    "currency": {
    "title": "Currency",
    "type": "string"
    },
    "frequency": {
    "$ref": "#/components/schemas/Frequencies"
    },
    "organisation_id": {
    "title": "Organisation Id",
    "type": "string"
    },
    "bank_address": {
    "title": "Bank Address",
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
    "title": "Country",
    "type": "string"
    },
    "aba_routing_number": {
    "title": "Aba Routing Number",
    "type": "string"
    },
    "iban": {
    "title": "Iban",
    "type": "string"
    },
    "is_preferred": {
    "title": "Is Preferred",
    "type": "boolean",
    "default": false
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
    "CreateAppSetting": {
    "title": "CreateAppSetting",
    "required": [
    "value",
    "name"
    ],
    "type": "object",
    "properties": {
    "value": {
    "title": "Value",
    "type": "string"
    },
    "name": {
    "title": "Name",
    "type": "string"
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
    "CreateReminderSchedule": {
    "title": "CreateReminderSchedule",
    "required": [
    "organization_id",
    "start_reminder",
    "no_of_days",
    "repeat_every"
    ],
    "type": "object",
    "properties": {
    "organization_id": {
    "title": "Organization Id",
    "type": "string"
    },
    "start_reminder": {
    "$ref": "#/components/schemas/StartReminder"
    },
    "no_of_days": {
    "title": "No Of Days",
    "type": "integer"
    },
    "repeat_every": {
    "$ref": "#/components/schemas/RepeatEvery"
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
    "provider",
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
    "provider": {
    "$ref": "#/components/schemas/PaymentProvider"
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
    "unique_id",
    "customer_id"
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
    "organization_id": {
    "title": "Organization Id",
    "type": "string"
    },
    "email": {
    "title": "Email",
    "type": "string"
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
    "other_info": {
    "title": "Other Info",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/OtherInfo"
    },
    "default": []
    },
    "is_deleted": {
    "title": "Is Deleted",
    "type": "boolean",
    "default": false
    },
    "is_inactive": {
    "title": "Is Inactive",
    "type": "boolean",
    "default": false
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time",
    "default": "2022-05-10T14:53:58.616919"
    },
    "last_updated": {
    "title": "Last Updated",
    "type": "string",
    "format": "date-time",
    "default": "2022-05-10T14:53:58.616919"
    },
    "default_currency": {
    "title": "Default Currency",
    "type": "string"
    },
    "customer_id": {
    "title": "Customer Id",
    "type": "string"
    }
    }
    },
    "CustomerBase": {
    "title": "CustomerBase",
    "required": [
    "unique_id"
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
    "organization_id": {
    "title": "Organization Id",
    "type": "string"
    },
    "email": {
    "title": "Email",
    "type": "string"
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
    "other_info": {
    "title": "Other Info",
    "type": "array",
    "items": {
    "$ref": "#/components/schemas/OtherInfo"
    },
    "default": []
    },
    "is_deleted": {
    "title": "Is Deleted",
    "type": "boolean",
    "default": false
    },
    "is_inactive": {
    "title": "Is Inactive",
    "type": "boolean",
    "default": false
    },
    "date_created": {
    "title": "Date Created",
    "type": "string",
    "format": "date-time",
    "default": "2022-05-10T14:53:58.616919"
    },
    "last_updated": {
    "title": "Last Updated",
    "type": "string",
    "format": "date-time",
    "default": "2022-05-10T14:53:58.616919"
    },
    "default_currency": {
    "title": "Default Currency",
    "type": "string"
    }
    }
    },
    "CustomerResponse": {
    "title": "CustomerResponse",
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
    "DeleteActivitiesLogBase": {
    "title": "DeleteActivitiesLogBase",
    "required": [
    "organization_id"
    ],
    "type": "object",
    "properties": {
    "organization_id": {
    "title": "Organization Id",
    "type": "string"
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
    "Frequencies": {
    "title": "Frequencies",
    "enum": [
    "Yearly",
    "Monthly",
    "Daily"
    ],
    "type": "string",
    "description": "An enumeration."
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
    "business_type": {
    "title": "Business Type",
    "type": "string",
    "default": "retail"
    },
    "credit_balance": {
    "title": "Credit Balance",
    "type": "integer"
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
    "business_type": {
    "title": "Business Type",
    "type": "string",
    "default": "retail"
    },
    "credit_balance": {
    "title": "Credit Balance",
    "type": "integer"
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
    "OtherInfo": {
    "title": "OtherInfo",
    "required": [
    "value",
    "key"
    ],
    "type": "object",
    "properties": {
    "value": {
    "title": "Value",
    "type": "string"
    },
    "key": {
    "title": "Key",
    "type": "string"
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
    "PaginatedCustomerResponse": {
    "title": "PaginatedCustomerResponse",
    "required": [
    "page",
    "size",
    "total",
    "items"
    ],
    "type": "object",
    "properties": {
    "page": {
    "title": "Page",
    "type": "integer"
    },
    "size": {
    "title": "Size",
    "type": "integer"
    },
    "total": {
    "title": "Total",
    "type": "integer"
    },
    "items": {
    "title": "Items",
    "type": "array",
    "items": {}
    },
    "previous_page": {
    "title": "Previous Page",
    "type": "string"
    },
    "next_page": {
    "title": "Next Page",
    "type": "string"
    }
    }
    },
    "PaymentProvider": {
    "title": "PaymentProvider",
    "enum": [
    "flutterwave",
    "stripe"
    ],
    "description": "An enumeration."
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
    "RepeatEvery": {
    "title": "RepeatEvery",
    "enum": [
    "DAY",
    "WEEK",
    "MONTH"
    ],
    "type": "string",
    "description": "An enumeration."
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
    "StartReminder": {
    "title": "StartReminder",
    "enum": [
    "Before Due Date",
    "After Due Date"
    ],
    "type": "string",
    "description": "An enumeration."
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
    "UpdateCreditWalletConversion": {
    "title": "UpdateCreditWalletConversion",
    "required": [
    "rate"
    ],
    "type": "object",
    "properties": {
    "rate": {
    "title": "Rate",
    "type": "number"
    }
    }
    },
    "UpdateSchedule": {
    "title": "UpdateSchedule",
    "type": "object",
    "properties": {
    "start_reminder": {
    "$ref": "#/components/schemas/StartReminder"
    },
    "no_of_days": {
    "title": "No Of Days",
    "type": "integer"
    },
    "repeat_every": {
    "$ref": "#/components/schemas/RepeatEvery"
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
    "type": "object",
    "properties": {
    "id": {
    "title": "Id",
    "type": "string"
    },
    "organization_id": {
    "title": "Organization Id",
    "type": "string"
    },
    "sender_email": {
    "title": "Sender Email",
    "type": "string"
    },
    "message": {
    "title": "Message",
    "type": "string"
    },
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
    },
    "default": []
    },
    "file_id": {
    "title": "File Id",
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
    "bigfastapi__schemas__receipt_schemas__ResponseModel": {
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
    "bigfastapi__schemas__store_user_schemas__UserUpdate": {
    "title": "UserUpdate",
    "required": [
    "email"
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
    },
    "email": {
    "title": "Email",
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
    "description": "BigFast's auth api allows you to manage creation and authentication of users in a seamless manner. You can create new users and authenticate existing users based on specified parameters"
    },
    {
    "name": "countries",
    "description": "BigFast's countries api allows you to get all countries in the world and thier respective states, you can also query for country codes including dial codes and sample phone formats"
    },
    {
    "name": "pages",
    "description": "BigFast's pages api allows you to manage creation, retrieval, updating, and deletion of pages seamlessly. You can create pages with a specified title and content body"
    },
    {
    "name": "notification",
    "description": "BigFast's notifications api  allows you to create notifications and manage the notification flow in your application. You can easily make queries like marking a specific notification as read, marking all notifications as read e.t.c."
    },
    {
    "name": "activitieslog",
    "description": "BigFast's activity log api allows you to record and manage activity logs for an organization. You can log/record acitvies in an organization and easily retireve them later on."
    },
    {
    "name": "banks",
    "description": "BigFast's bank api allows you to add and manage bank details for an organization. You can also perform operations like validating a bank detail and retrieving a valid bank detail schema for a country of interest"
    },
    {
    "name": "comments",
    "description": "BigFast's comments api allows you easily build a comments architecture for your application. With bigfast's comment api you can manage creation of a comment thread, creation of a comment, replies, updating a comment and deletion of a comment. The comments api also enables upvoting and downvoting a comment"
    },
    {
    "name": "contactsandcontactus",
    "description": "BigFast's contact api allows you to create and manage contact directories while the contact us api allows you to build out a contact us architecture. With the contact us endpoints you can implement sending of a contact us message, retrieval of contact us message and carry out other more specific actions."
    },
    {
    "name": "countries",
    "description": "BigFast's countries api exposes a lot of useful functionalities. You can call and get all countries in the world and their respective states. You can also retreive more specific data using the provided."
    },
    {
    "name": "creditwallet",
    "description": "BigFast's credit api allows you to create and retrieve custom credit rates, you can also add and retrieve credit deails for an organization. It also exposes endpoints you can use to verify payments with payment providers."
    },
    {
    "name": "customers",
    "description": "BigFast's customers api exposes a a group of API routes related to customers. You can seamlessly create, retrieve, update and delete customer details."
    },
    {
    "name": "transactionalemails",
    "description": "BigFast's Transactional Emails api allows you to send emails. We have also made more specific email templates available."
    },
    {
    "name": "file",
    "description": "BigFast's file api allows you upload/store files in our database. When uploading a file, it is stored in a collection which you specify, we call this collection a bucket"
    },
    {
    "name": "organization",
    "description": "BigFast's organization api is very robust, and exposes many essential endpoints you can use to run an organization. You can create and manage an organization, create roles in an organization and mange invites to an organization."
    },
    {
    "name": "plan",
    "description": "BigFast's plan api allows you to create a service plan and retrieve when needed. This is useful for organizations with various service plans for customers"
    },
    {
    "name": "qrcode",
    "description": "BigFast's qr code api provides a unique qr code"
    },
    {
    "name": "settings",
    "description": "BigFast's settings api provides a schema you can use to setup/bootstrap an organization. You can add an organization settings and recall/reference it wherever. This api also allows you you to create custom settings for your application, basically your setting will have a name and a value which can then be retrieved when needed"
    },
    {
    "name": "subscription",
    "description": "BigFast's subscription api allows you create subscription packeges for an organization, which can then be subscribed to by a user"
    },
    {
    "name": "tutorials",
    "description": "BigFast's tutorial is another great api. This api allows you to create and mange tutorials for your application you can specify a category on creation and retrieve later on, based on the category. You can also retrieve a tutorial based on a specified keyword."
    },
    {
    "name": "wallet",
    "description": "BigFast's wallet is another great api. This api allows you to create a wallet for a user in an organization. You can retrieve user wallets based on the organization, the wallet currency e.t.c."
    },
    {
    "name": "user",
    "description": "BigFast's users api allows you and mange user's and user processes in your application."
    },
    {
    "name": "faqandsupport",
    "description": "BigFast's Faq and Support api allows you to and set up a faq section in your application. This api alows creation and retireval of faqs. We also offer a support ticket workflow, you can incorporate the creation, replying and closing of support tickets in your application."
    },
    {
    "name": "sendsms",
    "description": "BigFast's Send Sms api allows you to send an sms with a body of request containing details of the sms action."
    }
    ]
    }