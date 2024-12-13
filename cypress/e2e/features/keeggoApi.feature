Feature: API

    Scenario:  User logs in successfully
        Given the user has valid login credentials
        When the user sends a login request
        Then the user should receive a successful response

    Scenario: List all users successfully
        Given the user wants to list all users
        When the user sends a request to list users
        Then the user should receive a successful response with a list of users

    Scenario: Create a user successfully
        Given the user wants to create a new user
        When the user sends a request to create a user
        Then the user should receive a successful response and the user is created

    Scenario: Get a specific user successfully
        Given the user wants to get a specific user
        When the user sends a request to get the user
        Then the user should receive a successful response with the user details
