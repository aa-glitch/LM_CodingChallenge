$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Coding Challenge",
  "description": "",
  "id": "coding-challenge",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Open Weather API testing with Parameters",
  "description": "",
  "id": "coding-challenge;open-weather-api-testing-with-parameters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User connects to Openweather website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Using Resource:\u003cResource\u003e and Zip:\u003cZipcode\u003e and Key:\u003cApiKey\u003e Assert that status code is ok",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Using Resource:\u003cResource\u003e and Zip:\u003cZipcode\u003e and Key:\u003cApiKey\u003e Assert that response is in Json Format",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Using Resource:\u003cResource\u003e and Zip:\u003cZipcode\u003e and Key:\u003cApiKey\u003e Validate the city name from response",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Using Resource:\u003cResource\u003e and Zip:\u003cZipcode\u003e and Key:\u003cApiKey\u003e Get the temperature from your response",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Using Resource:\u003cResource\u003e and Zip:\u003cZipcode\u003e and Key:\u003cApiKey\u003e Validate the response time",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Using Resource:\u003cResource\u003e and Zip:\u003cZipcode\u003e and Key:\u003cApiKey\u003e Assert on the Latitude and Longitude from the response",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "coding-challenge;open-weather-api-testing-with-parameters;",
  "rows": [
    {
      "cells": [
        "Resource",
        "Zipcode",
        "ApiKey"
      ],
      "line": 14,
      "id": "coding-challenge;open-weather-api-testing-with-parameters;;1"
    },
    {
      "cells": [
        "/data/2.5/weather",
        "03867,us",
        "3813494aebca6ec7206ddd5fedd5961b"
      ],
      "line": 15,
      "id": "coding-challenge;open-weather-api-testing-with-parameters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Open Weather API testing with Parameters",
  "description": "",
  "id": "coding-challenge;open-weather-api-testing-with-parameters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User connects to Openweather website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Using Resource:/data/2.5/weather and Zip:03867,us and Key:3813494aebca6ec7206ddd5fedd5961b Assert that status code is ok",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Using Resource:/data/2.5/weather and Zip:03867,us and Key:3813494aebca6ec7206ddd5fedd5961b Assert that response is in Json Format",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Using Resource:/data/2.5/weather and Zip:03867,us and Key:3813494aebca6ec7206ddd5fedd5961b Validate the city name from response",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Using Resource:/data/2.5/weather and Zip:03867,us and Key:3813494aebca6ec7206ddd5fedd5961b Get the temperature from your response",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Using Resource:/data/2.5/weather and Zip:03867,us and Key:3813494aebca6ec7206ddd5fedd5961b Validate the response time",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Using Resource:/data/2.5/weather and Zip:03867,us and Key:3813494aebca6ec7206ddd5fedd5961b Assert on the Latitude and Longitude from the response",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_connects_to_openweather_website()"
});
formatter.result({
  "duration": 888218897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/data/2.5/weather",
      "offset": 15
    },
    {
      "val": "03867,us",
      "offset": 41
    },
    {
      "val": "3813494aebca6ec7206ddd5fedd5961b",
      "offset": 58
    }
  ],
  "location": "stepDefinition.using_resource_and_zip_and_key_assert_that_status_code_is_ok(String,String,String)"
});
formatter.result({
  "duration": 1937554107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/data/2.5/weather",
      "offset": 15
    },
    {
      "val": "03867,us",
      "offset": 41
    },
    {
      "val": "3813494aebca6ec7206ddd5fedd5961b",
      "offset": 58
    }
  ],
  "location": "stepDefinition.using_resource_and_zip_and_key_assert_that_response_is_in_json_format(String,String,String)"
});
formatter.result({
  "duration": 82916437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/data/2.5/weather",
      "offset": 15
    },
    {
      "val": "03867,us",
      "offset": 41
    },
    {
      "val": "3813494aebca6ec7206ddd5fedd5961b",
      "offset": 58
    }
  ],
  "location": "stepDefinition.using_resource_and_zip_and_key_get_the_city_name_from_response(String,String,String)"
});
formatter.result({
  "duration": 755346694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/data/2.5/weather",
      "offset": 15
    },
    {
      "val": "03867,us",
      "offset": 41
    },
    {
      "val": "3813494aebca6ec7206ddd5fedd5961b",
      "offset": 58
    }
  ],
  "location": "stepDefinition.using_resource_and_zip_and_key_get_the_temperature_from_your_response(String,String,String)"
});
formatter.result({
  "duration": 94908379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/data/2.5/weather",
      "offset": 15
    },
    {
      "val": "03867,us",
      "offset": 41
    },
    {
      "val": "3813494aebca6ec7206ddd5fedd5961b",
      "offset": 58
    }
  ],
  "location": "stepDefinition.using_resource_and_zip_and_key_validate_the_response_time(String,String,String)"
});
formatter.result({
  "duration": 88636867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/data/2.5/weather",
      "offset": 15
    },
    {
      "val": "03867,us",
      "offset": 41
    },
    {
      "val": "3813494aebca6ec7206ddd5fedd5961b",
      "offset": 58
    }
  ],
  "location": "stepDefinition.using_resource_and_zip_and_key_assert_on_the_latitude_and_longitude_from_the_response(String,String,String)"
});
formatter.result({
  "duration": 96042517,
  "status": "passed"
});
});