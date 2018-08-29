package stepdefinitions;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.lessThan;

import java.util.concurrent.TimeUnit;

import org.junit.runner.RunWith;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import junit.framework.Assert;

@RunWith(Cucumber.class)
public class stepDefinition {
	

	     @Given("^User connects to Openweather website$")
    public void user_connects_to_openweather_website() throws Throwable {
        System.out.println("User connects to OpenweatherApI");
        RestAssured.baseURI = "http://api.openweathermap.org"; 
    }
	     
	     @Then("^Using Resource:(.+) and Zip:(.+) and Key:(.+) Assert that status code is ok$")
	     public void using_resource_and_zip_and_key_assert_that_status_code_is_ok(String resource, String zipcode, String apikey) throws Throwable {
	    		given().
	    			queryParam("zip",zipcode).
	    			queryParam("appid",apikey).
	    			when().get(resource).then().assertThat().statusCode(200);
	     }

	     @Then("^Using Resource:(.+) and Zip:(.+) and Key:(.+) Assert that response is in Json Format$")
	     public void using_resource_and_zip_and_key_assert_that_response_is_in_json_format(String resource, String zipcode, String apikey) throws Throwable {
	    	 given().
	  			queryParam("zip",zipcode).
	  			queryParam("appid",apikey).
	  			when().get(resource).then().assertThat().contentType(ContentType.JSON);
	     }

	    @Then("^Using Resource:(.+) and Zip:(.+) and Key:(.+) Validate the city name from response$")
	     public void using_resource_and_zip_and_key_get_the_city_name_from_response(String resource, String zipcode, String apikey) throws Throwable {
	    	given().
	  			queryParam("zip",zipcode).
	  			queryParam("appid",apikey).
	  			when().get(resource).then().assertThat().body("name", equalTo("Concord"));
	       	    	    	    	
	     }

	     
/*	    @Then("^Using Resource:(.+) and Zip:(.+) and Key:(.+) Validate the city name from response$")
	     public void using_resource_and_zip_and_key_get_the_city_name_from_response(String resource, String zipcode, String apikey) throws Throwable {
	    	String cityname = given().
	  			queryParam("zip",zipcode).
	  			queryParam("appid",apikey).
	  			when().get(resource).then().extract().path("name");
	       	System.out.println("Your zipcode is in City: " + cityname);
	    	    	    	
	     }
*/
	     @Then("^Using Resource:(.+) and Zip:(.+) and Key:(.+) Get the temperature from your response$")
	     public void using_resource_and_zip_and_key_get_the_temperature_from_your_response(String resource, String zipcode, String apikey) throws Throwable {
	    	Response rest=  given().
	  			queryParam("zip",zipcode).
	  			queryParam("appid",apikey).
	  			when().get(resource).then().extract().response();
	    	
	    	/* 	String resp = rest.asString();
	    		JsonPath js= new JsonPath(resp);
	    		String temp = js.getString("main.temp");
	    		System.out.println("Temperature at Zipcode: " + zipcode + " is: " + temp);
	     	*/
	    	
	    	JsonPath js= ReusableMethod.rawToJson(rest);
	    	 String temp=js.getString("main.temp");
	    	 System.out.println("Temperature at Zipcode: " + zipcode + " is: " + temp);
	     }     
	    
  
	     @Then("^Using Resource:(.+) and Zip:(.+) and Key:(.+) Validate the response time$")
	     public void using_resource_and_zip_and_key_validate_the_response_time(String resource, String zipcode, String apikey) throws Throwable {
	    	 given().
	  			queryParam("zip",zipcode).
	  			queryParam("appid",apikey).
	  			when().get(resource).then().assertThat().time(lessThan(100L),TimeUnit.MILLISECONDS);
	     }

		     

	     @Then("^Using Resource:(.+) and Zip:(.+) and Key:(.+) Assert on the Latitude and Longitude from the response$")
	     public void using_resource_and_zip_and_key_assert_on_the_latitude_and_longitude_from_the_response(String resource, String zipcode, String apikey) throws Throwable {
	    	Response coordn= given().
	  			queryParam("zip",zipcode).
	  			queryParam("appid",apikey).
	  			when().get(resource).then().extract().response();
	  			
	    	 JsonPath js= ReusableMethod.rawToJson(coordn);
	    	 String longt=js.getString("coord.lon");
	    	 System.out.println("Your longitude is: " + longt);
	    	
	    	 String latt=js.getString("coord.lat");
	    	 System.out.println("Your latitude is: " + latt);
	    	
   		
	    		Float lattf = Float.valueOf(latt);
	    		Float l_lattf  = 43.1f;
	    		Float h_lattf =  44.1f;
	    		Assert.assertTrue(l_lattf <= lattf && lattf <=h_lattf); 
	    		
	     }
	     
}
	     
	     
    
    


