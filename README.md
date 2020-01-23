### butler-app

## Requirements

* Node(10.x or greater)
* Mongo DB
  
## Setup and Run

* Unzip the butlers.zip
* Open the root folder in terminal (cd butlers)
* npm install
* npm start

## Butlers API
# Creat Butler 
* POST - http://localhost:3000/api/v1/butler
# example payload
  {
        "butlerId": 1,
	"butlerName": "butler1"
  } 

# Get All Butlers
* GET - http://localhost:3000/api/v1/butler

# Get Butlers by Params
* GET - http://localhost:3000/api/v1/butler/find/param?butlerId=1

# Update Butlers by Object Id
* PUT - http://localhost:3000/api/v1/butler/{object-id}
# example payload
{
        "butlerId": 12,
	"butlerName": "butler12"
} 

## Requests API
# Creat Request 
* POST - http://localhost:3000/api/v1/request
# example payload
  {
        "butlerId": 1,
	"requestId": "123",
	"status": "open"
  } 

# Get All Requests
* GET - http://localhost:3000/api/v1/request

# Get Requests by Params
* GET - http://localhost:3000/api/v1/request/find/param?butlerId=1

# Update Requests by Object Id
* PUT - http://localhost:3000/api/v1/request/{object-id}
# example payload
{
        "butlerId": 1,
	"requestId": "123",
	"status": "inprogress"
}