Feature: Coding Challenge

@Regression
Scenario Outline: Open Weather API testing with Parameters
Given User connects to Openweather website
Then Using Resource:<Resource> and Zip:<Zipcode> and Key:<ApiKey> Assert that status code is ok
Then Using Resource:<Resource> and Zip:<Zipcode> and Key:<ApiKey> Assert that response is in Json Format
Then Using Resource:<Resource> and Zip:<Zipcode> and Key:<ApiKey> Validate the city name from response
Then Using Resource:<Resource> and Zip:<Zipcode> and Key:<ApiKey> Get the temperature from your response
Then Using Resource:<Resource> and Zip:<Zipcode> and Key:<ApiKey> Validate the response time
Then Using Resource:<Resource> and Zip:<Zipcode> and Key:<ApiKey> Assert on the Latitude and Longitude from the response
 
Examples:
|Resource 			 |Zipcode	  |ApiKey					   		|
|/data/2.5/weather   |03867,us    |3813494aebca6ec7206ddd5fedd5961b | 